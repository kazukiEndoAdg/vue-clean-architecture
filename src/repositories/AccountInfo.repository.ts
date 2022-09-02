/** 現在ログインしているアカウントのリポジトリ */
export class AccountInfoRepository {
  constructor() {
    // write some APIs
  }
  /**
   * アカウント情報を取得する
   * @param {string} loginToken ログイントークン
   */
  get(loginToken: string) {
    fetch("https://hogehoge.co.jp/account-info")
      .then((res) => JSON.stringify(res))
      .catch((error) => console.log(error));
  }
}
