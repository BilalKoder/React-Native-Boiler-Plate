import { API_CONFIG } from "./api"

const authController = 'Authentication'

export const SERVICE_CONFIG_URLS = {
    AUTH: {
        // LOGIN: `${authController}/login`,
        LOGIN: `${API_CONFIG.BASE_URL_DEV}/login`,
        ME : `${API_CONFIG.BASE_URL_DEV}/auth/me`,
        FORGET: `${API_CONFIG.BASE_URL_DEV}/forget-password`,
        VERIFY: `${API_CONFIG.BASE_URL_DEV}/verify-otp`,
        RESET: `${API_CONFIG.BASE_URL_DEV}/reset-password`
        // ME: `${authController}/me`
    },
    APP:{
        NOTIFCATIONS : `${API_CONFIG.BASE_URL_DEV}/notification`,
        NOTIFCATIONS_UPDATE : `${API_CONFIG.BASE_URL_DEV}/notification`,
    }
}