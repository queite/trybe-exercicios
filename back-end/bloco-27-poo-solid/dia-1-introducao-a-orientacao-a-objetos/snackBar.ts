import { it } from "node:test";

class Client {
  private _name: string;

  constructor(name: string) {
    this._name = name
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    if (name.length < 3) throw new Error('Insira um nome com pelo menos 3 caracteres');
    this._name = name;
  }
}

class Item {
  private _product: string;
  private _price: number;

  constructor(product: string, price: number) {
    this._product = product;
    this._price = price;
  }

  get product(): string {
    return this._product;
  }

  set product(value: string) {
    if (value.length < 3) throw new Error('Produtos devem possuir pelo menos 3 caracteres');
    this._product = value;
  }

  get price(): number {
    return this._price;
  }

  set price(price: number) {
    if (price < 0) throw new Error('Digite um preço válido');
    this._price = price;
  }
}

class Order {
  private _client: Client;
  private _items: Item[] = []; // =[] inicializa atribuindo array vazio
  private _paymentMethod: string;
  private _discount: number;

  constructor (client: Client, item: Item[]) {
    this._client = client;
    this._items = item;
  }

  get client(): Client {
    return this._client;
  }

  set client(client: Client) {
    this._client = client;
  }

  get items(): Item[] {
    return this._items;
  }

  set items(items: Item[]) {
    if (items.length < 0) throw new Error('Informe pelo menos um item');
    this._items = items;
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }

  set paymentMethod(payment: string) {
    this._paymentMethod = payment;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(discount: number) {
    if (discount < 0) throw new Error('Informe disconto válido');
    this._discount = discount;
  }

  total() {
    const sum = (acc: number, curr: Item) => acc += curr.price;
    return this.items.reduce(sum, 0);
  }

  totalWithDiscount() {
    return this.total() * (1 - this.discount);
  }
}

const c1 = new Client('Lovane');
let xis = new Item('Xis', 17);
let coca = new Item("Coca-cola", 6);
let o1 = new Order(c1, [xis, coca]);
o1.discount = 0.1;
console.log(o1);
console.log(o1.total());
console.log(o1.totalWithDiscount());