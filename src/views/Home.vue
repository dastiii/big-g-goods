<template>
  <div class="max-w-7xl px-2 mx-auto flex flex-wrap lg:flex-no-wrap">
    <div class="w-full order-2 lg:w-2/3 lg:order-none">
      <div class="space-y-8">
        <!-- This example requires Tailwind CSS v2.0+ -->
        <sale-items :items="saleItems" :isLoading="isLoading"></sale-items>
        <assortment-items :items="filteredItems" :isLoading="isLoading"></assortment-items>
      </div>
    </div>
    <div class="w-full order-1 mb-8 lg:w-1/3 lg:order-none lg:mb-0">
      <div class="sticky top-4 space-y-8">
        <div class="px-8 space-y-3">
          <h3 class="text-sm text-gray-700 uppercase">Suche</h3>
          <div class="mt-1 px-1 relative rounded-md shadow-sm w-full">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input v-model="search" type="text" class="outline-none focus:ring focus:ring-red-500 pr-3 py-2 focus:border-red-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="z.B. Golderz">
          </div>
        </div>
        <div class="px-8 space-y-3">
          <h3 class="text-sm text-gray-700 uppercase">Filter</h3>
          <div>
            <div v-if="tags.length <= 0" class="px-1">
              <div v-if="isLoading">Tags werden geladen...</div>
              <div v-else>Keine Tags gefunden.</div>
            </div>
            <tag v-for="tag in tags" :key="tag" :name="tag" @added="addTag" @removed="removeTag"></tag>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from '@/views/home/Tag';
import SaleItems from '@/views/home/SaleItems';
import AssortmentItems from '@/views/home/AssortmentItems';

export default {
  name: 'Home',
  components: {
    AssortmentItems,
    SaleItems,
    Tag
  },
  data() {
    return {
      isLoading: false,
      items: [],
      tags: [],
      activeTags: [],
      search: null,
    }
  },

  computed: {
    saleItems() {
      return this.items.filter(item => item.salePrice);
    },

    filteredItems() {
      let items = this.items;

      items = this.items.filter(item => !item.salePrice);

      if (this.search) {
        items = items.filter(item => {
          return item.name.match(new RegExp(this.search, "i"));
        });
      }

      if (this.activeTags.length > 0) {
        items = items.filter(item => {
          return this.activeTags.every(tag => item.tags.includes(tag));
        });
      }

      return items;
    },
  },

  created() {
    this.fetchData()
      .then(res => this.updateData(res))
      .catch(err => this.handleError(err));
  },

  methods: {
    async fetchData() {
      return await this.$http.get(`v1/stock`);
    },

    updateData(res) {
      this.items = res.data.items;
      this.tags = res.data.tags;
      this.isLoading = false;
    },

    handleError() {
      this.isLoading = false;
    },

    addTag(tag) {
      if (this.activeTags.includes(tag)) return;

      this.activeTags.push(tag);
    },

    removeTag(tag) {
      let index = this.activeTags.findIndex(
          activeTag => tag === activeTag
      );

      this.activeTags.splice(index, 1);
    }
  }
};
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.list-move {
  transition: transform 0.3s;
}
</style>
