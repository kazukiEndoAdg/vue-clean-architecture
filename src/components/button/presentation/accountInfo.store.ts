import { SampleButtonUseCase } from "./../domain/sampleButton.usecase";
import { defineStore } from "pinia";

// PiniaのStore定義方法
export const useAccountInfoStore = defineStore("accountInfo", {
  state: () => ({ status: 4, role: 9 }),
  getters: {},
  actions: {
    fetch() {
      // a function of fetching account data from API.
    },
  },
});
