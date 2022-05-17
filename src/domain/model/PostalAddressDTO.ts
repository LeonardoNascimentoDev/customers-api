import { Prop } from '@nestjs/mongoose';

export default class PostalAddressDTO {

    @Prop({  name: 'countryCode' , nullable: true })
    countryCode: string = null

    @Prop({  name: 'region' , nullable: true })
    region: string = null

    @Prop({  name: 'locality' , nullable: true })
    locality: string = null
    
    @Prop({  name: 'postalCode' , nullable: true })
    postalCode: string = null

    @Prop({  name: 'street' })
    street: string = null

    @Prop({  name: 'number' })
    number: number = null
}