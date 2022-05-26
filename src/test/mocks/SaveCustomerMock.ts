import { CustomerDTO } from "../../domain/dto/CustomerDTO";

export const saveCustomerMock: CustomerDTO = {
    id: "628d2f5a8ae6bf1f33722437",
    name: "Leonardo Nascimento",
    email: "pagaleve@teste.com",
    phoneNumber: "41995348888",
    registerDate: new Date("2022-05-24T16:17:46.916Z"),
    lastModifyDate: new Date("2022-05-24T16:17:46.916Z"),
    postalAddress: {
        countryCode: "+55",
        region: "BR",
        locality: "Curitiba - PR",
        postalCode: "81910-000",
        street: "Av. Maringá",
        number: 256
    }
}