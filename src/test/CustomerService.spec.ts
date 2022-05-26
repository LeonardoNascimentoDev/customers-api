import { Test, TestingModule } from '@nestjs/testing'
import { AppModule } from '../AppModule'
import CustomerService from '../service/CustomerService'
import { saveCustomerMock } from './mocks/SaveCustomerMock'
import { CustomerRepository } from '../repository/CustomerRepository'

describe('CustomerService', () => {
    let cs: CustomerService
    let cr: CustomerRepository
    let costumer

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [AppModule]
        }).compile()

        cs = module.get<CustomerService>(CustomerService)
        cr = module.get<CustomerRepository>(CustomerRepository)

        Date.prototype.getTimezoneOffset = jest.fn(() => 180)
        Date.prototype.valueOf = jest.fn(() => 1625219607232)
    })

    describe('createCostumer()', () => {
        it('Request save costumer', async () => {
            costumer = await cs.executeSave(saveCustomerMock);
            const findCostumer = await cr.findByCustomerById(costumer._id);
            expect(costumer.name).toBe(findCostumer.name);
        }, 2000)
    })
})
