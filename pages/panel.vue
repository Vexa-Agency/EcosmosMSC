<template>
    <div class="min-h-screen bg-white text-[#25665a] font-ttfirst p-6">
      <div class="flex justify-between items-start mb-6">
        <div class="text-sm text-gray-400">Desktop – Help – Light</div>
        <div class="flex items-center space-x-2">
          <button class="w-10 h-10 rounded-full bg-[#25665a] text-white flex items-center justify-center">
            <span class="material-icons">light_mode</span>
          </button>
          <button class="w-10 h-10 rounded-full bg-gray-200 text-[#25665a] flex items-center justify-center">
            <span class="material-icons">dark_mode</span>
          </button>
        </div>
      </div>
  
      <div class="flex justify-center mb-4">
        <img src="/assets/LogoMSC.svg" alt="Logo" class="h-12" />
      </div>
  
      <div class="grid grid-cols-4 gap-6">
        <!-- Humidité de l'air -->
        <div class="bg-[#25665a] text-white rounded-xl p-6 flex flex-col items-center">
          <div class="text-sm flex items-center">
            <span class="material-icons mr-2">thermostat</span> Humidité de l'air
          </div>
          <div class="text-4xl font-bold mt-2">37<span class="text-lg">%</span></div>
        </div>
  
        <!-- Humidité du sol -->
        <div class="bg-[#25665a] text-white rounded-xl p-6 flex flex-col items-center">
          <div class="text-sm flex items-center">
            <span class="material-icons mr-2">thermostat</span> Humidité du sol
          </div>
          <div class="text-4xl font-bold mt-2">43<span class="text-lg">%</span></div>
        </div>
  
        <!-- État système -->
        <div class="bg-[#25665a] text-white rounded-xl p-6 col-span-2">
          <div class="flex justify-between items-center mb-2">
            <div class="flex items-center space-x-2">
              <span class="w-3 h-3 bg-green-500 rounded-full"></span>
              <span class="font-bold">En ligne</span>
            </div>
            <div class="text-xs text-gray-200">Dernière mise à jour: 2025-02-26 à 18:04</div>
          </div>
          <div class="text-xs h-40 overflow-y-auto">
            <p>00:36 - Arrosage des plantes en cours... taux d'humidité bas.</p>
            <p>00:37 - Arrosage des plantes terminé.</p>
            <p>04:42 - Arrosage des plantes en cours... taux d'humidité bas.</p>
            <p>00:37 - Arrosage des plantes terminé.</p>
            <p>06:00 - Ouverture des lumières.</p>
            <p>11:03 - Arrosage des plantes en cours... taux d'humidité bas.</p>
            <p>11:03 - Arrosage des plantes terminé.</p>
            <p>17:53 - Arrosage des plantes en cours... taux d'humidité bas.</p>
            <p>17:54 - Arrosage des plantes terminé.</p>
            <p>18:00 - Arrosage des plantes en cours... taux d'humidité bas.</p>
            <p>18:00 - Fermeture des lumières.</p>
            <p>18:01 - Arrosage des plantes terminé.</p>
          </div>
        </div>
  
        <!-- Heure -->
        <div class="flex flex-col items-center bg-white rounded-xl p-6">
          <div class="flex items-center text-[#25665a]">
            <span class="material-icons mr-2">schedule</span>
            <span class="text-3xl font-bold">14h37</span>
          </div>
        </div>
  
        <!-- Température -->
        <div class="bg-[#25665a] text-white rounded-xl p-6 flex flex-col items-center">
          <div class="text-sm flex items-center">
            <span class="material-icons mr-2">thermostat</span> Température
          </div>
          <div class="text-4xl font-bold mt-2">27<span class="text-lg align-top"> °C</span></div>
        </div>
      </div>
  
      <div class="text-right text-sm text-gray-400 mt-4">MSC-ABCD-1234 &nbsp; V1.0</div>
    </div>
  </template>
  
  <script setup>
  // Aucune logique dynamique pour l'instant
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=YourFontNameHere&display=swap');
  
  .font-ttfirst {
    font-family: 'YourFontNameHere', sans-serif;
  }
  </style>
  