import { Cpf } from "../../../src/enterprise/entities/cpf.valueobject"

test("Retornar erro caso cpf tenha menos que 11 caracteres", () => {
    const exec = () => new Cpf('123');
    expect(exec).toThrow(Error);
})
test("Retornar erro caso cpf tenha mais que 11 caracteres", () => {
    const exec = () => new Cpf('123456789123');
    expect(exec).toThrow(Error);
})