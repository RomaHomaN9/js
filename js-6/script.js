// Створити телефонну книгу
// створити початковий клас Abonent, де зберігатимуться ім * я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

class Abonent {
	constructor(name, tel) {
		this.name = name;
		this.tel = tel;
	}

	set tel_set(tel) {
		this.tel = tel;
	}

	get date() {
		console.group(this.name);
		console.log(`My name is : ${this.name}, my telephon is: ${this.tel}`);
		console.groupEnd();
	}
}

let Roman = new Abonent("Roman", "+380501234567");
let Bohdan = new Abonent("Bohdan", "+380500000007");
let Nazar = new Abonent("Nazar", "zabralu telefon");

Roman.date;
Bohdan.date;
Nazar.date;
