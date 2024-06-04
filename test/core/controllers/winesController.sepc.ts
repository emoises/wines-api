import winesController from "../../../src/core/controllers/winesController";
import { WineRequest } from "../../../main";

const mockGetWineUsecase = {
  handle: jest.fn(),
}
jest.mock("../../../src/core/usecase/getWineUsecase", () => mockGetWineUsecase);
const req = {
  params: {
    wine: "any_wine",
  },
} as WineRequest;

const res = {
  status: jest.fn(() => res),
  send: jest.fn(),
};
const sut = winesController;

describe('When controller is called', () => {
  beforeEach(() => {
    mockGetWineUsecase.handle.mockReturnValueOnce({
      id: 'any_id',
      name: 'any_name',
      harmonizationId: ['any']
    })
    sut.execute(req, res);
  })

  it('expect to mockGetWineUsecase to have been called correctly', () => {
    expect(mockGetWineUsecase.handle).toHaveBeenLastCalledWith('any_wine')
  })
})