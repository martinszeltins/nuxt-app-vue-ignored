import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },

    routeRules: {
        '/': {
            redirect: { to: '/single-shipment', statusCode: 302 }
        }
    },

    components: [
        {
            path: '~/common/components',
            pathPrefix: false
        }
    ],

    future: {
        compatibilityVersion: 4
    },

    modules: ['@vueuse/nuxt'],

    experimental: {
        asyncContext: true,
        typedPages: true,
        scanPageMeta: true,
    },
})
