<template>
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
              <tr v-if="!items.length && !isLoading" :key="'no-items-found'">
                <td class="px-6 py-4 whitespace-nowrap text-gray-500" colspan="2">
                  Aktuell können wir dir keine Produkte anbieten, komm' einfach später wieder vorbei.
                </td>
              </tr>
              <tr v-if="isLoading" :key="'loading'">
                <td class="px-6 py-4 whitespace-nowrap text-gray-500" colspan="2">
                  Produkte werden geladen, einen Augenblick bitte.
                </td>
              </tr>
              <assortment-item v-for="item in items" :item="item" :key="item.hash"></assortment-item>
            </transition-group>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AssortmentItem from '@/views/home/AssortmentItem';

export default {
  components: { AssortmentItem },
  props: {
    items: {
      type: Array,
      required: true
    },

    isLoading: {
      type: Boolean,
      required: false,
      default: false,
    }
  }
}
</script>
