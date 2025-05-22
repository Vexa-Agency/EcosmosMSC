<template>
  <div class="min-h-screen w-full bg-custom-pink relative px-4 py-6 sm:py-8">

    <!-- Bouton Ecosmos en haut à gauche -->
    <NuxtLink to="/" class="absolute top-4 left-4 sm:top-6 sm:left-6">
      <button class="text-3xl sm:text-4xl md:text-5xl text-black font-dashiell text-ecosmos-green animate__animated animate__backInLeft cursor-pointer">
        Ecosmos
      </button>
    </NuxtLink>

    <div class="h-screen w-screen bg-custom-pink flex flex-col items-center justify-center px-4 text-center">
      <h1 class="section-desc max-w-xl text-4xl text-gray-700 animate__animated animate__backInUp pb-4">
        À venir...
      </h1>
     </div> 
  </div>

      <!-- FOOTER -->
    <footer class="bg-[#25665a] text-white py-6 px-4">
      <div class="flex flex-col items-center space-y-4 sm:space-y-6">

        <div class="text-sm text-gray-300 text-center">
          {{ currentYear }} – <span class="font-semibold text-white">© Ecosmos</span>
        </div>
      </div>
    </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>