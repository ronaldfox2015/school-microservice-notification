import { TestingE2eModule } from './../testing-e2e-module'
import { BenefitRepository } from '@product/domain/benefit.repository'
export interface ProductTestingInterface {
  benefitRepository: BenefitRepository
}

export class ProductE2eModule extends TestingE2eModule {
  static async create (): Promise<ProductTestingInterface> {
    const module = new ProductE2eModule()
    await module.init()
    return {
      benefitRepository: module.moduleFixture.get<BenefitRepository>(BenefitRepository)
    }
  }
}
