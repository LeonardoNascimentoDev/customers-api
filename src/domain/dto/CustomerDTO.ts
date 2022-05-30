import { Type } from 'class-transformer'
import { PostalAddressDTO } from "./PostalAddressDTO"
import { IsEmail, IsNotEmpty, IsString, ValidateNested } from 'class-validator'

export class CustomerDTO {

    @IsNotEmpty()
    @IsString()
    id: string = null

    @IsNotEmpty()
    @IsString()
    name: string = null

    @IsEmail()
    @IsNotEmpty()
    email: string = null

    @IsNotEmpty()
    @IsString()
    phoneNumber: string = null

    @IsString()
    imgProfile: string = null

    registerDate: Date = null

    lastModifyDate: Date = null

    @ValidateNested()
    @Type(() => PostalAddressDTO)
    postalAddress: PostalAddressDTO
}