function Calculator() {
	this.read = function () {
		this.num1 = Number(prompt("Number 1:"));
		this.num2 = Number(prompt("Number 2:"));
	};
	this.write = function () {
		console.log(`Number 1 is ${this.num1}`);
		console.log(`Number 2 is ${this.num2}`);
	};
	this.sum = function () {
		console.log("Summa this numbres is " + (this.num1 + this.num2));
	};
	this.mul = function () {
		console.log("Multiplication this numbers is " + this.num1 * this.num2);
	};
}

let calc = new Calculator();

calc.read();
calc.write();
calc.sum();
calc.mul();
