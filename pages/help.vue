<template>
<div class="h-screen w-screen bg-custom-pink flex flex-col items-center justify-center px-4 text-center">
  <div class="max-w-md mx-auto px-4">
    <NuxtLink>
    <a href="/login" class="flex items-center text-green-800 font-medium mb-4 animate__animated animate__fadeIn">

      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      Revenir
    </a>
    </NuxtLink>

    <div class="bg-[#25665a] text-white rounded-2xl p-6 space-y-5 text-sm animate__animated animate__fadeIn">
      <div>
        <p class="font-bold text-white">Je ne trouve pas le numéro de série.</p>
        <p>Le code se situe à l’arrière de votre MSC vers le boîtier d’alimentation.</p>
      </div>

      <div>
        <p class="font-bold text-white">Je n’arrive pas à me connecter.</p>
        <p>Vérifier le numéro de série du MSC à partir de l’écran LCD.</p>
      </div>

      <div>
        <p class="font-bold text-white">Je n’ai pas accès aux informations de mon MSC.</p>
        <p>Veuillez débrancher et rebrancher votre MSC à une prise 120V / 15A.</p>
      </div>

      <div>
        <p class="font-bold text-white">Autres.</p>
        <p>
          Contacter-nous au 
          <a href="tel:+18195242580" class="text-green-300 font-medium">+1 (819) 524-2580</a> 
          du Lundi au Vendredi de 9:00am à 16:00pm (UTC−5).<br />
          Contacter par mail: 
          <a href="mailto:info@msc-panel.com" class="text-green-300">info@msc-panel.com</a>
        </p>
      </div>
    </div>
  </div>
</div>
</template>
