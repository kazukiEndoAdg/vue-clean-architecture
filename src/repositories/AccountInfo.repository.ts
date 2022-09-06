import { AccountingInfo } from "./../data/AccountingInfo.data";

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

export function get(loginToken: string): void {
  console.log("login Token is ", loginToken);
}

export async function post(loginToken: string): Promise<any> {
  return await fetch("https://hogehoge.co.jp/account-info")
    .then((res) => JSON.stringify(res))
    .catch((error) => console.log(error));
}

export function test(): string {
  return "a test sentence";
}
