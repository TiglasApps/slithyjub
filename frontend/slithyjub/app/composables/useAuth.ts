interface AuthResponse {
    access_token: string;
    user: any;
}

export const useAuth = () => {
    const token = useCookie('auth_token');
    const user = useState('auth_user', () => null);

    const login = async (email: string, password: string) => {
        try {
            const { data, error } = await useFetch<AuthResponse>('http://localhost:3001/auth/login', {
                method: 'POST',
                body: { email, password },
            });

            if (error.value) {
                throw new Error(error.value.message);
            }

            if (data.value) {
                token.value = data.value.access_token;
                user.value = data.value.user;
                return true;
            }
        } catch (e) {
            console.error('Login failed:', e);
            return false;
        }
    };

    const register = async (email: string, password: string) => {
        try {
            const { data, error } = await useFetch('http://localhost:3001/auth/register', {
                method: 'POST',
                body: { email, password },
            });

            if (error.value) {
                throw new Error(error.value.message);
            }

            return true; // Registration successful
        } catch (e) {
            console.error('Registration failed:', e);
            return false;
        }
    };

    const logout = () => {
        token.value = null;
        user.value = null;
        navigateTo('/');
    };

    return {
        token,
        user,
        login,
        register,
        logout,
    };
};
