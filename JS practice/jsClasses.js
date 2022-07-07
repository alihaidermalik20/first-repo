// creating a class that needs to have a constructor that is executed immediately

class Color {
    constructor (r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    // adding prototype to class color that can be used for any variable that was assigned this class
    innerRGB() {
        // deconstructing an object with r,g,b from this
        const { r, g, b } = this;
        // returns e.g 255, 255, 255
        return `${r}, ${g}, ${b}`;
    }
    // prototype that will be in every variable assigned the class of color
    rgb() {
        // calls on function innerRGB to give three numbers
        return `rgb(${this.innerRGB()})`;
    }
    // adds another parameter of a
    rgba(a = 1) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }
}

const color1 = new Color(255, 255, 255, 'white');
const color2 = new Color(0, 0, 0, 'black');
// not calling the function but checking that both variables have the same rgba function in prototype
console.log(color1.rgba === color2.rgba); // true
console.log(color1.rgba(0.5)); // rgba(255, 255, 255, 0.5)