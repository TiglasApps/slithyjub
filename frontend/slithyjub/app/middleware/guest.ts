export default defineNuxtRouteMiddleware((to, from) => {
    const { token } = useAuth();

    // If user is authenticated and trying to access login, redirect to dashboard
    if (token.value) {
        return navigateTo('/dashboard');
    }
});
