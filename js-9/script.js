// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

const button1 = document.querySelector("#divEmpty");
const div1 = document.querySelector("#text");

button1.addEventListener("click", () => {
	div1.style.display = "none";
});

// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

const button2 = document.querySelector("#button");

button2.addEventListener("click", function () {
	this.style.display = "none";
});

// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

const parrent = document.querySelector("#parrent");

parrent.addEventListener("click", function () {
	let children = this.children;
	if (children[0].hidden == false) {
		for (let i = 0; i < children.length; i++) {
			children[i].hidden = true;
		}
	} else {
		for (let i = 0; i < children.length; i++) {
			children[i].hidden = false;
		}
	}
});
