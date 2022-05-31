import { Test, TestingModule } from '@nestjs/testing'
import { AppModule } from '../AppModule'
import CustomerService from '../service/CustomerService'
import { CustomerRepository } from '../repository/CustomerRepository'
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
        }, 5000)
    })
    describe('createCostumer()', () => {
        it('Request save costumer', async () => {
            customer = await cs.executeSave(customerMock);
            const findCostumer = await cr.findByCustomerById(customer._id);
            expect(customer.name).toBe(findCostumer.name);
            expect(customer.email).toBe(findCostumer.email);
            expect(customer.phoneNumber).toBe(findCostumer.phoneNumber);
            expect(customer.imgProfile).toBe(findCostumer.imgProfile);
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
            const findCustumer = await cr.findByCustomerById(customer._id);
            expect(findCustumer.name).toBe(customer.name)
            expect(findCustumer.email).toBe(customer.email)
            expect(findCustumer.phoneNumber).toBe(customer.phoneNumber)
            expect(findCustumer.imgProfile).toBe(customer.imgProfile);
            expect(findCustumer.postalAddress.countryCode).toBe(customer.postalAddress.countryCode)
            expect(findCustumer.postalAddress.region).toBe(customer.postalAddress.region)
            expect(findCustumer.postalAddress.locality).toBe(customer.postalAddress.locality)
            expect(findCustumer.postalAddress.postalCode).toBe(customer.postalAddress.postalCode)
            expect(findCustumer.postalAddress.street).toBe(customer.postalAddress.street)
            expect(findCustumer.postalAddress.number).toBe(customer.postalAddress.number)
        }, 2000)
    })
    describe('updateCustomer()', () => {
        it('Request update customer ById', async () => {
            const updateCustumer = await cr.update(customer._id, customer);
            expect(updateCustumer.name).toBe(customer.name)
            expect(updateCustumer.email).toBe(customer.email)
            expect(updateCustumer.phoneNumber).toBe(customer.phoneNumber)
            expect(updateCustumer.imgProfile).toBe(customer.imgProfile);
            expect(updateCustumer.postalAddress.countryCode).toBe(customer.postalAddress.countryCode)
            expect(updateCustumer.postalAddress.region).toBe(customer.postalAddress.region)
            expect(updateCustumer.postalAddress.locality).toBe(customer.postalAddress.locality)
            expect(updateCustumer.postalAddress.postalCode).toBe(customer.postalAddress.postalCode)
            expect(updateCustumer.postalAddress.street).toBe(customer.postalAddress.street)
            expect(updateCustumer.postalAddress.number).toBe(customer.postalAddress.number)
        }, 2000)
    })

    describe('deleteCustomer()', () => {
        it('Request delete customer ById', async () => {
            const customerDeleted = await cr.deleteById(customer._id);
            expect(customerDeleted)
        }, 2000)
    })
})
