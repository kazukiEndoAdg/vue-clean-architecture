import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    authInfo: {
      loginToken: "sample-login-token",
    },
  }),
  actions: {
    fetch() {
      this.authInfo.loginToken = "fetched-login-token";
    },
  },
});
