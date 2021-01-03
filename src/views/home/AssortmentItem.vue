<template>
  <tr class="hover:bg-gray-100">
    <td class="px-4 py-2 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10">
          <img class="h-10 w-10 rounded-full" :src="item.icon" alt="">
        </div>
        <div class="ml-4">
          <div class="font-medium text-gray-900" v-text="item.name"></div>
          <div class="text-sm text-gray-500" v-text="`${item.amount} Stück verfügbar`"></div>
        </div>
      </div>
    </td>
    <td class="px-4 py-2 whitespace-nowrap text-right font-medium">
      <div class="text-gray-900 font-serif" v-text="price"></div>
      <div class="text-sm text-gray-500 font-serif" v-text="`${item.weight} kg`"></div>
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
  }
}
</script>
