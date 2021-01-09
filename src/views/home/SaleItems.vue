<template>
  <div v-if="items.length > 0" class="flex flex-col space-y-4">
    <h2 class="text-2xl">Sonderangebote</h2>

    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <transition-group
                name="list"
                tag="tbody"
                class="bg-gradient-to-br from-gray-700 to-gray-900 divide-y divide-gray-800"
            >
              <tr v-if="!items.length && !isLoading" :key="'no-items-found'">
                <td class="px-6 py-4 whitespace-nowrap text-gray-300" colspan="2">
                  Aktuell können wir dir keine Produkte anbieten, komm' einfach später wieder vorbei.
                </td>
              </tr>
              <tr v-if="isLoading" :key="'loading'">
                <td class="px-6 py-4 whitespace-nowrap text-gray-300" colspan="2">
                  Produkte werden geladen, einen Augenblick bitte.
                </td>
              </tr>
              <sale-item v-for="item in items" :item="item" :key="item.hash"></sale-item>
            </transition-group>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SaleItem from '@/views/home/SaleItem';

export default {
  components: { SaleItem },
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
