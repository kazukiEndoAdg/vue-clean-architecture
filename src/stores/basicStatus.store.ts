import { defineStore } from "pinia";

export const useBasicStatusStore = defineStore({
  id: "basicStatus",
  state: () => ({
    statusInfo: {
      status: 1,
    },
  }),
  actions: {
    setStatus(status: number) {
      this.statusInfo.status = status;
    },
  },
});
