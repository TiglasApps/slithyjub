<template>
  <section class="py-24 relative overflow-hidden">
    <!-- Decorative background -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-teal-900/10 pointer-events-none"></div>
    
    <div class="max-w-4xl mx-auto px-4 text-center relative z-10">
      <h2 class="text-4xl md:text-5xl font-bold mb-6">{{ $t('cta.title') }}</h2>
      <p class="text-xl text-gray-400 mb-10">
        {{ $t('cta.description') }}
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <button class="btn-primary text-lg px-10 py-4 shadow-xl shadow-teal-500/20">
          {{ $t('cta.primary') }}
        </button>
        <button class="btn-secondary text-lg px-10 py-4">
          {{ $t('cta.secondary') }}
        </button>
      </div>
    </div>
  </section>
</template>
