let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
let indexOfPortfolio = menu.indexOf('Portfólio');
menu.push('Contato');

console.log(menuServices);
console.log(indexOfPortfolio);
console.log(menu)

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let elementos of names) {
    console.log(elementos);
}