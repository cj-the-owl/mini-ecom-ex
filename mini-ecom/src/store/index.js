import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null,
    user: null,
    users: null
  },
  getters: {
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setProducts: (state, products) => {
      state.products = products;
    },

  },
  actions: {
    async fetchUser(context) {
      try{
        let {user} = await (await fetch("https://hosted-api-nj1b.onrender.com/user")).json()
        if (user) {
          context.commit ("setUser", user )
        } else {
          alert("error")
        }
      }
      catch(e) {
        console.log(error)
      }
    },
    register: (context, payload) => {
      const { firstName, lastName, userEmail, userPassword} = payload;
      fetch("https://hosted-api-nj1b.onrender.com/register", {
        method: "POST",
        body: JSON.stringify({
          firstName: firstName,
          userEmail: userEmail,
          userPassword: userPassword,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => response.json())
      .then((json) => context.commit("setUser", json));
    },
    async fetchProducts(context) {
      try{
        let products = await (await fetch("https://hosted-api-nj1b.onrender.com/products")).json()
        if (products) {
          context.commit ("setProducts", products )
        } else {
          alert("error")
        }
      }
      catch(e) {
        console.error(error)
      }
    },
  },
  modules: {
  }
})
