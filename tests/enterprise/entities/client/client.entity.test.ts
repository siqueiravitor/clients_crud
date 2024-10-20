import { Client } from "../../../../src/enterprise/entities/client/client.entity";

test("Retornar o nome como string", () => {
    const client = new Client("First", "Last", "email@email.com", "12345678912");
    expect(client.firstName).toBe("First");
});
test("Retornar o sobrenome como string", () => {
    const client = new Client("First", "Last", "email@email.com", "12345678912");
    expect(client.lastName).toBe("Last");
});
test("Retornar o email como string", () => {
    const client = new Client("First", "Last", "email@email.com", "12345678912");
    expect(client.email).toBe("email@email.com");
});
test("Retornar o cpf como string", () => {
    const client = new Client("First", "Last", "email@email.com", "12345678912");
    expect(client.cpf).toBe("12345678912");
});
test("Retornar erro quando primeiro nome possuir menos que 3 caracteres", () => {
    const exec = () => new Client("F", "Last", "email@email.com", "12345678912");
    expect(exec).toThrow(Error);
});
test("Retornar erro quando sobrenome possuir menos que 3 caracteres", () => {
    const exec = () => new Client("First", "L", "email@email.com", "12345678912");
    expect(exec).toThrow(Error);
});