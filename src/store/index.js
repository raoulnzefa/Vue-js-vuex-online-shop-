import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataUserStore: [],
    loggedUser: [],
    products: [],
    cart: [],
    oneProduct: [{}],
    favorites: []
  },
  mutations: {
    setUserData(state, payload) {
      state.dataUserStore = [...state.dataUserStore, payload]
    },
    setData(state, data) {
      state.products = data
    },
    setUploadData(state, payload) {
      state.products = [...state.products, payload]
    },
    addNewToCart(state, prod) {
      state.cart = [...state.cart, prod]
    },
    setCart(state, cart) {
      state.cart = cart
    },
    setLoggedUser(state, payload) {
      state.loggedUser = payload
    },
    deleteLogged(state, payload) {
      state.loggedUser = payload
    },
    checkoutCart(state, payload) {
      state.cart = payload
    },
    setDeleteItemCart(state, payload) {
      state.cart = payload
    },
    setOneProduct(state, payload) {
      state.oneProduct = payload
    },
    setFavorites(state, favorites) {
      state.favorites = favorites
    },
    addNewToFavorites(state, prod) {
      state.favorites = [...state.favorites, prod]
    },
    setDeleteFavorites(state, payload) {
      state.favorites = payload
    }
  },
  actions: {
    getUser(context, payload) {
      context.commit('setUserData', payload)
      console.log('store', this.state.dataUserStore)
    },
    getLoggedUser(context, payload) {
      let loggedUser = payload
      context.commit('setLoggedUser', loggedUser)
      console.log('loggeduserdata', loggedUser)
      console.log('logged user store state', this.state.loggedUser)
    },
    async getApi(context, data) {
      let url = 'https://fakestoreapi.com/products'
      const res = await fetch(url)
      const json = await res.json()
      data = json
      context.commit('setData', data)
      console.log('dataaa', data)
    },
    getUpload(context, payload) {
      let dataUpload = payload
      context.commit('setUploadData', dataUpload)
      console.log('dataUpload', dataUpload)
      console.log('Data store after upload', this.state.products)

    },
    addProduct({commit, state}, id) {
      const cart = state.cart
      const prod = state.products.find(x => x.id === id)

      if(cart.some(x => x.id === id)) {
        const prodIndex = state.cart.findIndex(x => x.id === id)
        const updateCart = [...state.cart]
        updateCart[prodIndex].quantity++
        commit('setCart', updateCart)
      } else {
        prod.quantity = 1
        commit('addNewToCart', prod)
      }
    },
    removeProduct({commit, state}, id) {
      const prodIndex = state.cart.findIndex(x => x.id === id)
      const updateCart = [...state.cart]
      if(updateCart[prodIndex].quantity > 1) {
       updateCart[prodIndex].quantity--
      commit('setCart', updateCart)
      }
    },
    logoutDeleteLoggedArr(context, payload) {
      context.commit('deleteLogged', payload)
      console.log('lalalalla', this.state.loggedUser)
    },
    checkout(context, payload) {
      context.commit('checkoutCart', payload)
    },
    deleteAllProduct(context, payload) {
      context.commit('setDeleteItemCart', payload)
    },
    addToFavorites({commit, state}, id) {
      const favorites = state.favorites
      const prod = state.products.find(x => x.id === id)

      if(favorites.some(x => x.id === id)) {
        const prodIndex = state.favorites.findIndex(x => x.id === id)
        const updateFavorites = [...state.favorites]
        updateFavorites[prodIndex].quantity++
        commit('setFavorites', updateFavorites)
      }  else {
        prod.quantity = 1
        commit('addNewToFavorites', prod)
      }
    },
    deleteFavorites(context, payload) {
      context.commit('setDeleteFavorites', payload)
    },
    // getOneProduct(context, payload) {
    //   context.commit('setOneProduct', payload)
    // }
  },
  modules: {
  }
})
