import { IsNotEmpty, IsString } from 'class-validator'

export class PostalAddressDTO {

    @IsNotEmpty()
    @IsString()
    countryCode: string = null

    @IsNotEmpty()
    @IsString()
    region: string = null

    @IsNotEmpty()
    @IsString()
    locality: string = null

    @IsNotEmpty()
    @IsString()
    postalCode: string = null

    @IsNotEmpty()
    @IsString()
    street: string = null

    @IsNotEmpty()
    @IsString()
    number: number = null
} 

