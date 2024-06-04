import winesClient from "../gateways/winesClient";

class WinesUsecase {
  async handle(wine: string) {
    return await winesClient.getWine(wine);
  }
}

export default new WinesUsecase;