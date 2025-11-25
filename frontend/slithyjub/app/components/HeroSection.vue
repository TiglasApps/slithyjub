<template>
  <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-500/20 blur-[120px]"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <div class="inline-block mb-4 px-4 py-1.5 rounded-full glass text-sm font-medium text-teal-300 border border-teal-500/30">
        {{ $t('hero.tagline') }}
      </div>
      
      <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
        {{ $t('hero.titlePre') }} <br />
        <span class="text-gradient">{{ $t('hero.titleHighlight') }}</span>
      </h1>
      
      <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10">
        {{ $t('hero.description') }}
      </p>
      
      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button class="btn-primary w-full sm:w-auto text-lg px-8 py-4">
          {{ $t('hero.startCampaign') }}
        </button>
        <button class="btn-secondary w-full sm:w-auto text-lg px-8 py-4 flex items-center justify-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {{ $t('hero.watchDemo') }}
        </button>
      </div>

      <!-- Social Proof / Trust Indicators -->
      <div class="mt-16 pt-8 border-t border-gray-800/50">
        <p class="text-sm text-gray-500 mb-6 uppercase tracking-wider">{{ $t('hero.trustedBy') }}</p>
        <div class="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <!-- Placeholders for logos -->
          <div class="h-8 w-24 bg-white/10 rounded"></div>
          <div class="h-8 w-24 bg-white/10 rounded"></div>
          <div class="h-8 w-24 bg-white/10 rounded"></div>
          <div class="h-8 w-24 bg-white/10 rounded"></div>
        </div>
      </div>
    </div>
  </section>
</template>
