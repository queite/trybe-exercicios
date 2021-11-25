let salary = 4000.00

if (salary <= 1556.94) {
    salary = salary - (salary * 0.08);
} else if (salary <= 2594.92) {
    salary = salary - (salary * 0.09);
} else if (salary <= 5189.82) {
    salary = salary - (salary * 0.11);
} else if (salary > 5189.82) {
    salary = salary - 570,88;
}
if (salary <= 1903.98){
    salary = salary;
} else if (salary <= 2826.65) {
    salary = salary - ((salary * 0.075) - 142.80);
} else if (salary <= 3751.05) {
    salary = salary - ((salary * 0.15) - 354.80);
} else if (salary <= 4664.68) {
    salary = salary - ((salary * 0.225) - 636,13);
} else if (salary > 4664.68) {
    salary = salary - ((salary * 0.275) - 869,36);
}
console.log(salary);