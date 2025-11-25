<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-white">
          {{ isLogin ? $t('auth.signInTitle') : $t('auth.signUpTitle') }}
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">{{ $t('auth.emailLabel') }}</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required v-model="email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm" :placeholder="$t('auth.emailLabel')" />
          </div>
          <div>
            <label for="password" class="sr-only">{{ $t('auth.passwordLabel') }}</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required v-model="password" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm" :placeholder="$t('auth.passwordLabel')" />
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
            {{ isLogin ? $t('auth.signInButton') : $t('auth.signUpButton') }}
          </button>
        </div>
      </form>
      <div class="text-center">
        <button @click="isLogin = !isLogin" class="text-teal-400 hover:text-teal-300 text-sm">
          {{ isLogin ? $t('auth.needAccount') : $t('auth.haveAccount') }}
        </button>
      </div>
      <div v-if="error" class="text-red-500 text-center text-sm mt-2">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'guest'
});

const isLogin = ref(true);
const email = ref('');
const password = ref('');
const error = ref('');
const { login, register } = useAuth();
const { t } = useI18n();

const handleSubmit = async () => {
  error.value = '';
  if (isLogin.value) {
    const success = await login(email.value, password.value);
    if (success) {
      navigateTo('/dashboard');
    } else {
      error.value = t('auth.invalidCredentials');
    }
  } else {
    const success = await register(email.value, password.value);
    if (success) {
      // Auto login after register or ask to login
      const loginSuccess = await login(email.value, password.value);
      if (loginSuccess) {
        navigateTo('/dashboard');
      }
    } else {
      error.value = t('auth.registrationFailed');
    }
  }
};
</script>
