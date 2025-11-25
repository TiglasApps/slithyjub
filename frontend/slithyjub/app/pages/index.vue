<template>
  <div class="overflow-hidden">
    <HeroSection />
    <FeatureCards />
    <CallToAction />
  </div>
</template>

<script setup lang="ts">

const { t } = useI18n()

useHead({
  title: () => t('meta.title'),
  meta: [
    { name: 'description', content: () => t('meta.description') }
  ]
})
</script>