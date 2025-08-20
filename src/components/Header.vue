<template>
  <header class="bg-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
            <svg class="w-8 h-8 text-white" viewBox="0 0 32 32" fill="currentColor">
              <!-- Shield shape with eagle -->
              <path d="M16 2L28 8V16C28 24 22 28 16 30C10 28 4 24 4 16V8L16 2Z" fill="currentColor"/>
              <path d="M16 6L24 10V16C24 21 20 24 16 26C12 24 8 21 8 16V10L16 6Z" fill="white" fill-opacity="0.9"/>
              <!-- Eagle head silhouette -->
              <path d="M12 12C12 12 14 14 16 14C18 14 20 12 20 12L19 16C19 16 17 18 16 18C15 18 13 16 13 16L12 12Z" fill="currentColor"/>
            </svg>
          </div>
          <div>
            <h1 class="text-2xl font-bold text-dark-600">Security</h1>
            <h2 class="text-xl font-bold text-primary-500">Film</h2>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <router-link 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href"
            class="text-dark-500 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
            active-class="text-primary-500 border-b-2 border-primary-500"
          >
            {{ item.name }}
          </router-link>
        </nav>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <button class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl">
            Solicitar Orçamento
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-dark-500 hover:text-primary-500 p-2"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          <router-link 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href"
            @click="mobileMenuOpen = false"
            class="text-dark-500 hover:text-primary-500 block px-3 py-2 text-base font-medium"
            active-class="text-primary-500 bg-primary-50"
          >
            {{ item.name }}
          </router-link>
          <button class="w-full text-left bg-primary-500 hover:bg-primary-600 text-white px-3 py-2 rounded-lg font-medium transition-colors duration-200 mt-4">
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Serviços', href: '/services' },
  { name: 'Galeria', href: '/gallery' },
  { name: 'Sobre', href: '/about' },
  { name: 'Contato', href: '/contact' },
]
</script>
