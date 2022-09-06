import * as SampleButtonUseCase from "../use-cases/accountInfo.usecase";
import { useBasicStatusStore } from "./basicStatus.store";
import { defineStore } from "pinia";

// PiniaのStore定義方法
export const useAccountInfoStore = defineStore({
  id: "accountInfo",
  state: () => ({
    accountInfo: {
      id: 5,
      status: 4,
      msg: "default",
    },
  }),
  actions: {
    fetch(loginToken: string) {
      const basicStatusStore = useBasicStatusStore();
      SampleButtonUseCase.getAccountInfo(loginToken);
      basicStatusStore.setStatus(7);
    },
    test() {
      const msg = SampleButtonUseCase.testAccountInfo();
      this.accountInfo = {
        ...this.accountInfo,
        msg,
      };
      console.log(msg);
    },
  },
});
