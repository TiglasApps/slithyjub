<template>
  <section id="features" class="py-20 bg-slate-900/50 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('features.title') }}</h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          {{ $t('features.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Card 1 -->
        <div class="glass p-8 rounded-2xl hover:bg-slate-800/50 transition-all duration-300 group">
          <div class="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-white">{{ $t('features.card1.title') }}</h3>
          <p class="text-gray-400 leading-relaxed">
            {{ $t('features.card1.desc') }}
          </p>
        </div>

        <!-- Card 2 -->
        <div class="glass p-8 rounded-2xl hover:bg-slate-800/50 transition-all duration-300 group">
          <div class="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-white">{{ $t('features.card2.title') }}</h3>
          <p class="text-gray-400 leading-relaxed">
            {{ $t('features.card2.desc') }}
          </p>
        </div>

        <!-- Card 3 -->
        <div class="glass p-8 rounded-2xl hover:bg-slate-800/50 transition-all duration-300 group">
          <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-white">{{ $t('features.card3.title') }}</h3>
          <p class="text-gray-400 leading-relaxed">
            {{ $t('features.card3.desc') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
