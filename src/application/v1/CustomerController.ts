import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { SaveCustomerDTO } from '../../domain/dto/SaveCustomerDTO';
import { Customer } from '../../domain/model/Customer';
import CustomerService from '../../service/CustomerService';

@Controller('api/v1/customers')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }

    @Get()
    async getAll(): Promise<Customer[]> {
        return this.customerService.getAll();
    }

    @Post('save')
    async saveCustomer(@Body() payload: SaveCustomerDTO): Promise<Customer> {
        return this.customerService.executeSave(payload);
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Customer> {
        return this.customerService.findByCustomerById(id);
    }

    @Put(':id')
    async atualizar(@Param('id') id: string, @Body() customerUpdated: SaveCustomerDTO): Promise<Customer> {
        return this.customerService.executeUpdate(id, customerUpdated);
    }

    @Delete(':id')
    async remover(@Param('id') id: string): Promise<Customer> {
        return this.customerService.deleteById(id);
    }

    @Get('find/byFilter')
    async getHello(@Query() query: Customer): Promise<Customer[]> {
        return this.customerService.searchCustomer(query);
    }
  
}
