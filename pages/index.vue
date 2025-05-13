<!-- pages/index.vue -->
<template>
    <div class="h-screen w-screen bg-custom-pink flex flex-col items-center justify-center px-4 text-center">
      <h1 class="text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-black font-dashiell text-ecosmos-green animate__animated animate__backInLeft pb-2 sm:pb-4 md:pb-6">
        Ecosmos
      </h1>
      <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black font-ttfirst text-ecosmos-green animate__animated animate__delay-1s animate__fadeInUp -mt-4 sm:-mt-6 md:-mt-8">
        Mini-Serre Connectée
      </h2>

      <!-- NuxtLink entourant le bouton pour la navigation -->
      <NuxtLink to="/login">
        <button class="px-5 py-2 bg-[#25665a]-50 text-[#25665a] text-1xl sm:text-3xl font-ttfirst rounded-3xl border-3 border-[#25665a] animate__animated animate__delay-2s animate__fadeIn mt-8 hover:scale-105 hover:transition-transform hover:duration-300 cursor-pointer">
          Accès Panel
        </button>
      </NuxtLink>
    </div>
  </template>
  
  