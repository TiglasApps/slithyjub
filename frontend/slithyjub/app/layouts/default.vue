<template>
  <div class="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative selection:bg-teal-500 selection:text-white">
    <TopBar />
    
    <main>
      <slot />
    </main>
    
    <!-- Keeping existing Footer if available, otherwise this might need a new component -->
    <Footer v-if="hasFooter" />
  </div>
</template>

<script setup>
// Check if Footer component is available or registered
import { resolveComponent } from 'vue'

const hasFooter = typeof resolveComponent('Footer') !== 'string'
</script>

<style>
/* Global styles are imported in main.css */
</style>

