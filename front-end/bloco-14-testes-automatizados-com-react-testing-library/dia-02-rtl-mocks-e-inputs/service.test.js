const service = require('./service');
// let { randomNumber } = service;

afterEach(() => jest.clearAllMocks());

// Exercise 1
it('testa função random', () => {
  randomNumber = jest.fn().mockReturnValue(10);

  expect(randomNumber()).toBe(10);
  expect(randomNumber).toHaveBeenCalled(); // não passa se for colocada primeiro
  expect(randomNumber).toHaveBeenCalledTimes(1);
})
// Exercise 2
it('testa nova implementação', () => { 
  randomNumber.mockImplementation((a,b) => a / b);
  
  expect(randomNumber(10,5)).toBe(2);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
})

// Exercise 4
it('testa mock da primeira função com nova implementação', () => {
  const mockStringToUpperCase = jest.spyOn(service, "stringToUpperCase").mockImplementation((string) => string.toLowerCase());

  expect(mockStringToUpperCase('FAIXA')).toBe('faixa')
  expect(mockStringToUpperCase).toHaveBeenCalled()
  expect(mockStringToUpperCase).toHaveBeenCalledWith('FAIXA');
})

it('testa implementação inicial da primeira função novamente', () => {
  service.stringToUpperCase.mockRestore();

  expect(service.stringToUpperCase('texto')).toBe('TEXTO');
})

describe('Testa fetchDog', () => {
  // service.fetchDog = jest.fn();

  it('Promisse resolvida', async () => {
    service.fetchDog.mockResolvedValue('request sucess')

    service.fetchDog();
    expect(service.fetchDog).toHaveBeenCalled();
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
    await expect(service.fetchDog()).resolves.toBe('request sucess');
  });

  it('Promisse rejeitada', async () => {
    service.fetchDog.mockRejectedValue('request failed');

    expect(service.fetchDog).toHaveBeenCalledTimes(0);
    await expect(service.fetchDog()).rejects.toMatch('request failed');
    expect(service.fetchDog).toHaveBeenCalled();
  });

})
