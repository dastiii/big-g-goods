<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="flex flex-col">
    <h2 class="text-2xl my-4">Unser Sortiment</h2>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="@/assets/goulash.png" alt="">
                  </div>
                  <div class="ml-4">
                    <div class=" font-medium text-gray-900">
                      Gulasch
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right font-medium">
                <a href="#" class="text-red-600">$3.50</a>
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="@/assets/goulash.png" alt="">
                  </div>
                  <div class="ml-4">
                    <div class=" font-medium text-gray-900">
                      Gulasch
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right font-medium">
                <a href="#" class="text-red-600">$3.50</a>
              </td>
            </tr>
            <!-- More rows... -->
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="@/assets/goulash.png" alt="">
                  </div>
                  <div class="ml-4">
                    <div class=" font-medium text-gray-900">
                      Gulasch
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right font-medium">
                <a href="#" class="text-red-600">$3.50</a>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="@/assets/goulash.png" alt="">
                  </div>
                  <div class="ml-4">
                    <div class=" font-medium text-gray-900">
                      Gulasch
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right font-medium">
                <a href="#" class="text-red-600">$3.50</a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
};
</script>
