import vueCookie from "vue-cookie";

const initState = {
    token: vueCookie.get("token") || null
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
            vueCookie.set("token", token);
            commit("setToken", token);
        },
        logout({ commit }) {
            vueCookie.delete("token");
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
