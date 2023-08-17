import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null,
    user: null
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
    login: async (context, payload) => {
      const { usrEmail, userPassword} = payload;

      const response = await fetch(`https://hosted-api-nj1b.onrender.com/users?email=${userEmail}&password=${userPassword}`
      );
      const userData = await response.json();
      context.commit("setUser", userData[0]);
    },
    register: (context, payload) => {
      const { firstname, email, password} = payload;
      fetch("https://hosted-api-nj1b.onrender.com/users", {
        method: "POST",
        body: JSON.stringify({
          firstname: firstname,
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => response.json())
      .then((json) => context.commit("setUser", json));
    },
    getProducts: async (context) => {
      fetch("")
      .then((res) => res.json())
      .then((products) => context.commit("setPRoducts", products));
    },
  },
  modules: {
  }
})
