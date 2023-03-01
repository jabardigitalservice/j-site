export const state = () => ({
  navigationMenus: []
})

export const mutations = {
  SET_NAVIGATION_MENU(state, value) {
    state.navigationMenus = value
  }
}

export const actions = {
  async setNavigationMenu({ commit }, menus) {
    if (Array.isArray(menus) && menus.length !== 0) {
      commit('SET_NAVIGATION_MENU', menus)
    }
  }
}
