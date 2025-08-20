<template>
  <div class="services">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Nossos Serviços
        </h1>
        <p class="text-xl text-primary-100 max-w-3xl mx-auto">
          Oferecemos soluções completas em insulfilm para automóveis, residências e estabelecimentos comerciais
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Automotive -->
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="bg-gradient-to-r from-primary-500 to-primary-700 p-8 text-white">
              <div class="flex items-center space-x-4 mb-4">
                <span class="text-4xl">🚗</span>
                <h2 class="text-2xl font-bold">Insulfilm Automotivo</h2>
              </div>
              <p class="text-primary-100">
                Proteção e estilo para seu veículo com os melhores materiais do mercado
              </p>
            </div>
            <div class="p-8">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Inclui:</h3>
              <ul class="space-y-3 text-gray-600">
                <li class="flex items-center space-x-3">
                  <span class="text-green-500">✓</span>
                  <span>Proteção contra raios UV</span>
                </li>
                <li class="flex items-center space-x-3">
                  <span class="text-green-500">✓</span>
                  <span>Redução de calor interno</span>
                </li>
                <li class="flex items-center space-x-3">
                  <span class="text-green-500">✓</span>
                  <span>Privacidade e segurança</span>
                </li>
                <li class="flex items-center space-x-3">
                  <span class="text-green-500">✓</span>
                  <span>Proteção contra riscos</span>
                </li>
                <li class="flex items-center space-x-3">
                  <span class="text-green-500">✓</span>
                  <span>Garantia de 5 anos</span>
                </li>
              </ul>
              <div class="mt-6">
                <router-link to="/contato" class="btn-primary w-full text-center">
                  Solicitar Orçamento
                </router-link>
              </div>
            </div>
          </div>

          <!-- Residential -->
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="bg-gradient-to-r from-gray-600 to-gray-800 p-8 text-white">
              <div class="flex items-center space-x-4 mb-4">
                <span class="text-4xl">🏠</span>
                <h2 class="text-2xl font-bold">Insulfilm Residencial</h2>
              </div>
              <p class="text-gray-300">
                Proteção e conforto para sua casa com soluções personalizadas
              </p>
            </div>
            <div class="p-8">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Inclui:</h3>
              <ul class="space-y-3 text-gray-600">
                <li class="flex items-center space-x-3">
                  <span class="text-green-500">✓</span>
                  <span>Controle de temperatura</span>
                </li>
                <li class="flex items-center space-x-3">
                  <span class="text-green-500">✓</span>
                  <span>Proteção contra UV</span>
                </li>
                <li class="flex items-center space-x-3">
                  <span class="text-green-500">✓</span>
                  <span>Privacidade</span>
                </li>
                <li class="flex items-center space-x-3">
                  <span class="text-green-500">✓</span>
                  <span>Redução de energia</span>
                </li>
                <li class="flex items-center space-x-3">
                  <span class="text-green-500">✓</span>
                  <span>Garantia de 7 anos</span>
                </li>
              </ul>
              <div class="mt-6">
                <router-link to="/contato" class="btn-primary w-full text-center">
                  Solicitar Orçamento
                </router-link>
              </div>
            </div>
          </div>

          <!-- Commercial -->
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="bg-gradient-to-r from-primary-500 to-primary-700 p-8 text-white">
              <div class="flex items-center space-x-4 mb-4">
                <span class="text-4xl">🏢</span>
                <h2 class="text-2xl font-bold">Insulfilm Comercial</h2>
              </div>
              <p class="text-primary-100">
                Soluções empresariais para escritórios, lojas e estabelecimentos
              </p>
            </div>
            <div class="p-8">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Inclui:</h3>
              <ul class="space-y-3 text-gray-600">
                <li class="flex items-center space-x-3">
                  <span class="text-green-500">✓</span>
                  <span>Proteção UV avançada</span>
                </li>
                <li class="flex items-center space-x-3">
                  <span class="text-green-500">✓</span>
                  <span>Controle de temperatura</span>
                </li>
                <li class="flex items-center space-x-3">
                  <span class="text-green-500">✓</span>
                  <span>Branding personalizado</span>
                </li>
                <li class="flex items-center space-x-3">
                  <span class="text-green-500">✓</span>
                  <span>Redução de custos</span>
                </li>
                <li class="flex items-center space-x-3">
                  <span class="text-green-500">✓</span>
                  <span>Garantia de 10 anos</span>
                </li>
              </ul>
              <div class="mt-6">
                <router-link to="/contato" class="btn-primary w-full text-center">
                  Solicitar Orçamento
                </router-link>
              </div>
            </div>
          </div>

          <!-- Maintenance -->
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="bg-gradient-to-r from-gray-600 to-gray-800 p-8 text-white">
              <div class="flex items-center space-x-4 mb-4">
                <span class="text-4xl">🔧</span>
                <h2 class="text-2xl font-bold">Manutenção</h2>
              </div>
              <p class="text-gray-300">
                Serviços de reparo, substituição e manutenção preventiva
              </p>
            </div>
            <div class="p-8">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Inclui:</h3>
              <ul class="space-y-3 text-gray-600">
                <li class="flex items-center space-x-3">
                  <span class="text-green-500">✓</span>
                  <span>Reparo de danos</span>
                </li>
                <li class="flex items-center space-x-3">
                  <span class="text-green-500">✓</span>
                  <span>Substituição de películas</span>
                </li>
                <li class="flex items-center space-x-3">
                  <span class="text-green-500">✓</span>
                  <span>Limpeza profissional</span>
                </li>
                <li class="flex items-center space-x-3">
                  <span class="text-green-500">✓</span>
                  <span>Inspeção gratuita</span>
                </li>
                <li class="flex items-center space-x-3">
                  <span class="text-green-500">✓</span>
                  <span>Atendimento 24h</span>
                </li>
              </ul>
              <div class="mt-6">
                <router-link to="/contato" class="btn-primary w-full text-center">
                  Solicitar Orçamento
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como Funciona Nosso Processo
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Processo simples e eficiente para atender suas necessidades
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-white">1</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Contato</h3>
            <p class="text-gray-600">Entre em contato conosco para uma consulta inicial</p>
          </div>

          <div class="text-center">
            <div class="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-white">2</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Orçamento</h3>
            <p class="text-gray-600">Receba um orçamento personalizado para seu projeto</p>
          </div>

          <div class="text-center">
            <div class="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-white">3</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Agendamento</h3>
            <p class="text-gray-600">Agendamos a instalação na data e horário de sua preferência</p>
          </div>

          <div class="text-center">
            <div class="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-white">4</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Instalação</h3>
            <p class="text-gray-600">Nossa equipe realiza a instalação com perfeição</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary-600 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Precisa de um orçamento personalizado?
        </h2>
        <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Nossa equipe está pronta para atender suas necessidades e oferecer a melhor solução
        </p>
        <router-link to="/contato" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">
          Solicitar Orçamento Gratuito
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Component logic here if needed
</script>
