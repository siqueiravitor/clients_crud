import { FindAllClientsUseCase } from "../../../../src/application/usecases/client/find-all-clients.usecase"
import { Client } from "../../../../src/enterprise/entities/client/client.entity";
import { ClientInMemoryGateway } from "../../../../src/infra/gateway/client/client-inmemory.gateway";

test("Retornar lista de clients", async () => {
    const clientGateway = new ClientInMemoryGateway();
    const findAllClientsUseCase = new FindAllClientsUseCase(clientGateway);

    const exepectedClients = [
        new Client("First", "Last", "test@email.com", "12345678912")
    ];
    const actualClients = await findAllClientsUseCase.execute();

    expect(actualClients).toEqual(exepectedClients);
})