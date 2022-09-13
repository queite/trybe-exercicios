// ./CepService.ts
import FooCepAPI from './FooCepAPI';
import IFooCepAPI from './interfaces/IFooCepAPI';

class CepService {
  private readonly cepApi: FooCepAPI;

  constructor(cepApi: IFooCepAPI) {
    this.cepApi = cepApi;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;