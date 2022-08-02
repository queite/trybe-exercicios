export default class Person {
  constructor(private _name: string, private _birthDate: Date) {
   this.name = _name;
   this.birthDate = _birthDate;
  }

  get name(): string {
    return this._name
  }

  set name(value: string) {
    if (value.length < 3) throw new Error('Insira um nome com pelo menos 3 caracteres');
    this._name = value
  }

  get birthDate(): Date {
    return this._birthDate
  }

  static age(birthDate: Date): number {
    const yearMiliseconds = 31536000000;
    const now = new Date().getTime();
    const age = (now - birthDate.getTime()) / yearMiliseconds;
    return Math.floor(age);
  }

  set birthDate(value: Date) {
    const now = new Date().getTime();

    if (value.getTime() > now) throw new Error('Data inválida. Datas futuras não permitidas');
    // console.log("age", Person.age(value))
    if (Person.age(value) > 120) throw new Error('Data inválida. Verifique a data de nascimento');

    this._birthDate = value
  }
}
