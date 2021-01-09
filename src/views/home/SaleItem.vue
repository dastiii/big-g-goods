<template>
  <tr class="hover:bg-gray-800">
    <td class="px-4 py-2 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10">
          <img class="h-10 w-10 rounded-full" :src="item.icon" alt="">
        </div>
        <div class="ml-4">
          <div class="font-medium text-gray-100" v-text="item.name"></div>
          <div class="text-sm text-gray-300" v-text="`${item.amount} Stück verfügbar`"></div>
        </div>
      </div>
    </td>
    <td class="px-4 py-2 whitespace-nowrap text-right font-medium">
      <div class="flex items-center w-full justify-end space-x-4">
        <div v-if="item.price" class="relative">
          <div class="text-gray-100 font-serif text-lg" v-text="price"></div>
          <div class="absolute h-1 w-full bg-red-500 py-1 top-3 transform -rotate-12 opacity-50"></div>
        </div>
        <span class="text-white font-serif font-medium text-lg" v-text="salePrice"></span>
      </div>
      <div class="text-sm text-gray-300 font-serif" v-text="`${item.weight} kg/Stk.`"></div>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    }
  },

  computed: {
    price() {
      return this.item.price
        ? this.$formatCurrency.format(this.item.price)
        : "auf Anfrage"
    },

    salePrice() {
      return this.item.salePrice
        ? this.$formatCurrency.format(this.item.salePrice)
        : null;
    }
  }
}
</script>
