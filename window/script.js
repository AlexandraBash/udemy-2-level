'use strict';

const box = document.querySelector('.box'),
btn = document.querySelector('button');


const width = box.scrollWidth;
const height = box.scrollHeight;
console.log(width, height);
//////инлайн стили в js перебивают стили cоmputed которые заданны в css
btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);
const style = window.getComputedStyle(box);
console.log(style.display);

console.log(document.documentElement.scrollTop);////количество пикселей которые пользователь уже отлистал

