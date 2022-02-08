const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Adicionando o turno da noite no objeto - lesson2;
const nightTurn = (modifyObj, newKey, newValue) => modifyObj[newKey] = newValue;
nightTurn(lesson2, 'turno', 'noite');
console.log(lesson2);

// Obtendo um array com as chaves de um objeto;
const keys = (obj) => Object.keys(obj);
console.log(keys(lesson1));

// Retorna o tamanho do objeto;
const lengthObj = (obj) => keys(obj).length;
console.log(`Tamanho do objeto: ${lengthObj(lesson3)}`);

// Retorna os valores de um objeto;
const valueObj = (obj) => Object.values(obj);
console.log(valueObj(lesson1));

// Agrupa os objetos dentro de um objeto;
const allLessons = () => {
  return {lesson1, lesson2, lesson3};
}
console.log(allLessons()); 

// Total de estudantes em tosas as aulas;
const allStudents = () => lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes;

console.log(`Número total de estudantes: ${allStudents()}`);

// Procurar o index do usuário;
const search = (obj, index) => {
  const arrayObj = Object.keys(obj);
  const positionName = arrayObj[index];
  return obj[positionName];
}

console.log(search(lesson1, 1));

// Busca uma chave e seu valor e retorna true caso haja e false caso não haja;
const check = (obj, key, value) => {
  const entries = Object.entries(obj);
  for (const verification of entries) {
    if(key  === verification[0] && value === verification [1])
    return true
  }
  return false;
}

console.log(check(lesson1, 'materia', 'Matemática'));