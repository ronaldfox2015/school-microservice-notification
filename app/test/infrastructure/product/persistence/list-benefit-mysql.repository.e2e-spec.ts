import { type BenefitRepository } from '@product/domain/benefit.repository'
import { ProductE2eModule } from './../product-e2e-module'
import { Benefit } from '@product/domain/benefit.model'

describe('BenefitRepository list', () => {
  let repository: BenefitRepository

  beforeEach(async () => {
    (
      { benefitRepository: repository } = await ProductE2eModule.create()
    )
  })

  it('only accept list 16 per page', async () => {
    const model = new Benefit()
    model.id = 1
    model.name = 'Dias de publicación'
    const result = await repository.update(model)
    expect(model).toEqual(result)
  })
})
