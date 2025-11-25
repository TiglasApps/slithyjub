<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20">
    <div class="w-full max-w-md mx-4 p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
          SlithyJub
        </h1>
        <p class="text-gray-400">Area Riservata</p>
      </div>
      <slot />
    </div>
  </div>
</template>
