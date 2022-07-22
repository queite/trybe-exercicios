
type Slices = 4 | 6 | 8;
type Ordinary = 'Calabresa' | 'Frango' | 'Pepperoni';
type Vegetarian = 'Marguerita' | 'Palmito' | 'Cogumelo';
type Sweet = 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow';

// Interfaces
interface Pizza {
  flavor : string,
  slices: Slices,
}

interface OrdinaryPizza extends Pizza {
  flavor: Ordinary,
}

interface VegetarianPizza extends Pizza {
  flavor: Vegetarian,
}

interface SweetPizza extends Pizza {
  flavor: Sweet,
}

// Pizzas
const calabresa: Pizza = {
  flavor: 'Calabresa',
  slices: 8
}
console.log(calabresa);

const marguerita: Pizza = {
  flavor: 'Marguerita',
  slices: 6
}
console.log(marguerita);

const nutela: Pizza = {
  flavor: 'Nutela',
  slices: 4
}
console.log(nutela);

const frango: OrdinaryPizza = {
  flavor: 'Frango',
  slices: 6
}
console.log(frango);

const cogumelo: VegetarianPizza = {
  flavor: 'Cogumelo',
  slices: 8
}
console.log(cogumelo);

const marshmallow: SweetPizza = {
  flavor: 'Marshmallow',
  slices: 4
}
console.log(marshmallow);