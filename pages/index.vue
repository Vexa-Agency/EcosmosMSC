<template>
  <div class="bg-[url(/assets/bg-image.png)] bg-fixed">
    <!-- HERO -->
    <div class="h-screen w-screen bg-custom-pink flex flex-col items-center justify-center px-4 text-center">
      <NuxtLink to="/" class="absolute top-4 left-4 sm:top-6 sm:left-6 animate__animated animate__backInDown">
        <img src="/assets/LogoMSC.svg" alt="Logo" class="h-12" />
    </NuxtLink>
      <h1 class="text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-black font-dashiell text-ecosmos-green animate__animated animate__backInLeft pb-4">
        Ecosmos
      </h1>

      <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black font-ttfirst text-ecosmos-green animate__animated animate__delay-1s animate__fadeInUp -mt-4">
        Mini-Serre Connectée
      </h2>

      <NuxtLink to="/login">
        <button class="px-5 py-2 mt-8 text-1xl sm:text-3xl font-ttfirst rounded-3xl border-3 border-[#25665a] text-[#25665a] bg-[#25665a]-50 animate__animated animate__delay-2s animate__fadeIn hover:scale-105 transition duration-300">
          Accès Panel
        </button>
      </NuxtLink>

      <button @click="scrollToInfos" class="group mt-12 text-4xl text-black font-dashiell text-ecosmos-green animate__animated animate__delay-2s animate__fadeIn cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>

    <!-- SECTIONS -->
    <div ref="infos" class="section min-h-[60vh] w-screen flex flex-col items-center justify-center text-center px-4">
      <h2 class="section-title text-3xl sm:text-4xl font-bold text-[#25665a] mb-6">À propos d’Ecosmos</h2>
      <p class="section-desc max-w-xl text-lg text-gray-700">
        Ecosmos est une mini-serre connectée...
      </p>
    </div>

    <div ref="equipe" class="section min-h-[60vh] w-screen flex flex-col items-center justify-center text-center px-4">
      <h2 class="section-title text-3xl sm:text-4xl font-bold text-[#25665a] mb-6">Notre Équipe de Feux!</h2>
      <p class="section-desc max-w-xl text-lg text-gray-700">
        Ecosmos est une mini-serre connectée...
      </p>
    </div>

    <div ref="services" class="section min-h-[80vh] w-screen flex flex-col items-center justify-center text-center px-4">
      <h2 class="section-title text-3xl sm:text-4xl font-bold text-[#25665a] mb-6">Nos Beaux Services</h2>
      <p class="section-desc max-w-xl text-lg text-gray-700">
        Ecosmos est une mini-serre connectée...
      </p>
    </div>

    <div ref="contact" class="section min-h-[80vh] w-screen flex flex-col items-center justify-center text-center px-4">
      <h2 class="section-title text-3xl sm:text-4xl font-bold text-[#25665a] mb-6">Nous Contacter</h2>
      <p class="section-desc max-w-xl text-lg text-gray-700">
        Ecosmos est une mini-serre connectée...
      </p>
    </div>

    <!-- FOOTER -->
    <footer class="bg-[#25665a] text-white py-6 px-4">
      <div class="flex flex-col items-center space-y-4 sm:space-y-6">
        <!-- Navigation links -->
        <nav class="flex flex-wrap justify-center space-x-4 text-sm font-bold tracking-wide uppercase text-center">
          <button @click="scrollToTop" class="hover:text-gray-300">Accueil</button>
          <button @click="scrollToInfos" class="hover:text-gray-300">À propos</button>
          <button @click="scrollToEquipe" class="hover:text-gray-300">Équipe</button>
          <button @click="scrollToServices" class="hover:text-gray-300">Services</button>
          <NuxtLink to="/login" class="hover:text-gray-300">Panel</NuxtLink>
          <button @click="scrollToContact" class="hover:text-gray-300">Contact</button>
        </nav>

        <!-- Copyright -->
        <div class="text-sm text-gray-300 text-center">
          {{ currentYear }} – <span class="font-semibold text-white">© Ecosmos</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentYear = new Date().getFullYear()

const infos = ref(null)
const equipe = ref(null)
const services = ref(null)
const contact = ref(null)

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
const scrollToInfos = () => infos.value?.scrollIntoView({ behavior: 'smooth' })
const scrollToEquipe = () => equipe.value?.scrollIntoView({ behavior: 'smooth' })
const scrollToServices = () => services.value?.scrollIntoView({ behavior: 'smooth' })
const scrollToContact = () => contact.value?.scrollIntoView({ behavior: 'smooth' })

const observeSections = () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const title = entry.target.querySelector('.section-title')
        const desc = entry.target.querySelector('.section-desc')
        title?.classList.add('animate__animated', 'animate__backInLeft')
        desc?.classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s')
        obs.unobserve(entry.target)
      }
    })
  }, { threshold: 0.3 })

  document.querySelectorAll('.section').forEach((section) => observer.observe(section))
}

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'auto' }) // 👈 Fait revenir en haut au refresh
  observeSections()
})
</script>

