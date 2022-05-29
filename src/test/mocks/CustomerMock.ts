import { CustomerDTO } from "../../domain/dto/CustomerDTO";

export const customerMock: CustomerDTO = {
    id: "6293b3e626f288d16ae58f05",
    name: "Leonardo Nascimento",
    email: "pagaleve@teste.com" + new Date().getTime(),
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