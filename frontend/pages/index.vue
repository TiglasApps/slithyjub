<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center overflow-hidden">
      <!-- Background Gradients -->
      <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Hero Content -->
          <div class="space-y-6 animate-fade-in">
            <h1 class="text-5xl md:text-6xl font-bold leading-tight">
              Amplifica il Tuo Brand su
              <span class="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Instagram
              </span>
            </h1>
            <p class="text-xl text-gray-300">
              La piattaforma intelligente per programmare e pubblicare le tue pubblicità su Instagram.
              Raggiungi il tuo pubblico al momento giusto, ogni volta.
            </p>
            <div class="flex flex-wrap gap-4">
              <a href="#features" class="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:-translate-y-1">
                Scopri di Più
              </a>
              <a href="/auth/login" class="px-8 py-4 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500 transition-all hover:-translate-y-1">
                Accedi
              </a>
            </div>
          </div>

          <!-- Hero Visual -->
          <div class="flex justify-center">
            <div class="relative w-72 h-[600px] bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-[40px] p-4 backdrop-blur-sm border border-white/10 shadow-2xl">
              <div class="w-full h-full bg-gray-800 rounded-[30px] overflow-hidden">
                <div class="w-full h-full bg-gradient-to-b from-purple-500/30 via-pink-500/30 to-cyan-500/30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-24 bg-gradient-to-b from-transparent to-purple-900/10">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Perché Scegliere SlithyJub?
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Feature Card 1 -->
          <div class="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20">
            <div class="text-5xl mb-4">📅</div>
            <h3 class="text-2xl font-bold mb-3">Programmazione Intelligente</h3>
            <p class="text-gray-400">Pianifica le tue pubblicità in anticipo e pubblicale automaticamente al momento ottimale.</p>
          </div>

          <!-- Feature Card 2 -->
          <div class="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20">
            <div class="text-5xl mb-4">📊</div>
            <h3 class="text-2xl font-bold mb-3">Analytics Avanzate</h3>
            <p class="text-gray-400">Monitora le performance delle tue campagne con dashboard dettagliate in tempo reale.</p>
          </div>

          <!-- Feature Card 3 -->
          <div class="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20">
            <div class="text-5xl mb-4">🎯</div>
            <h3 class="text-2xl font-bold mb-3">Targeting Preciso</h3>
            <p class="text-gray-400">Raggiungi il pubblico giusto con strumenti di targeting avanzati e segmentazione.</p>
          </div>

          <!-- Feature Card 4 -->
          <div class="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20">
            <div class="text-5xl mb-4">💰</div>
            <h3 class="text-2xl font-bold mb-3">Prezzi Flessibili</h3>
            <p class="text-gray-400">Paga solo per quello che usi. Pacchetti personalizzabili per ogni esigenza.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-24">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Come Funziona
        </h2>
        
        <div class="grid md:grid-cols-3 gap-12">
          <!-- Step 1 -->
          <div class="text-center space-y-4">
            <div class="w-20 h-20 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg shadow-purple-500/30">
              1
            </div>
            <h3 class="text-2xl font-bold">Carica la Tua Immagine</h3>
            <p class="text-gray-400">Carica l'immagine della tua pubblicità o creala con i nostri strumenti integrati.</p>
          </div>

          <!-- Step 2 -->
          <div class="text-center space-y-4">
            <div class="w-20 h-20 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg shadow-purple-500/30">
              2
            </div>
            <h3 class="text-2xl font-bold">Programma la Pubblicazione</h3>
            <p class="text-gray-400">Scegli quando e su quali pagine Instagram pubblicare la tua campagna.</p>
          </div>

          <!-- Step 3 -->
          <div class="text-center space-y-4">
            <div class="w-20 h-20 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg shadow-purple-500/30">
              3
            </div>
            <h3 class="text-2xl font-bold">Monitora i Risultati</h3>
            <p class="text-gray-400">Traccia le performance e ottimizza le tue campagne in tempo reale.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto p-12 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 text-center space-y-6">
          <h2 class="text-4xl md:text-5xl font-bold">Pronto a Far Crescere il Tuo Business?</h2>
          <p class="text-xl text-gray-300">Unisciti a migliaia di aziende che stanno già usando SlithyJub per amplificare la loro presenza su Instagram.</p>
          <a href="/auth/register" class="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:-translate-y-1">
            Inizia Gratuitamente
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800/50 border-t border-white/10 py-12">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <!-- Brand -->
          <div>
            <h3 class="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
              SlithyJub
            </h3>
            <p class="text-gray-400">La tua piattaforma per il successo su Instagram</p>
          </div>

          <!-- Product -->
          <div>
            <h4 class="font-bold mb-4">Prodotto</h4>
            <div class="space-y-2">
              <a href="#features" class="block text-gray-400 hover:text-purple-400 transition">Funzionalità</a>
              <a href="#pricing" class="block text-gray-400 hover:text-purple-400 transition">Prezzi</a>
              <a href="#docs" class="block text-gray-400 hover:text-purple-400 transition">Documentazione</a>
            </div>
          </div>

          <!-- Company -->
          <div>
            <h4 class="font-bold mb-4">Azienda</h4>
            <div class="space-y-2">
              <a href="#about" class="block text-gray-400 hover:text-purple-400 transition">Chi Siamo</a>
              <a href="#contact" class="block text-gray-400 hover:text-purple-400 transition">Contatti</a>
              <a href="#careers" class="block text-gray-400 hover:text-purple-400 transition">Lavora con Noi</a>
            </div>
          </div>

          <!-- Legal -->
          <div>
            <h4 class="font-bold mb-4">Legale</h4>
            <div class="space-y-2">
              <a href="#privacy" class="block text-gray-400 hover:text-purple-400 transition">Privacy</a>
              <a href="#terms" class="block text-gray-400 hover:text-purple-400 transition">Termini</a>
              <a href="#cookies" class="block text-gray-400 hover:text-purple-400 transition">Cookie</a>
            </div>
          </div>
        </div>

        <div class="pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; 2025 SlithyJub. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Future: Add animations on scroll, API calls, etc.
</script>
