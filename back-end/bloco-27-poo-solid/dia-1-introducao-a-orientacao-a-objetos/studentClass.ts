class Student {
  private _registration: number;
  private _name: string;
  private _testGrade: number[];
  private _assignmentGrade: number[];

  constructor(registration: number, name: string) {
    this._registration = registration;
    this._name = name;
    this._testGrade = [];
    this._assignmentGrade = [];
  }

  get registration(): number {
    return this._registration;
  }

  set registration(value: number){
    this._registration = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string){
    if (value.length < 3) throw new Error('Insira um nome com pelo menos 3 caracteres');
    this._name = value;
  }

  get testGrade() {
    return this._testGrade;
  }

  set testGrade(value: number[]) {
    if (value.length > 4)throw new Error('São permitidas no máximo 4 notas de teste')
    this._testGrade = value;
  }

  get assignmentGrade() {
    return this._assignmentGrade;
  }

  set assignmentGrade(value: number[]) {
    if (value.length > 2)throw new Error('São permitidas no máximo 2 notas de trabalhos')
    this._assignmentGrade = value;
  }

  gradeSum() {
    const sum = (acc: number, curr: number) => acc += curr;
    const grades = [...this._assignmentGrade, ...this._testGrade];
    return grades.reduce(sum);
  }

  gradeAverage() {
    const divider = this._testGrade.length + this._assignmentGrade.length;
    return (this.gradeSum() / divider ).toFixed(2);
  }
}

const s1 = new Student(123456, "ava"); // instancia novo objeto
s1.name = "Ana"; // altera nome por meio do método set name
s1.testGrade = [10, 8, 5, 7];
s1.assignmentGrade = [9, 8]
console.log(s1);
console.log(s1.gradeSum());
console.log(s1.gradeAverage());

//Já os atributos criados com o modificador private só podem ser lidos e modificados dentro da classe. Isso significa que se você tentar utilizar a notação objeto.atributo do lado de fora das chaves que delimitam a criação da classe, você terá um erro do compilador.