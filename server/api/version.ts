const config = useRuntimeConfig()

export default defineEventHandler(() => {
    return { version: config.public.buildVersion }
});


