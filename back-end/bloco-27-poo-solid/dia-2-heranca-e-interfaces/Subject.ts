export default class Subject {
  constructor(private _name: string) {}

  get name(): string {
    return this._name
  }

  set name(name: string) {
    if (name.length < 3) throw new Error('Insira um nome com pelo menos 3 caracteres');
    this._name = name;
  }
}