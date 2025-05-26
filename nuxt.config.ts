import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  plugins: [{ src: '@/plugins/aos', mode: 'client' }],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ["nuxt-aos"],
});