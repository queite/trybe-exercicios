const changeString = frase => `A coisa é ${frase}. Que coisa!`;

const skills = ['ES6', 'JavaScript', 'HTML', 'DOM', 'CSS'];

const final = function1 => `${function1} ${skills.sort()}`;

console.log(final(changeString('estudar')));