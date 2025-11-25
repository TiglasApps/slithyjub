<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="{ 'glass shadow-lg': isScrolled, 'bg-transparent': !isScrolled }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center cursor-pointer" @click="navigateTo('/')">
          <span class="text-2xl font-bold tracking-tight text-white">
            Slithy<span class="text-teal-400">Jub</span>
          </span>
        </div>

        <!-- Desktop Navigation -->
        <nav v-if="!token" class="hidden md:flex space-x-8">
          <a href="#features" class="text-gray-300 hover:text-white transition-colors text-sm font-medium">{{ $t('nav.features') }}</a>
          <a href="#solutions" class="text-gray-300 hover:text-white transition-colors text-sm font-medium">{{ $t('nav.solutions') }}</a>
          <a href="#pricing" class="text-gray-300 hover:text-white transition-colors text-sm font-medium">{{ $t('nav.pricing') }}</a>
          <a href="#about" class="text-gray-300 hover:text-white transition-colors text-sm font-medium">{{ $t('nav.about') }}</a>
        </nav>

        <!-- CTA Buttons -->
        <div class="hidden md:flex items-center space-x-4">
          <div class="flex items-center space-x-2 text-sm font-medium text-gray-300 mr-2">
            <button @click="setLocale('en')" :class="{ 'text-white font-bold': locale === 'en', 'text-gray-500 hover:text-gray-300': locale !== 'en' }">EN</button>
            <span class="text-gray-600">|</span>
            <button @click="setLocale('it')" :class="{ 'text-white font-bold': locale === 'it', 'text-gray-500 hover:text-gray-300': locale !== 'it' }">IT</button>
          </div>

          <button v-if="!token" @click="navigateTo('/login')" class="text-gray-300 hover:text-white font-medium text-sm transition-colors">{{ $t('nav.login') }}</button>
          <button v-else @click="logout" class="text-gray-300 hover:text-white font-medium text-sm transition-colors">Logout</button>
          <button v-if="!token" class="btn-primary text-sm">{{ $t('nav.getStarted') }}</button>
          <button v-else @click="navigateTo('/dashboard')" class="btn-primary text-sm">Dashboard</button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="text-gray-300 hover:text-white focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isMobileMenuOpen" class="md:hidden glass border-t border-gray-800">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <template v-if="!token">
          <a href="#features" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">Features</a>
          <a href="#solutions" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">Solutions</a>
          <a href="#pricing" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">Pricing</a>
          <a href="#about" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">About Us</a>
        </template>
        <div :class="{ 'mt-4 pt-4 border-t border-gray-800': !token }" class="flex flex-col space-y-3 px-3">
          <button v-if="!token" @click="navigateTo('/login')" class="w-full text-left text-gray-300 hover:text-white font-medium">Log in</button>
          <button v-else @click="logout" class="w-full text-left text-gray-300 hover:text-white font-medium">Logout</button>
          <button v-if="!token" class="w-full btn-primary text-center">Get Started</button>
          <button v-else @click="navigateTo('/dashboard')" class="w-full btn-primary text-center">Dashboard</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'


const { locale, setLocale } = useI18n()
const { token, logout } = useAuth()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
