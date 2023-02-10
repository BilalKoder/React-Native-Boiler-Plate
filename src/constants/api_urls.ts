import { API_CONFIG } from "./api"

const authController = 'Authentication'

export const SERVICE_CONFIG_URLS = {
    AUTH: {
        // LOGIN: `${authController}/login`,
        LOGIN: `${API_CONFIG.BASE_URL_DEV}/login`,
        ME : `${API_CONFIG.BASE_URL_DEV}/auth/me`,
        FORGET: `${API_CONFIG.BASE_URL_DEV}/forget-password`
        // ME: `${authController}/me`
    },
}