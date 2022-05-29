import { CustomerDTO } from "../../domain/dto/CustomerDTO";

export const customerFindIdMock: CustomerDTO = {
    id: "6293b376328f798f40d70b3d",
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