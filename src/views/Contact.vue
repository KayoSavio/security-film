<template>
  <div class="contact">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Entre em Contato
        </h1>
        <p class="text-xl text-primary-100 max-w-3xl mx-auto">
          Estamos prontos para atender suas necessidades e oferecer a melhor solução para seu projeto
        </p>
      </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white p-8 rounded-2xl shadow-xl">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              Solicite um Orçamento
            </h2>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                    Nome *
                  </label>
                  <input
                    id="firstName"
                    v-model="form.firstName"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                    Sobrenome *
                  </label>
                  <input
                    id="lastName"
                    v-model="form.lastName"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Seu sobrenome"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label for="service" class="block text-sm font-medium text-gray-700 mb-2">
                  Serviço de Interesse *
                </label>
                <select
                  id="service"
                  v-model="form.service"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="automotive">Insulfilm Automotivo</option>
                  <option value="residential">Insulfilm Residencial</option>
                  <option value="commercial">Insulfilm Comercial</option>
                  <option value="maintenance">Manutenção</option>
                  <option value="other">Outro</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Descreva seu projeto ou dúvida..."
                ></textarea>
              </div>

              <div class="flex items-center">
                <input
                  id="newsletter"
                  v-model="form.newsletter"
                  type="checkbox"
                  class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <label for="newsletter" class="ml-2 text-sm text-gray-600">
                  Desejo receber novidades e promoções por e-mail
                </label>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="isSubmitting">Enviando...</span>
                <span v-else>Enviar Mensagem</span>
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="space-y-8">
            <!-- Company Info -->
            <div class="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl">
              <h3 class="text-xl font-bold text-primary-900 mb-4">
                Informações da Empresa
              </h3>
              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <span class="text-primary-600">📍</span>
                  <div>
                    <p class="font-medium text-primary-900">Endereço</p>
                    <p class="text-primary-700">Rua das Flores, 123 - Centro</p>
                    <p class="text-primary-700">São Paulo - SP, 01234-567</p>
                  </div>
                </div>
                
                <div class="flex items-center space-x-3">
                  <span class="text-primary-600">📞</span>
                  <div>
                    <p class="font-medium text-primary-900">Telefone</p>
                    <p class="text-primary-700">(11) 99999-9999</p>
                    <p class="text-primary-700">(11) 88888-8888</p>
                  </div>
                </div>
                
                <div class="flex items-center space-x-3">
                  <span class="text-primary-600">📧</span>
                  <div>
                    <p class="font-medium text-primary-900">E-mail</p>
                    <p class="text-primary-700">contato@insulfilmpro.com</p>
                    <p class="text-primary-700">vendas@insulfilmpro.com</p>
                  </div>
                </div>
                
                <div class="flex items-center space-x-3">
                  <span class="text-primary-600">🕒</span>
                  <div>
                    <p class="font-medium text-primary-900">Horário de Funcionamento</p>
                    <p class="text-primary-700">Segunda a Sexta: 8h às 18h</p>
                    <p class="text-primary-700">Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="bg-white p-8 rounded-2xl shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-4">
                Redes Sociais
              </h3>
              <div class="flex space-x-4">
                <a href="#" class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700 transition-colors">
                  <span class="text-xl">📘</span>
                </a>
                <a href="#" class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700 transition-colors">
                  <span class="text-xl">📷</span>
                </a>
                <a href="#" class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700 transition-colors">
                  <span class="text-xl">🐦</span>
                </a>
                <a href="#" class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700 transition-colors">
                  <span class="text-xl">💼</span>
                </a>
              </div>
            </div>

            <!-- Emergency Contact -->
            <div class="bg-red-50 p-8 rounded-2xl border border-red-200">
              <h3 class="text-xl font-bold text-red-900 mb-4">
                🚨 Atendimento de Emergência
              </h3>
              <p class="text-red-700 mb-4">
                Para casos urgentes, ligue para nosso número de emergência:
              </p>
              <a href="tel:+5511999999999" class="text-2xl font-bold text-red-600 hover:text-red-700">
                (11) 99999-9999
              </a>
              <p class="text-sm text-red-600 mt-2">
                Atendimento 24 horas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossa Localização
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Visite nossa oficina para conhecer nosso trabalho de perto
          </p>
        </div>
        
        <div class="bg-white p-8 rounded-2xl shadow-lg">
          <div class="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
            <div class="text-center">
              <span class="text-6xl mb-4 block">🗺️</span>
              <p class="text-gray-600">Mapa interativo será integrado aqui</p>
              <p class="text-sm text-gray-500 mt-2">Rua das Flores, 123 - Centro, São Paulo - SP</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary-600 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Pronto para começar seu projeto?
        </h2>
        <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Entre em contato conosco hoje mesmo e receba um orçamento personalizado
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+5511999999999" class="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
            Ligar Agora
          </a>
          <a href="mailto:contato@insulfilmpro.com" class="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors">
            Enviar E-mail
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface ContactForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  message: string
  newsletter: boolean
}

const form = ref<ContactForm>({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  newsletter: false
})

const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Reset form
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    newsletter: false
  }
  
  isSubmitting.value = false
  
  // Show success message (you can implement a toast notification here)
  alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
}
</script>
