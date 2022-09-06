import * as AccountRepository from "../repositories/AccountInfo.repository";
import { AccountingInfo } from "../data/AccountingInfo.data";
// export const getAccountInfo = (loginToken: string): Promise<AccountingInfo> => {
//   return AccountRepository.get(loginToken);
// };
export const getAccountInfo = (loginToken: string) => {
  return AccountRepository.get(loginToken);
};
export const testAccountInfo = (): string => {
  return AccountRepository.test();
};
