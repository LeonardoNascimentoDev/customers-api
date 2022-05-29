import { Test, TestingModule } from '@nestjs/testing'
import { AppModule } from '../AppModule'
import CustomerService from '../service/CustomerService'
import { CustomerRepository } from '../repository/CustomerRepository'
import { customerFindIdMock } from './mocks/CustomerFindIdMock'
import { updateCustomerMock } from './mocks/UpdateCustomerMock'
import { customerMock } from './mocks/CustomerMock'

describe('CustomerService', () => {
    let cs: CustomerService
    let cr: CustomerRepository
    let customer

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [AppModule]
        }).compile()

        cs = module.get<CustomerService>(CustomerService)
        cr = module.get<CustomerRepository>(CustomerRepository)

        Date.prototype.getTimezoneOffset = jest.fn(() => 180)
        Date.prototype.valueOf = jest.fn(() => 1625219607232)
    })

    describe('getAllCostumers()', () => {
        it('Request get all customers', async () => {
            const findAllCostumer = await cs.getAll();
            expect(findAllCostumer)
        }, 2000)
    })


    describe('createCostumer()', () => {
        it('Request save costumer', async () => {
            customer = await cs.executeSave(customerMock);
            const findCostumer = await cr.findByCustomerById(customer._id);
            expect(customer.name)
            expect(customer.email).toBe(findCostumer.email);
            expect(customer.phoneNumber).toBe(findCostumer.phoneNumber);
            expect(customer.postalAddress.countryCode).toBe(findCostumer.postalAddress.countryCode);
            expect(customer.postalAddress.region).toBe(findCostumer.postalAddress.region);
            expect(customer.postalAddress.locality).toBe(findCostumer.postalAddress.locality);
            expect(customer.postalAddress.postalCode).toBe(findCostumer.postalAddress.postalCode);
            expect(customer.postalAddress.street).toBe(findCostumer.postalAddress.street);
            expect(customer.postalAddress.number).toBe(findCostumer.postalAddress.number);
        }, 2000)
    })

    describe('findCustomerById()', () => {
        it('Request get customer ById', async () => {
            const findCostumer = await cr.findByCustomerById(customerFindIdMock.id);
            expect(findCostumer.name)
            expect(findCostumer.email)
            expect(findCostumer.phoneNumber)
            expect(findCostumer.postalAddress.countryCode)
            expect(findCostumer.postalAddress.region)
            expect(findCostumer.postalAddress.locality)
            expect(findCostumer.postalAddress.postalCode)
            expect(findCostumer.postalAddress.street)
            expect(findCostumer.postalAddress.number)
        }, 2000)
    })

    describe('updateCustomer()', () => {
        it('Request update customer ById', async () => {
            const findCostumer = await cr.update(updateCustomerMock.id, updateCustomerMock);
            expect(findCostumer.name)
            expect(findCostumer.email)
            expect(findCostumer.phoneNumber)
            expect(findCostumer.postalAddress.countryCode)
            expect(findCostumer.postalAddress.region)
            expect(findCostumer.postalAddress.locality)
            expect(findCostumer.postalAddress.postalCode)
            expect(findCostumer.postalAddress.street)
            expect(findCostumer.postalAddress.number)
        }, 2000)
    })
})
