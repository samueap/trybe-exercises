/**
 * Parte II
 * Para os exercícios a seguir use os seguintes objetos.
 */

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

/**
 * 1. Crie uma função para adicionar o turno da manhã na lesson2. 
 * Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, 
 * a chave que deverá ser adicionada e o valor dela.
 */

console.log(lesson2);

lesson2.turno = 'manhã';
console.log(lesson2);

/**
 * 2. Crie uma função para listar as keys de um objeto.
 * Essa função deve receber um objeto como parâmetro.
 */

const listLesson = (lesson) => {
  const arrayOfLesson = Object.keys(lesson);
  for(i in arrayOfLesson){
    console.log(`${arrayOfLesson[i]}`);
  }
};

console.log('Key_lesson1');
listLesson(lesson1);

console.log('key_lesson2');
listLesson(lesson2);

console.log('key_lesson3');
listLesson(lesson3);

/* 
*3. Crie uma função para mostrar o tamanho de um objeto. 
 */

const tamanhoLesson = (student) => Object.keys(lesson);

console.log('lesson1');
tamanhoLesson(lesson1);

console.log('lesson2');
tamanhoLesson(lesson2);

console.log('lesson3');
tamanhoLesson(lesson3);

/**
 * 4. Crie uma função para listar os valores de um objeto.
 * Essa função deve receber um objeto como parâmetro.
 */

const listLessonValues = (lesson) => Object.values(lesson);

console.log(listLessonValues(lesson1);

console.log(listLessonValues(lesson2);

console.log(listLessonValues(lesson3);