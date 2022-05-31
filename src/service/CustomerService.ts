import { BadRequestException, Injectable } from '@nestjs/common'
import { Customer } from '../domain/model/Customer'
import { CustomerDTO } from '../domain/dto/CustomerDTO'
import { CustomerRepository } from '../repository/CustomerRepository'
const S3 = require('../infra/s3');

@Injectable()
export default class CustomerService {

    constructor(private readonly repository: CustomerRepository) { }

    async getAll(): Promise<Customer[]> {
        const response = await this.repository.findAll();
        return response
    }

    async executeSave(payload: CustomerDTO): Promise<Customer> {
        const customer = await this.repository.findCustomer(payload)

        if (!customer) {
            const format = payload.imgProfile.substring(
                payload.imgProfile.indexOf(':') + 1,
                payload.imgProfile.indexOf(';base64'),
            );
            const s3 = new S3();
            const keyName = payload.name + '_' + new Date().getTime();
            const base64result = payload.imgProfile.substr(payload.imgProfile.indexOf(',') + 1);
            const buff = Buffer.from(base64result, 'base64');
            const params = {
                Bucket: process.env.BUCKET_NAME,
                Body: buff,
                Key: `updados/${keyName}​​​​​​​​`,
                ContentType: format,
            };
            await s3.putObject(params);
            const date = new Date(new Date().valueOf() - new Date().getTimezoneOffset() * 60000)
            payload.registerDate = date
            payload.lastModifyDate = date
            const response = (await this.repository.create(
                payload
            )) as Customer
            return response
        } else {
            throw new BadRequestException('Customer already registered!')
        }
    }

    async findByCustomerById(id: string): Promise<Customer> {
        const response = await this.repository.findByCustomerById(id);
        return response
    }

    async executeUpdate(id: string, payload: CustomerDTO): Promise<Customer> {
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
