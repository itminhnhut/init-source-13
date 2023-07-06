declare global {
    interface Window {
        RUN_ENV: any // 👈️ turn off type checking
    }
}

export default global
