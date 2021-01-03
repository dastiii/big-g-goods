<template>
  <div class="space-y-8">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="flex flex-col space-y-4">
      <h2 class="text-2xl">Unser Sortiment</h2>

      <div class="space-x-2">
        <span class="text-xs text-gray-700 uppercase pl-1">Filter</span>
        <tag v-for="tag in tags" :key="tag" :name="tag" @added="addTag" @removed="removeTag"></tag>
      </div>

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
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                  Aktuell können wir dir keine Produkte anbieten, komm' einfach später wieder vorbei.
                </td>
              </tr>
              <tr v-if="isLoading" key="items-loading">
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">
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
    }
  },

  computed: {
    filteredItems() {
      if (this.activeTags.length <= 0) return this.items;

      return this.items.filter(item => {
        return this.activeTags.every(tag => item.tags.includes(tag));
      })
    },
  },

  created() {
    this.fetchData()
      .then(res => this.updateData(res))
      .catch(err => this.handleError(err));
  },

  methods: {
    async fetchData() {
      const url = process.env.NODE_ENV === "production"
        ? "https://my-json-server.typicode.com/dastiii/big-goods-api/db"
        : "https://api.big-goods.test/v1/stock";

      return await this.$http.get(url);
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
