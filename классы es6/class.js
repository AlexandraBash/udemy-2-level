
class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    calcArear(){
        return this.height*this.width;
    }
}////концепция


class ColorRectangleWithText extends Rectangle{
constructor(height, width, text, bgcolor){
    super(height, width);
    this.text = text;
    this.bgcolor = bgcolor;
}
    showMyProps(){
        console.log(`Текст: ${this.text}, цвет: ${this.bgcolor}`);
    }
}///наследование

const div = new ColorRectangleWithText(25, 10, 'Hello', 'red');
div.showMyProps();
console.log(div.calcArear());


// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);/////экземпляры


// console.log(square.calcArear());
// console.log(long.calcArear());


