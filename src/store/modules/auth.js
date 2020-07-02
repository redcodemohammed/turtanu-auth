const initState = {
    token: localStorage.getItem("token") || null
}

export default {
    state: { ...initState },
    getters: {
        token({ token }) {
            return token;
        },
        isLoggedIn({ token }) {
            return token !== null;
        }
    },
    actions: {
        setToken({ commit }, token) {
            localStorage.setItem("token", token);
            commit("setToken", token);
        },
        logout({ commit }) {
            localStorage.removeItem("token");
            commit("logout")
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        logout(state) {
            state.token = null;
        }
    }
}
