// https://nuxt.com/docs/api/configuration/nuxt-config
import { config } from 'dotenv'
config({ path: '.env.build' })

export default defineNuxtConfig({
    runtimeConfig: {
	public: {
	    buildVersion: process.env.NUXT_PUBLIC_BUILD_VERSION
	},
    },
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ['@nuxt/content'],
})
