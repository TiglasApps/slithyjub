<template>
  <div class="min-h-screen bg-gray-900 pt-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="bg-gray-800 overflow-hidden shadow rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <h1 class="text-3xl font-bold text-white mb-4">{{ $t('dashboard.title') }}</h1>
          <div v-if="user" class="text-gray-300">
            <p class="text-xl">{{ $t('dashboard.welcome') }} <span class="text-teal-400">{{ user.email }}</span>!</p>
            <p class="mt-2">{{ $t('dashboard.description') }}</p>
          </div>
          <div class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <!-- Placeholder cards for dashboard content -->
            <div class="bg-gray-700 overflow-hidden shadow rounded-lg">
              <div class="p-5">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <!-- Icon -->
                    <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div class="ml-5 w-0 flex-1">
                    <dl>
                      <dt class="text-sm font-medium text-gray-400 truncate">{{ $t('dashboard.totalProjects') }}</dt>
                      <dd>
                        <div class="text-lg font-medium text-white">12</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
             <div class="bg-gray-700 overflow-hidden shadow rounded-lg">
              <div class="p-5">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <!-- Icon -->
                    <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div class="ml-5 w-0 flex-1">
                    <dl>
                      <dt class="text-sm font-medium text-gray-400 truncate">{{ $t('dashboard.hoursLogged') }}</dt>
                      <dd>
                        <div class="text-lg font-medium text-white">24.5</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
});

const { user } = useAuth();
</script>
