<template>
  <div class="bg-[url(/assets/bg-image.png)] bg-fixed">

    <!-- HERO -->
    <div class="h-screen w-screen bg-custom-pink flex flex-col items-center justify-center px-4 text-center">
      <NuxtLink to="/" class="absolute top-4 left-4 sm:top-6 sm:left-6">
        <img src="/assets/LogoMSC.svg" alt="Logo" class="h-12" />
      </NuxtLink>

      <h1 data-aos="fade-up" class="text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-black font-dashiell text-ecosmos-green pb-4">
        Ecosmos
      </h1>

      <h2 data-aos-delay="500" data-aos="fade-up" class="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black font-ttfirst text-ecosmos-green -mt-4">
        Mini-Serre Connectée
      </h2>

      <NuxtLink to="/login">
        <button data-aos-delay="700" data-aos="fade-up" class="px-5 py-2 mt-8 text-1xl sm:text-3xl font-ttfirst rounded-3xl border-3 border-[#25665a] text-[#25665a] bg-[#25665a]-50 hover:scale-105 transition duration-300">
          Accès Panel
        </button>
      </NuxtLink>

      <button @click="scrollToInfos" class="group mt-12 text-4xl text-black font-dashiell text-ecosmos-green cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>

    <!-- SECTIONS -->

    <!-- À propos -->
    <div ref="infos" class="section min-h-[60vh] w-screen flex flex-col items-center justify-center text-center px-4 font-ttfirst">
      <h2 class="section-title text-3xl sm:text-4xl font-bold text-[#25665a] mb-6">À propos d’Ecosmos</h2>
      <p class="section-desc max-w-xl text-lg text-gray-700">
        Ecosmos est une mini-serre connectée pour l’intérieur, fabriquée au Québec à partir de matériaux recyclés. Nous nous efforçons d’offrir la meilleure qualité possible. Créé en 2024, Ecosmos a vu le jour grâce à un projet scolaire de fin d'année.
      </p>
    </div>

    <!-- Équipe -->
    <div ref="equipe" class="section min-h-[60vh] w-screen flex flex-col items-center justify-center text-center px-4 bg-custom-pink font-ttfirst">
      <h2 class="section-title text-3xl sm:text-4xl font-bold text-[#25665a] mb-6">Notre Équipe de Feux!</h2>
      <p class="section-desc max-w-xl text-lg text-gray-700">
        Nous sommes deux étudiants en informatique au Cégep de Trois-Rivières, unis par une passion commune pour l’innovation et l’entrepreneuriat. Portés par cette ambition, nous mettons tout en œuvre pour faire d’Ecosmos bien plus qu’un simple projet : une réussite inspirante.
      </p>
    </div>

    <!-- Services -->
    <div ref="services" class="section min-h-[80vh] w-screen flex flex-col items-center justify-center text-center px-4 font-ttfirst">
      <h2 class="section-title text-3xl sm:text-4xl font-bold text-[#25665a] mb-6">Nos Beaux Services</h2>
      <p class="section-desc max-w-xl text-lg text-gray-700">
        Ecosmos est une mini-serre connectée, intelligente et écoresponsable, conçue pour recréer les conditions idéales de croissance des plantes. Dotée de capteurs environnementaux, d’un système d’irrigation automatisé, d’un éclairage LED intelligent et d’une interface web de gestion à distance, elle allie technologie, autonomie et respect de l’environnement grâce à une fabrication en plastique recyclé via impression 3D.
         
        <NuxtLink to="/shop" class="flex justify-center mb-4">
          <button class="cursor-pointer px-5 py-2 mt-8 text-1xl sm:text-3xl font-ttfirst rounded-3xl border-3 border-[#25665a] text-[#25665a] bg-[#25665a]-50 animate__animated animate__delay-2s animate__fadeIn hover:scale-105 transition duration-300">
            Magasiner
          </button>
        </NuxtLink>
         
      </p>
    </div>

    <!-- Contact -->
    <div ref="contact" class="section min-h-[80vh] w-screen flex flex-col items-center justify-center text-center px-4 bg-custom-pink font-ttfirst">
      <h2 class="section-title text-3xl sm:text-4xl font-bold text-[#25665a] mb-6">Nous Contacter</h2>

      <form @submit.prevent="handleSubmit" class="w-full max-w-xl space-y-4 font-ttfirst">
        <div>
          <label class="block mb-1 text-left text-sm text-gray-700">Nom</label>
          <input v-model="form.name" type="text" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25665a]" />
        </div>

        <div>
          <label class="block mb-1 text-left text-sm text-gray-700">E-mail</label>
          <input v-model="form.email" type="email" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25665a]" />
        </div>

        <div>
          <label class="block mb-1 text-left text-sm text-gray-700">Message</label>
          <textarea v-model="form.message" rows="4" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25665a]"></textarea>
        </div>

        <button type="submit" class="bg-[#25665a] text-white px-6 py-2 rounded-lg hover:bg-[#1e5249] transition">
          Envoyer
        </button>

        <div v-if="success" class="text-green-600 font-semibold pt-2">
          ✅ Message envoyé avec succès!
        </div>
      </form>
    </div>

    <!-- FOOTER -->
    <footer class="bg-[#25665a] text-white py-6 px-4">
      <div class="flex flex-col items-center space-y-4 sm:space-y-6">

        <nav class="flex flex-wrap justify-center space-x-4 text-sm font-bold tracking-wide uppercase text-center">
          <button @click="scrollToTop" class="hover:text-gray-300">Accueil</button>
          <button @click="scrollToInfos" class="hover:text-gray-300">À propos</button>
          <button @click="scrollToEquipe" class="hover:text-gray-300">Équipe</button>
          <button @click="scrollToServices" class="hover:text-gray-300">Services</button>
          <NuxtLink to="/login" class="hover:text-gray-300">Panel</NuxtLink>
          <button @click="scrollToContact" class="hover:text-gray-300">Contact</button>
        </nav>

        <div class="text-sm text-gray-300 text-center">
          {{ currentYear }} – <span class="font-semibold text-white">© Ecosmos</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'

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

// Formulaire de contact
const form = reactive({
  name: '',
  email: '',
  message: '',
})

const success = ref(false)

const handleSubmit = () => {
  console.log('Formulaire envoyé :', form)
  success.value = true

  // Réinitialisation
  form.name = ''
  form.email = ''
  form.message = ''

  setTimeout(() => {
    success.value = false
  }, 4000)
}
</script>
