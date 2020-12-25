<template>
  <div id="app">
    <header class="py-6 border-b-8 border-red-500">
      <div class="max-w-7xl px-2 mx-auto flex items-center justify-between">
        <img src="@/assets/logo.png" class="h-20" alt="Big G Goods">
        <nav>
          <ul class="flex space-x-4">
            <li>
              <a href="#"
                 class="uppercase border-b-4 border-transparent px-1 py-2
                 hover:border-gray-500"
              >Angebot</a>
            </li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <div class="py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            <h2 class="text-base font-semibold tracking-wide uppercase text-red-500">Big G Goods - General Store Merchant</h2>
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Dein Gemischtwaren- und Sonderpostenhändler
            </p>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Wir haben, was andere wegwerfen. Stöber' einfach in unserem stets aktuellen Katalog an Produkten, die wir dir anbieten können.
            </p>
          </div>
        </div>
      </div>

      <div class="max-w-7xl px-2 mx-auto flex">
        <div class="w-2/3">
          <router-view/>
        </div>
        <div class="w-1/3">
          <div class="px-4">
            <img src="https://pic.statev.de/i/GwbBJ.png" class="w-64 mx-auto" alt="Weihnachtsverlosung">
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style></style>
