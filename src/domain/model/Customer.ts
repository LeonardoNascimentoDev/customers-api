import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import PostalAddressDTO from './PostalAddressDTO';

@Schema()
export class Customer {

     @Prop({ name: 'id' , nullable: true })
     id: string 

     @Prop({ name: 'name' , nullable: true })
     name: string 
     
     @Prop({ name: 'email' , nullable: true })
     email: string

     @Prop({ name: 'phoneNumber' , nullable: true })
     phoneNumber: string

     @Prop({ nullable: true })
     registerDate: Date

     @Prop({ nullable: true })
     lastModifyDate: Date

     @Prop({ type: PostalAddressDTO })
     postalAddress: PostalAddressDTO = new PostalAddressDTO()
}

export const CustomerSchema = SchemaFactory.createForClass(Customer)

