<template>
  <div id="app" class="min-h-screen">
    <header class="py-6 bg-white border-b-8 border-brand shadow">
      <div class="max-w-7xl px-2 mx-auto flex items-center justify-between">
        <img src="@/assets/logo.png" class="h-20" alt="Big G Goods">
        <div class="text-right flex items-center space-x-4">
          <div>
            <p class="font-serif text-brand font-medium text-xl">1822-94444266</p>
            <p class="text-gray-500">Interesse an unseren Produkten?</p>
          </div>
          <div>
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
          </div>
        </div>
      </div>
    </header>

    <main class="space-y-8">
      <hero></hero>

      <div>
        <router-view></router-view>
      </div>
    </main>

    <footer class="h-12"></footer>
  </div>
</template>

<style></style>
<script>
import Hero from '@/views/home/Hero';
export default {
  components: { Hero }
};
</script>
