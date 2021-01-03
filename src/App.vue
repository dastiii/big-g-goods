<template>
  <div id="app">
    <header class="py-6 bg-white border-b-8 border-brand shadow">
      <div class="max-w-7xl px-2 mx-auto flex items-center justify-between">
        <img src="@/assets/logo.png" class="h-20" alt="Big G Goods">
        <div class="text-right flex items-center space-x-4">
          <div>
            <p class="font-serif text-brand font-medium text-xl">1822-94444266</p>
            <p class="text-gray-500">Interesse an unseren Produkten?</p>
          </div>
          <div>
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          </div>
        </div>
      </div>
    </header>

    <main class="space-y-8">
      <hero></hero>

      <div class="max-w-7xl px-2 mx-auto flex">
        <div class="w-3/4">
          <router-view/>
        </div>
        <div class="w-1/4">
          <div class="px-4">
            <img src="https://pic.statev.de/i/KQt66.jpg" class="w-64 mx-auto" alt="Weihnachtsverlosung">
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style></style>
<script>
import Hero from '@/views/home/Hero';
export default {
  components: { Hero }
};
</script>
