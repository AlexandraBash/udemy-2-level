
// const now = new Date(2021, 9, 27, 20);
// console.log(now);

// const now = new Date();
// console.log(now);//////выводит текущую дату


const now = new Date("2021-10-27");
// new Date.parse("2021-10-27");
console.log(now.setHours(24));
console.log(now);



// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getDate());
// console.log(now.getDay());////день недели начиная с воскресенья (0)
// console.log(now.getTimezoneOffset());////разница в минутах от часового пояса
// console.log(now.getTime());//количество милисекунд которое прошло от старта
 

let start = new Date();
for( let i = 0; i < 1000000; i++){
    let some = i ** 3;
}
let end = new Date();
alert(`Цикл отработал за ${end - start} миллисекунд`);


