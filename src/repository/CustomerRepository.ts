import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from '../domain/model/Customer';

@Injectable()
export class CustomerRepository {
    constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>
    ) {}
    
    async findAll(): Promise<Customer[]> {
        return this.customerModel.find().exec();
    }

    async create(payload: Customer) {
        const Customer = new this.customerModel(payload);
        return Customer.save();
    }

    async deleteById(id: string) {
        const custumerDeleted = this.customerModel.findOneAndDelete({ _id: id }).exec();
        return (await custumerDeleted).remove();
    }

    async update(id: string, customer: Customer): Promise<Customer> {
        return this.customerModel.findByIdAndUpdate(id, customer).exec();
    }

    async findByCustomerById(id: string): Promise<Customer> {
        return this.customerModel.findById(id).exec();
    }

    async findCustomer(payload: Customer): Promise<Customer> {
        const response = await this.customerModel.findOne({ email: payload.email });
        return response
    }

    async searchCustomer(query: Customer): Promise<Customer[]> {
        const qy = {}
        Object.getOwnPropertyNames(query).map(q => { qy[q] = { $regex: `.*${query[q]}.*` } }) 
        return this.customerModel.find(qy).exec();
    }

}
