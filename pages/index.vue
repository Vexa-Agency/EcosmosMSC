<template>
  <div class="h-screen w-screen bg-custom-pink flex flex-col items-center justify-center px-4 text-center">
    <!-- Titre principal -->
    <h1 class="text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-black font-dashiell text-ecosmos-green animate__animated animate__backInLeft pb-2 sm:pb-4 md:pb-6">
      Ecosmos
    </h1>

    <!-- Sous-titre -->
    <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black font-ttfirst text-ecosmos-green animate__animated animate__delay-1s animate__fadeInUp -mt-4 sm:-mt-6 md:-mt-8">
      Mini-Serre Connectée
    </h2>

    <!-- Bouton d'accès -->
    <NuxtLink to="/login">
      <button class="px-5 py-2 bg-[#25665a]-50 text-[#25665a] text-1xl sm:text-3xl font-ttfirst rounded-3xl border-3 border-[#25665a] animate__animated animate__delay-2s animate__fadeIn mt-8 hover:scale-105 hover:transition-transform hover:duration-300 cursor-pointer">
        Accès Panel
      </button>
    </NuxtLink>

    <!-- Flèche vers le bas -->
    <button
      @click="scrollToInfos"
      class="group text-3xl sm:text-4xl md:text-5xl text-black font-dashiell text-ecosmos-green animate__animated animate__delay-2s animate__fadeIn translate-y-12 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 mr-1 transform transition-transform duration-300 group-hover:rotate-180"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  </div>

  <!-- SECTION INFOS EN BAS -->

  <div ref="infos" class="min-h-screen w-screen bg-white flex flex-col items-center justify-center text-center px-4">
    <h2 ref="aboutTitle" class="text-3xl sm:text-4xl font-bold text-[#25665a] mb-6">
      À propos d’Ecosmos
    </h2>
    <p class="max-w-xl text-lg text-gray-700">
      Ecosmos est une mini-serre connectée qui permet de surveiller et automatiser la culture de vos plantes. Grâce à des capteurs intégrés, elle ajuste automatiquement l’humidité, la lumière et la température.
    </p>
  </div>

</template>













<script setup>
import { ref, onMounted } from 'vue'

const infos = ref(null)
const aboutTitle = ref(null)

const scrollToInfos = () => {
  infos.value?.scrollIntoView({ behavior: 'smooth' })
}

// Détecter la section "À propos" au moment où elle est visible
const observeSection = () => {
  const options = {
    root: null, // Utilise la fenêtre du navigateur comme racine
    rootMargin: '0px',
    threshold: 0.5, // La section doit être à 50% visible pour déclencher l'animation
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Ajoute des animations quand la section devient visible
        aboutTitle.value.classList.add('animate__animated', 'animate__backInLeft')
        aboutTitle.value.nextElementSibling.classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s')
      }
    })
  }, options)

  if (aboutTitle.value) {
    observer.observe(aboutTitle.value)
  }
}

onMounted(() => {
  observeSection()
})
</script>

