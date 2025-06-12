// -----1----
// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду,
// починаючи від from і закінчуючи to.
// Зробіть два варіанти рішення.
// Використовуючи setInterval.
// Використовуючи вкладений setTimeout

//1

function printNumbers(from, to) {
	let num = from;
	setInterval(() => {
		if (num <= to) {
			console.log(num);
		} else {
			clearInterval(this);
		}
		num++;
	}, 0);
}

//2

function printNumbers(from, to) {
	setTimeout(() => {
		if (from <= to) {
			console.log(from);
			printNumbers(from + 1, to);
		}
	}, 0);
}

// -----2----
// Вбудована функція setTimeout використовує колбек-функції. Створіть
// альтернативу яка базується на промісах.
// Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через
// ms мілісекунд, так щоб ми могли додати до нього .then:
// ваш код
function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
delay(3000).then(() => console.log("3 seconds"));
