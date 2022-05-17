import { BadRequestException, Injectable } from '@nestjs/common'
// Import { buildObject } from 'objectypes'
import { Customer } from '../domain/model/Customer'
import { SaveCustomerDTO } from '../domain/dto/SaveCustomerDTO'
import { CustomerRepository } from '../repository/CustomerRepository'

@Injectable()
export default class CustomerService {

    constructor(private readonly repository: CustomerRepository) {}

    async getAll(): Promise<Customer[]> {
        const response = await this.repository.findAll();
        return response
    }

    async executeSave(payload: SaveCustomerDTO): Promise<Customer> {
        const customer = await this.repository.findCustomer(payload)

        if(!customer) {
            const date = new Date(new Date().valueOf() - new Date().getTimezoneOffset() * 60000)
            payload.registerDate = date
            payload.lastModifyDate = date
            const response = (await this.repository.create(
                payload
            )) as Customer
            return response
        }else{
            throw new BadRequestException('Customer already registered!')
        }   
    }

    async findByCustomerById(id: string): Promise<Customer> {
        const response = await this.repository.findByCustomerById(id);
        return response
    }

    async executeUpdate(id: string, payload: SaveCustomerDTO): Promise<Customer> {
        const date = new Date()
        payload.lastModifyDate = new Date(date.valueOf() - date.getTimezoneOffset() * 60000);
        const customer = await this.repository.update(id, payload) 
        return customer 
    }

    async deleteById(id: string): Promise<Customer> {
        const response = await this.repository.deleteById(id);
        return response
    }

    async searchCustomer(query: Customer): Promise<Customer[]> {
        const response = await this.repository.searchCustomer(query);
        return response
    }
}
