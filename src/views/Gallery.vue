<template>
  <div class="gallery">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Nossa Galeria
        </h1>
        <p class="text-xl text-primary-100 max-w-3xl mx-auto">
          Confira alguns dos nossos trabalhos realizados com excelência e qualidade
        </p>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="flex flex-wrap justify-center gap-4 mb-8">
          <button 
            v-for="filter in filters" 
            :key="filter.value"
            @click="activeFilter = filter.value"
            :class="[
              'px-6 py-3 rounded-lg font-medium transition-all duration-200',
              activeFilter === filter.value 
                ? 'bg-primary-600 text-white shadow-lg' 
                : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
            ]"
          >
            {{ filter.label }}
          </button>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="item in filteredGallery" 
            :key="item.id"
            class="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            @click="openModal(item)"
          >
            <div class="relative overflow-hidden">
              <div class="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span class="text-6xl">{{ item.emoji }}</span>
              </div>
              <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <span class="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  👁️ Ver
                </span>
              </div>
            </div>
            <div class="p-4">
              <h3 class="font-semibold text-gray-900 mb-2">{{ item.title }}</h3>
              <p class="text-sm text-gray-600 mb-2">{{ item.description }}</p>
              <div class="flex items-center justify-between">
                <span class="text-xs text-primary-600 font-medium">{{ item.category }}</span>
                <span class="text-xs text-gray-500">{{ item.date }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12">
          <button class="btn-primary">
            Carregar Mais Trabalhos
          </button>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div 
      v-if="selectedItem" 
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      @click="closeModal"
    >
      <div class="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
        <div class="p-6">
          <div class="flex justify-between items-start mb-4">
            <h2 class="text-2xl font-bold text-gray-900">{{ selectedItem.title }}</h2>
            <button 
              @click="closeModal"
              class="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
          
          <div class="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center mb-6">
            <span class="text-8xl">{{ selectedItem.emoji }}</span>
          </div>
          
          <div class="space-y-4">
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">Descrição</h3>
              <p class="text-gray-600">{{ selectedItem.description }}</p>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">Categoria</h4>
                <p class="text-primary-600">{{ selectedItem.category }}</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">Data</h4>
                <p class="text-gray-600">{{ selectedItem.date }}</p>
              </div>
            </div>
            
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Detalhes Técnicos</h4>
              <ul class="text-gray-600 space-y-1">
                <li>• Material: {{ selectedItem.material }}</li>
                <li>• Espessura: {{ selectedItem.thickness }}</li>
                <li>• Proteção UV: {{ selectedItem.uvProtection }}</li>
                <li>• Garantia: {{ selectedItem.warranty }}</li>
              </ul>
            </div>
          </div>
          
          <div class="mt-6 flex gap-4">
            <router-link to="/contato" class="btn-primary flex-1 text-center">
              Solicitar Orçamento
            </router-link>
            <button @click="closeModal" class="btn-secondary flex-1">
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface GalleryItem {
  id: number
  title: string
  description: string
  category: string
  date: string
  emoji: string
  material: string
  thickness: string
  uvProtection: string
  warranty: string
}

const activeFilter = ref('all')

const filters = [
  { label: 'Todos', value: 'all' },
  { label: 'Automotivo', value: 'automotive' },
  { label: 'Residencial', value: 'residential' },
  { label: 'Comercial', value: 'commercial' },
  { label: 'Manutenção', value: 'maintenance' }
]

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Honda Civic Sedan',
    description: 'Instalação completa de insulfilm escuro com proteção UV avançada',
    category: 'Automotivo',
    date: 'Dez 2024',
    emoji: '🚗',
    material: 'Filme de Poliéster',
    thickness: '0.15mm',
    uvProtection: '99%',
    warranty: '5 anos'
  },
  {
    id: 2,
    title: 'Residência Jardim Europa',
    description: 'Insulfilm residencial para controle de temperatura e privacidade',
    category: 'Residencial',
    date: 'Nov 2024',
    emoji: '🏠',
    material: 'Filme de Poliéster',
    thickness: '0.20mm',
    uvProtection: '99%',
    warranty: '7 anos'
  },
  {
    id: 3,
    title: 'Escritório Centro Empresarial',
    description: 'Solução comercial com branding personalizado e proteção UV',
    category: 'Comercial',
    date: 'Nov 2024',
    emoji: '🏢',
    material: 'Filme de Poliéster',
    thickness: '0.25mm',
    uvProtection: '99%',
    warranty: '10 anos'
  },
  {
    id: 4,
    title: 'Toyota Corolla',
    description: 'Substituição de insulfilm danificado com material premium',
    category: 'Manutenção',
    date: 'Out 2024',
    emoji: '🔧',
    material: 'Filme de Poliéster',
    thickness: '0.15mm',
    uvProtection: '99%',
    warranty: '5 anos'
  },
  {
    id: 5,
    title: 'Ford Ranger',
    description: 'Insulfilm esportivo com acabamento perfeito',
    category: 'Automotivo',
    date: 'Out 2024',
    emoji: '🚗',
    material: 'Filme de Poliéster',
    thickness: '0.15mm',
    uvProtection: '99%',
    warranty: '5 anos'
  },
  {
    id: 6,
    title: 'Loja Shopping Center',
    description: 'Insulfilm comercial com design moderno e funcional',
    category: 'Comercial',
    date: 'Set 2024',
    emoji: '🏢',
    material: 'Filme de Poliéster',
    thickness: '0.25mm',
    uvProtection: '99%',
    warranty: '10 anos'
  }
]

const filteredGallery = computed(() => {
  if (activeFilter.value === 'all') {
    return galleryItems
  }
  return galleryItems.filter(item => item.category.toLowerCase().includes(activeFilter.value))
})

const selectedItem = ref<GalleryItem | null>(null)

const openModal = (item: GalleryItem) => {
  selectedItem.value = item
}

const closeModal = () => {
  selectedItem.value = null
}
</script>
