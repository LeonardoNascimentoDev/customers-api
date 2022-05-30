import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerController } from './application/v1/CustomerController';
import { Customer, CustomerSchema } from './domain/model/Customer';
import { CustomerRepository } from './repository/CustomerRepository';
import CustomerService from './service/CustomerService';
require('dotenv').config();

@Module({
    imports: [HttpModule,
        MongooseModule.forRoot('mongodb+srv://leo:leo1995@projeto-node.yn1uq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            dbName: 'customers-db'
        }),
        MongooseModule.forFeature([
            {
                name: Customer.name,
                schema: CustomerSchema,
                collection: "customers"
            }
        ])],
    controllers: [CustomerController],
    providers: [CustomerService, CustomerRepository]
})
export class AppModule { }
