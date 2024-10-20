import { FindAllClientsController } from "../../../../src/infra/controllers/client/find-all-clients.controller";
import { FindAllClientsUseCase } from "../../../../src/application/usecases/client/find-all-clients.usecase";
import { ClientInMemoryGateway } from "../../../../src/infra/gateway/client/client-inmemory.gateway";
import { HttpResponse } from "../../../../src/infra/web/http";
import { FindAllClientsOutputDto } from "../../../../src/infra/presenters/client/find-all-clients.presenter";

test("Retornar uma resposta http com status 200 e o body contendo uma lista de clientes", async () => {
    const gateway = new ClientInMemoryGateway();
    const usecase = new FindAllClientsUseCase(gateway);
    const controller = new FindAllClientsController(usecase);

    const expectedResponse: HttpResponse<FindAllClientsOutputDto[]> = {
        statusCode: 200,
        body: [
            {
                first_name: "First",
                last_name: "Last",
                email: "test@email.com",
                cpf: "12345678912"
            }
        ]
    }
    const actualResponse = await controller.execute({ body: {} });

    expect(actualResponse).toEqual(expectedResponse);
});