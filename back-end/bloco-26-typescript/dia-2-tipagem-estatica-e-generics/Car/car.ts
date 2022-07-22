import Door from './enums/Door';
import Color from './enums/Color';
import Direction from './enums/Direction';

export default class Car {
  brand: string;
  color: Color;
  doors : number;

  constructor(brand: string, color: Color, doors: number) {
      this.brand  = brand;
      this.color  = color;
      this.doors  = doors;
  }

  honk(): void {
    console.log(`Buzinando`);
  };

  openTheDoor(door: Door): void {
    console.log(`Abrindo a porta ${door}.`)
  };

  closeTheDoor(door: Door): void {
    console.log(`Fechando a porta ${door}.`)
  };

  turnOn(): void {
    console.log(`Ligando.`)
  };

  turnOff(): void {
    console.log(`Desligando.`)
  };

  speedUp (): void {
    console.log(`Acelerando`)
  };

  speedDown(): void {
    console.log("Desacelerando")
  }

  stop(): void {
    console.log(`Parado`)
  }

  turn(direction: Direction): void {
    console.log(`Virando para ${direction}`)
  }
};