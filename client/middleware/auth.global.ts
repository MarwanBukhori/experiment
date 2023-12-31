export default defineNuxtRouteMiddleware((to, from) => {
  if (import.meta.server)
    return

  const api = useApi()

  if (api && to.path !== api.config.redirect.logout && to.path !== '/invalid' && !api.loggedIn.value) {
    if (to.meta.middleware === 'guest')
      return
    if (from.meta.middleware === 'guest')
      return

    return navigateTo(api.config.redirect.logout)
  }
})
