<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative min-h-screen bg-gradient-to-br from-dark-600 via-dark-500 to-dark-600 text-white overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0 bg-pattern-hero"></div>
      </div>
      
      <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full py-24">
          <!-- Text Content -->
          <div class="text-center lg:text-left space-y-8">
            <!-- Badge -->
            <div class="inline-flex items-center px-4 py-2 bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 rounded-full text-primary-300 text-sm font-medium">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Premium Quality • Garantia Vitalícia
            </div>

            <!-- Main Heading -->
            <div class="space-y-4">
              <h1 class="text-5xl md:text-7xl font-black leading-tight tracking-tight">
                <span class="block text-white">PROTEÇÃO</span>
                <span class="block text-gradient-primary text-primary-400">PREMIUM</span>
                <span class="block text-white text-4xl md:text-5xl font-light">para seu veículo</span>
              </h1>
              
              <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto lg:mx-0"></div>
            </div>

            <!-- Description -->
            <p class="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-lg">
              Películas automotivas de <span class="text-primary-400 font-semibold">alta tecnologia</span> que oferecem máxima proteção UV, controle térmico e privacidade total
            </p>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-8 py-8 border-t border-gray-600/30">
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-400">99%</div>
                <div class="text-sm text-gray-400">Proteção UV</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-400">5+</div>
                <div class="text-sm text-gray-400">Anos Garantia</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-400">1000+</div>
                <div class="text-sm text-gray-400">Clientes</div>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button class="group relative bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-primary-500/25">
                <span class="relative z-10">Solicitar Orçamento Grátis</span>
                <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              </button>
              <button class="border-2 border-gray-400/50 text-white hover:bg-white hover:text-dark-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm hover:border-white">
                <svg class="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"/>
                </svg>
                Ver Portfolio
              </button>
            </div>
          </div>

          <!-- Car Image -->
          <div class="relative">
            <img 
                  src="/assets/carroInsulfim.png" 
                  alt="Carro com Insulfilm Premium da Security Film" 
                  class="w-full h-[500px] object-cover object-center"
                />
          </div>
        </div>
      </div>
      
      <!-- Background Decorative elements -->
      <div class="absolute top-32 right-20 w-40 h-40 bg-primary-500 rounded-full opacity-10 blur-3xl"></div>
      <div class="absolute bottom-32 left-20 w-32 h-32 bg-primary-400 rounded-full opacity-20 blur-2xl"></div>
    </section>

    <!-- Features Section -->
    <section class="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0 bg-pattern-dots"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <!-- Section Header -->
        <div class="text-center mb-20">
          <div class="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-6">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            Diferenciais Premium
          </div>
          
          <h2 class="text-4xl md:text-6xl font-black text-dark-600 mb-6 leading-tight">
            Por que escolher a
            <span class="block text-gradient-primary bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
              Security Film?
            </span>
          </h2>
          
          <div class="w-32 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8"></div>
          
          <p class="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Tecnologia de ponta, qualidade comprovada e excelência em atendimento para oferecer a 
            <span class="text-primary-600 font-semibold">melhor experiência</span> em proteção automotiva
          </p>
        </div>

        <!-- Features Grid -->
        <div class="grid lg:grid-cols-3 gap-8 mb-20">
          <!-- Feature 1 -->
          <div class="group relative">
            <div class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
              <!-- Icon Container -->
              <div class="relative mb-8">
                <div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div class="absolute -top-2 -right-2 w-6 h-6 bg-primary-200 rounded-full opacity-60"></div>
                <div class="absolute -bottom-2 -left-2 w-4 h-4 bg-primary-300 rounded-full opacity-40"></div>
              </div>
              
              <h3 class="text-2xl font-bold text-dark-600 mb-4 text-center">Qualidade Premium</h3>
              <p class="text-gray-600 leading-relaxed text-center mb-6">
                Películas importadas de alta tecnologia com certificação internacional, garantindo máxima durabilidade e performance superior
              </p>
              
              <!-- Feature Tags -->
              <div class="flex flex-wrap gap-2 justify-center">
                <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">Certificada</span>
                <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">5 Anos</span>
              </div>
            </div>
          </div>

          <!-- Feature 2 -->
          <div class="group relative">
            <div class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
              <!-- Icon Container -->
              <div class="relative mb-8">
                <div class="w-20 h-20 bg-gradient-to-br from-dark-500 to-dark-600 rounded-2xl flex items-center justify-center mx-auto transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                </div>
                <div class="absolute -top-2 -right-2 w-6 h-6 bg-dark-200 rounded-full opacity-60"></div>
                <div class="absolute -bottom-2 -left-2 w-4 h-4 bg-dark-300 rounded-full opacity-40"></div>
              </div>
              
              <h3 class="text-2xl font-bold text-dark-600 mb-4 text-center">Proteção Total</h3>
              <p class="text-gray-600 leading-relaxed text-center mb-6">
                Bloqueio de 99% dos raios UV, redução térmica de até 15°C e máxima privacidade para seu conforto e segurança
              </p>
              
              <!-- Feature Tags -->
              <div class="flex flex-wrap gap-2 justify-center">
                <span class="px-3 py-1 bg-dark-100 text-dark-700 rounded-full text-xs font-medium">99% UV</span>
                <span class="px-3 py-1 bg-dark-100 text-dark-700 rounded-full text-xs font-medium">-15°C</span>
              </div>
            </div>
          </div>

          <!-- Feature 3 -->
          <div class="group relative">
            <div class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
              <!-- Icon Container -->
              <div class="relative mb-8">
                <div class="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-500 rounded-2xl flex items-center justify-center mx-auto transform rotate-2 group-hover:rotate-4 transition-transform duration-300">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <div class="absolute -top-2 -right-2 w-6 h-6 bg-primary-200 rounded-full opacity-60"></div>
                <div class="absolute -bottom-2 -left-2 w-4 h-4 bg-primary-300 rounded-full opacity-40"></div>
              </div>
              
              <h3 class="text-2xl font-bold text-dark-600 mb-4 text-center">Atendimento VIP</h3>
              <p class="text-gray-600 leading-relaxed text-center mb-6">
                Equipe especializada, consulta técnica gratuita e acompanhamento pós-venda para garantir sua total satisfação
              </p>
              
              <!-- Feature Tags -->
              <div class="flex flex-wrap gap-2 justify-center">
                <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">Consultoria</span>
                <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">Pós-Venda</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Trust Indicators -->
        <div class="bg-gradient-to-r from-dark-600 to-dark-700 rounded-3xl p-8 md:p-12 text-white">
          <div class="grid md:grid-cols-4 gap-8 text-center">
            <div class="space-y-2">
              <div class="text-4xl font-black text-primary-400">1000+</div>
              <div class="text-sm text-gray-300">Clientes Satisfeitos</div>
            </div>
            <div class="space-y-2">
              <div class="text-4xl font-black text-primary-400">5</div>
              <div class="text-sm text-gray-300">Anos de Garantia</div>
            </div>
            <div class="space-y-2">
              <div class="text-4xl font-black text-primary-400">99%</div>
              <div class="text-sm text-gray-300">Proteção UV</div>
            </div>
            <div class="space-y-2">
              <div class="text-4xl font-black text-primary-400">24h</div>
              <div class="text-sm text-gray-300">Atendimento</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="py-32 bg-gradient-to-br from-dark-600 via-dark-500 to-dark-700 text-white relative overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-20 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-20 w-80 h-80 bg-primary-400 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <!-- Section Header -->
        <div class="text-center mb-20">
          <div class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-primary-300 text-sm font-medium mb-6">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
            </svg>
            Nossos Serviços Premium
          </div>
          
          <h2 class="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Soluções <span class="text-primary-400">Completas</span>
            <span class="block">em Películas</span>
          </h2>
          
          <div class="w-32 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8"></div>
          
          <p class="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Da aplicação à manutenção, oferecemos serviços especializados para
            <span class="text-primary-400 font-semibold"> todos os tipos de veículos e necessidades</span>
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <!-- Service 1 -->
          <div class="group cursor-pointer">
            <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 hover:border-primary-400/50 transition-all duration-500 transform hover:-translate-y-2 h-full">
              <!-- Icon -->
              <div class="relative mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </div>
                <div class="absolute -top-1 -right-1 w-4 h-4 bg-primary-400 rounded-full animate-pulse"></div>
              </div>
              
              <h3 class="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                Películas Automotivas
              </h3>
              <p class="text-gray-300 text-sm leading-relaxed mb-4">
                Proteção UV, controle térmico e privacidade para carros, motos e veículos comerciais
              </p>
              
              <!-- Features -->
              <div class="space-y-1 text-xs text-gray-400">
                <div>• Redução de 99% UV</div>
                <div>• Controle térmico -15°C</div>
                <div>• Garantia 5 anos</div>
              </div>
            </div>
          </div>

          <!-- Service 2 -->
          <div class="group cursor-pointer">
            <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 hover:border-primary-400/50 transition-all duration-500 transform hover:-translate-y-2 h-full">
              <!-- Icon -->
              <div class="relative mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-dark-400 to-dark-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"/>
                  </svg>
                </div>
                <div class="absolute -top-1 -right-1 w-4 h-4 bg-dark-300 rounded-full animate-pulse"></div>
              </div>
              
              <h3 class="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                Películas Residenciais
              </h3>
              <p class="text-gray-300 text-sm leading-relaxed mb-4">
                Conforto térmico, privacidade e economia de energia para sua casa
              </p>
              
              <!-- Features -->
              <div class="space-y-1 text-xs text-gray-400">
                <div>• Economia energia 30%</div>
                <div>• Privacidade total</div>
                <div>• Anti-estilhaço</div>
              </div>
            </div>
          </div>

          <!-- Service 3 -->
          <div class="group cursor-pointer">
            <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 hover:border-primary-400/50 transition-all duration-500 transform hover:-translate-y-2 h-full">
              <!-- Icon -->
              <div class="relative mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
                <div class="absolute -top-1 -right-1 w-4 h-4 bg-primary-300 rounded-full animate-pulse"></div>
              </div>
              
              <h3 class="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                Películas Comerciais
              </h3>
              <p class="text-gray-300 text-sm leading-relaxed mb-4">
                Soluções corporativas para escritórios, lojas e estabelecimentos comerciais
              </p>
              
              <!-- Features -->
              <div class="space-y-1 text-xs text-gray-400">
                <div>• Redução custos AC</div>
                <div>• Ambiente profissional</div>
                <div>• Instalação rápida</div>
              </div>
            </div>
          </div>

          <!-- Service 4 -->
          <div class="group cursor-pointer">
            <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 hover:border-primary-400/50 transition-all duration-500 transform hover:-translate-y-2 h-full">
              <!-- Icon -->
              <div class="relative mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div class="absolute -top-1 -right-1 w-4 h-4 bg-primary-400 rounded-full animate-pulse"></div>
              </div>
              
              <h3 class="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                Manutenção Premium
              </h3>
              <p class="text-gray-300 text-sm leading-relaxed mb-4">
                Serviços de reparo, limpeza especializada e troca de películas
              </p>
              
              <!-- Features -->
              <div class="space-y-1 text-xs text-gray-400">
                <div>• Reparo profissional</div>
                <div>• Limpeza especializada</div>
                <div>• Garantia estendida</div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center">
          <div class="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 class="text-2xl md:text-3xl font-bold mb-4">
              Precisa de um orçamento personalizado?
            </h3>
            <p class="text-primary-100 mb-8 text-lg">
              Nossa equipe especializada está pronta para atender suas necessidades específicas
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <router-link 
                to="/services" 
                class="group relative bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <span class="relative z-10">Ver Todos os Serviços</span>
                <div class="absolute inset-0 bg-gradient-to-r from-gray-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              </router-link>
              
              <button class="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300">
                <svg class="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0 bg-pattern-circles"></div>
      </div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="bg-gradient-to-br from-dark-600 via-dark-500 to-dark-700 rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden">
          <!-- Background Effects -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-primary-600/20"></div>
          <div class="absolute top-10 right-10 w-40 h-40 bg-primary-500 rounded-full opacity-10 blur-3xl"></div>
          <div class="absolute bottom-10 left-10 w-32 h-32 bg-primary-400 rounded-full opacity-20 blur-2xl"></div>
          
          <div class="relative z-10">
            <!-- Badge -->
            <div class="inline-flex items-center px-4 py-2 bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 rounded-full text-primary-300 text-sm font-medium mb-8">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Atendimento Premium 24/7
            </div>

            <!-- Main Heading -->
            <h2 class="text-4xl md:text-6xl font-black mb-8 leading-tight">
              <span class="block">Pronto para</span>
              <span class="text-primary-400">PROTEGER</span>
              <span class="block">seu veículo?</span>
            </h2>
            
            <div class="w-32 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8"></div>

            <!-- Description -->
            <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Entre em contato conosco e receba um <span class="text-primary-400 font-semibold">orçamento personalizado</span> para suas necessidades específicas
            </p>

            <!-- Benefits -->
            <div class="grid md:grid-cols-3 gap-8 mb-12">
              <div class="flex items-center justify-center space-x-3">
                <div class="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div class="text-left">
                  <div class="font-semibold">Instalação Rápida</div>
                  <div class="text-sm text-gray-400">Mesma hora</div>
                </div>
              </div>
              
              <div class="flex items-center justify-center space-x-3">
                <div class="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div class="text-left">
                  <div class="font-semibold">Garantia Vitalícia</div>
                  <div class="text-sm text-gray-400">5 anos</div>
                </div>
              </div>
              
              <div class="flex items-center justify-center space-x-3">
                <div class="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                  </svg>
                </div>
                <div class="text-left">
                  <div class="font-semibold">Melhor Preço</div>
                  <div class="text-sm text-gray-400">Garantido</div>
                </div>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button class="group relative bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-primary-500/25 min-w-[280px]">
                <span class="relative z-10 flex items-center justify-center">
                  <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                  </svg>
                  Solicitar Orçamento Grátis
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              </button>
              
              <button class="group border-2 border-gray-400/50 text-white hover:bg-white hover:text-dark-600 px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-300 backdrop-blur-sm hover:border-white min-w-[280px]">
                <span class="flex items-center justify-center">
                  <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  (11) 99999-9999
                </span>
              </button>
            </div>

            <!-- Trust Signal -->
            <div class="mt-12 pt-8 border-t border-gray-600/30">
              <p class="text-gray-400 text-sm">
                ⭐ Mais de 1000 clientes satisfeitos • 5 estrelas no Google • Certificação Premium
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>
