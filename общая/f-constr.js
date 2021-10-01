
// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log(`Hello ${this.name}`);
//     };////метод с функцией вывода обращения в консоль

// };/////функция - конструктор для создания обьектов с множеством копий


// User.prototype.exit = function(name){
//     console.log(`Пользователь ${this.name} ушел`);////прототипное наследование от обьекта для всех детей сразу
// }

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);

// ivan.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);


// ////////////    THIS   ///////////////

// function showThis(a, b){
//     console.log(this);
//     function sum(){
//         return a + b;
//     }
//     console.log(sum);
// }
// showThis(4, 5);///////контекст ссылается на глобальный обьект window


// const obj = {
// a: 20,
// b: 15,
// sum: function(){
//     console.log(this);
// }
// };
// obj.sum();




// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
// };
// let ivan = new User ("Ivan", 23);



// function sayName(surname){
//     console.log(this);
//     console.log(this.name + surname);
// };
// const user = {
//     name: 'Jih'
// };
// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num){
//     return this*num;
// }
// const double =  count.bind(2);///
// console.log(double(3));
// console.log(double(13));


// const btn = document.querySelector('button');
// btn.addEventListener('click', function(){
//     console.log(this);
// });//////////когда у нас обработчик события который идет как колбек функция идет в классическом режиме
////в таком случае - контекст вызова будет сам элемент на котором произошло событие

// const obj = {
//     num: 5,
//     sayNumber: function(){
//         const say = ()=> {
//             console.log(this);
//         };
//         say();
//     }
// };
// obj.sayNumber();

// const double = (a) => a * 2;//// если тело функции помещается в одну строку то мы можем ее записать таким образом. без return


const btn = document.querySelector('button');
btn.addEventListener('click', function(){
  this.style.backgroundColor = 'red';
});














