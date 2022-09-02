import { AccountInfoRepository } from "../../../repositories/AccountInfo.repository";
export class SampleButtonUseCase {
  private accountInfoRepository: AccountInfoRepository;
  constructor(accountInfoRepository: AccountInfoRepository) {
    this.accountInfoRepository = accountInfoRepository;
  }

  get() {
    this.accountInfoRepository.get("sample-login-token");
  }
}
