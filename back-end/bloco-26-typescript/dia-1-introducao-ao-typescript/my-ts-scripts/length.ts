import readline from "readline-sync";

const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function convert (value: number, baseUnit: string, convertionUnit: string){
  const baseUnitIndex = units.indexOf(baseUnit);
  const convertionUnitIndex = units.indexOf(convertionUnit);
  const exponent = convertionUnitIndex - baseUnitIndex;
  return value * Math.pow(10, exponent);
}

export default function exec () {
  const value = readline.question('Digite o valor a ser convertido: ');
  const baseUnitIndex = readline.keyInSelect(units, "Escolha a unidade atual ");
  const convertionUnitIndex = readline.keyInSelect(units, "Escolha a unidade de destino ");
  const baseUnit = units[baseUnitIndex];
  const convertionUnit = units[convertionUnitIndex];
  console.log(`${value}${baseUnit} é igual a ${convert(Number(value), baseUnit, convertionUnit)}${convertionUnit}.`)
}

exec()