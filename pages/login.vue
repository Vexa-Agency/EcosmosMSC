<template>
  <div class="min-h-screen w-full bg-custom-pink relative px-4 py-6 sm:py-8">

    <!-- Bouton Ecosmos en haut à gauche -->
    <NuxtLink to="/" class="absolute top-4 left-4 sm:top-6 sm:left-6">
      <button class="text-3xl sm:text-4xl md:text-5xl text-black font-dashiell text-ecosmos-green animate__animated animate__backInLeft cursor-pointer">
        Ecosmos
      </button>
    </NuxtLink>

    <!-- Contenu centré -->
    <div class="flex flex-col items-center justify-center h-screen space-y-5">
      <div class="animate__animated animate__delay-1s animate__fadeIn">
      <!-- Logo SVG centré -->
      <img
        src="/assets/LogoMSC.svg"
        alt="Logo"
        class="w-24 sm:w-32 md:w-40"
      />
        </div>
      <!-- Bloc de liaison -->
      <div class="bg-[#25665a] rounded-2xl p-6 sm:p-8 max-w-md w-full text-center text-white font-ttfirst animate__animated animate__delay-1s animate__fadeInUp">
        <h2 class="text-xl sm:text-2xl font-bold mb-4">Lier votre MSC</h2>

        <label class="block text-sm mb-2">
             Numéro de série.
              <NuxtLink to="/help" class="text-[#07f4bd] ml-1 text-sm underline cursor-pointer">
                Besoin d'aide ?
              </NuxtLink>
        </label>


        <input
          type="text"
          placeholder="Ex. MSC-ABCD-1234"
          class="w-full px-4 py-2 rounded bg-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none mb-4"
        />
        <NuxtLink to="/panel">
        <button class="bg-[#07f4bd] hover:bg-green-300 text-black font-semibold py-2 px-6 rounded w-full sm:w-auto">
          Lier
        </button>
      </NuxtLink>
      </div>
    </div>
  </div>
</template>