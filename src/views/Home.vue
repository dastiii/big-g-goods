<template>
  <div class="max-w-7xl px-2 mx-auto flex">
    <div class="w-2/3">
      <div class="space-y-8">
        <!-- This example requires Tailwind CSS v2.0+ -->
        <div class="flex flex-col space-y-4">
          <h2 class="text-2xl">Unser Sortiment</h2>

          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <transition-group
                    name="list"
                    tag="tbody"
                    class="bg-white divide-y divide-gray-200"
                  >
                  <tr v-if="!filteredItems.length && !isLoading" key="no-items">
                    <td class="px-6 py-4 whitespace-nowrap text-gray-500" colspan="2">
                      Aktuell können wir dir keine Produkte anbieten, komm' einfach später wieder vorbei.
                    </td>
                  </tr>
                  <tr v-if="isLoading" key="items-loading">
                    <td class="px-6 py-4 whitespace-nowrap text-gray-500" colspan="2">
                      Produkte werden geladen, einen Augenblick bitte.
                    </td>
                  </tr>
                  <assortment-item v-for="item in filteredItems" :item="item" :key="item.hash"></assortment-item>
                  </transition-group>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/3">
      <div class="sticky top-4 space-y-8">
        <div class="px-8 space-y-4">
          <h3 class="text-sm text-gray-700 uppercase">Suche</h3>
          <div class="mt-1 relative rounded-md shadow-sm w-full">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input v-model="search" type="text" class="outline-none focus:ring focus:ring-red-500 pr-3 py-2 focus:border-red-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="z.B. Golderz">
          </div>
        </div>
        <div class="px-8 space-y-3">
          <h3 class="text-sm text-gray-700 uppercase">Filter</h3>
          <div>
            <tag v-for="tag in tags" :key="tag" :name="tag" @added="addTag" @removed="removeTag"></tag>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import AssortmentItem from '@/views/home/AssortmentItem';
import Tag from '@/views/home/Tag';
export default {
  name: 'Home',
  components: {
    Tag,
    AssortmentItem
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
    filteredItems() {
      let items = this.items;

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
