<template>
  <div class="min-h-screen bg-white text-[#25665a] font-ttfirst p-6 space-y-6">
    <!-- Top Bar -->
    <div class="flex justify-between items-start text-xs text-gray-400">
      <span>Desktop – Help – Light</span>
      <div class="flex gap-2">
        <div class="bg-[#25665a] text-white rounded-full p-2">
          <svg class="w-5 h-5" fill="currentColor"><!-- soleil --></svg>
        </div>
        <div class="bg-gray-200 text-[#25665a] rounded-full p-2">
          <svg class="w-5 h-5" fill="currentColor"><!-- lune --></svg>
        </div>
      </div>
    </div>

    <!-- Logo -->
    <div class="flex justify-center">
      <img src="/assets/LogoMSC.svg" alt="Logo MSC" class="h-12" />
    </div>

    <!-- Dashboard Grid -->
    <div class="grid grid-cols-5 gap-6">
      <!-- Humidité de l'air -->
      <div class="bg-[#25665a] text-white rounded-2xl p-4 flex flex-col items-center justify-center">
        <div class="flex items-center space-x-2 text-sm">
          <span class="material-icons">humidity_mid</span>
          <span>Humidité de l’air</span>
        </div>
        <div class="text-4xl font-bold mt-2">37<span class="text-xl">%</span></div>
      </div>

      <!-- Humidité du sol -->
      <div class="bg-[#25665a] text-white rounded-2xl p-4 flex flex-col items-center justify-center">
        <div class="flex items-center space-x-2 text-sm">
          <span class="material-icons">humidity_mid</span>
          <span>Humidité du sol</span>
        </div>
        <div class="text-4xl font-bold mt-2">43<span class="text-xl">%</span></div>
      </div>

      <!-- État en ligne + Logs -->
      <div class="bg-[#25665a] text-white rounded-2xl p-4 col-span-2 flex flex-col">
        <div class="flex justify-between items-center mb-2">
          <div class="flex items-center space-x-2">
            <span class="w-3 h-3 bg-green-500 rounded-full"></span>
            <span class="font-semibold">En ligne</span>
          </div>
          <div class="text-xs text-gray-300">Dernière mise à jour : 2025-02-26 à 18:04</div>
        </div>
        <div class="text-xs space-y-1 overflow-y-auto h-40 leading-snug pr-2">
          <p>00:36 - Arrosage des plantes en cours... taux d'humidité bas.</p>
          <p>00:37 - Arrosage des plantes terminé.</p>
          <p>04:42 - Arrosage des plantes en cours... taux d'humidité bas.</p>
          <p>06:00 - Ouverture des lumières.</p>
          <p>11:03 - Arrosage des plantes en cours... taux d'humidité bas.</p>
          <p>17:54 - Arrosage des plantes terminé.</p>
          <p>18:00 - Fermeture des lumières.</p>
          <p>18:01 - Arrosage des plantes terminé.</p>
        </div>
      </div>

      <!-- Heure -->
      <div class="flex flex-col justify-center items-center rounded-2xl p-4 border-2 border-[#25665a]">
        <div class="flex items-center space-x-2">
          <span class="material-icons text-2xl">schedule</span>
          <span class="text-3xl font-bold">14h37</span>
        </div>
      </div>

      <!-- Température -->
      <div class="bg-[#25665a] text-white rounded-2xl p-4 flex flex-col items-center justify-center">
        <div class="flex items-center space-x-2 text-sm">
          <span class="material-icons">thermostat</span>
          <span>Température</span>
        </div>
        <div class="text-5xl font-bold mt-2">27<span class="text-xl align-top">°C</span></div>
      </div>
    </div>

    <!-- Footer -->
    <div class="text-right text-xs text-gray-400 pt-4">
      MSC-ABCD-1234 &nbsp; V1.0
    </div>
  </div>
</template>

