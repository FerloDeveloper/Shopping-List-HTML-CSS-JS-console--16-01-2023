function addFood(k) {
	foodList.push(k);
	console.log("Lista della spesa");
	console.log(foodList);
}

function delFood(k) {
	if (foodList.includes(k)) {
		let indexFood = foodList.indexOf(k);
		foodList.splice(indexFood, 1);
		console.log(foodList);
	} else {
		console.log(`${k} non e' presente nella tua lista.`);
	}
}

function resume(k) {
	if (foodList.length == 0) {
		console.log("La tua lista e' vuota.");
	} else {
		console.log(`La tua lista per ora e': ${k}`);
	}
}

function clearFood() {
	foodList = [];

	if ((foodList = [])) {
		console.log("La tua lista e' vuota.");
	}

	console.log(foodList);
}

let cake = "Cake";
const donuts = "Donuts";
const hamburger = "Hamburger";
const sushi = "Sushi";
const pizza = "Pizza";
const salad = "Salad";
const spaghetti = "Spaghetti";
const taco = "Taco";
const tteok = "Tteok";
const bread = "Bread";

let foodList = [];
