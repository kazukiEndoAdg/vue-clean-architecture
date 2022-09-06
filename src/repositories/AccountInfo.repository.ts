import { AccountingInfo } from "./../data/AccountingInfo.data";
import { DateTimeApi } from "../../types/resources/api/date-time-api";
/** 現在ログインしているアカウントのリポジトリ */
/**
 * アカウント情報を取得する
 * @param {string} loginToken ログイントークン
 */
// export async function get(loginToken: string): Promise<any> {
//   return await fetch("https://hogehoge.co.jp/account-info")
//     .then((res) => JSON.stringify(res))
//     .catch((error) => console.log(error));
//   console.log("login Token is ", loginToken);
// }

export async function get(loginToken: string) {
  console.log("login Token is ", loginToken);
  const response = await new DateTimeApi().getDateTime();
  return response;
}

export async function post(loginToken: string): Promise<any> {
  return await fetch("https://hogehoge.co.jp/account-info")
    .then((res) => JSON.stringify(res))
    .catch((error) => console.log(error));
}

export function test(): string {
  return "a test sentence";
}
