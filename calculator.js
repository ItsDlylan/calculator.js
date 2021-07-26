const readline = require('readline');
const { start } = require('repl');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let calculator = function () {
	rl.question(
		`What is the next operation you'd like to use? \nAddition, Subtraction, Multiplication, Division\nSquare root, Squared, Cubed, Exponential, Moding\n-----EXIT----- \n`,
		function (answer) {
			answer = answer.toLowerCase();
			if (
				answer == 'multiplication' ||
				answer == '*' ||
				answer == 'multiply'
			) {
				answer = 'multiply';
				rl.question(
					`Perfect what would you like to ${answer}? \nPlease type the first Number. \n`,
					function (a) {
						rl.question(
							`Insert the Second Number. \n`,
							function (b) {
								console.log(
									`------------------\n\nOutput: ${a} * ${b} = ${
										a * b
									}\n\n------------------ \n`,
								);
								calculator();
							},
						);
					},
				);
			} else if (
				answer == 'divide' ||
				answer == '/' ||
				answer == 'division'
			) {
				answer = 'divide';
				rl.question(
					`Perfect what would you like to ${answer}? \nPlease type the first Number. \n`,
					function (a) {
						rl.question(
							`Insert the Second Number. \n`,
							function (b) {
								console.log(
									`------------------\n\nOutput: ${a} / ${b} = ${
										a / b
									}\n\n------------------ \n`,
								);

								calculator();
							},
						);
					},
				);
			} else if (
				answer == 'addition' ||
				answer == '+' ||
				answer == 'add'
			) {
				answer = 'add';
				rl.question(
					`Perfect what would you like to ${answer}? \nPlease type the first Number. \n`,
					function (a) {
						rl.question(
							`Insert the Second Number. \n`,
							function (b) {
								ans = parseInt(a) + parseInt(b);
								console.log(
									`------------------\n\nOutput: ${a} + ${b} = ${ans}\n\n------------------ \n`,
								);

								calculator();
							},
						);
					},
				);
			} else if (
				answer == 'subtraction' ||
				answer == '-' ||
				answer == 'subtract' ||
				answer == 'minus'
			) {
				answer = 'subtract';
				rl.question(
					`Perfect what would you like to ${answer}? \nPlease type the first Number. \n`,
					function (a) {
						rl.question(
							`Insert the Second Number. \n`,
							function (b) {
								console.log(
									`------------------\n\nOutput: ${a} - ${b} = ${
										a - b
									}\n\n------------------ \n`,
								);

								calculator();
							},
						);
					},
				);
			} else if (answer == 'exponential' || answer == 'exponent') {
				answer = 'power';
				rl.question(
					`Perfect To what ${answer} would you like this number to be raised? \nPlease type the Power. \n`,
					function (a) {
						rl.question(
							`What number would you like to be raised to the power of ${a}\n`,
							function (b) {
								let ans = b;
								for (let i = 0; i < a - 1; i++) {
									ans *= b;
								}
								console.log(
									`------------------\n\nOutput: ${b}^${a} = ${ans}\n\n------------------ \n`,
								);
								calculator();
							},
						);
					},
				);
			} else if (
				answer == 'square' ||
				answer == 'squared' ||
				answer == '^'
			) {
				answer = 'Squared';
				rl.question(
					`Perfect what would you like be ${answer}? \nPlease type the first Number. \n`,
					function (a) {
						console.log(
							`------------------\n\nOutput: ${a}^2 = ${
								a * a
							}\n\n------------------ \n`,
						);
						calculator();
					},
				);
			} else if (
				answer == 'cube' ||
				answer == 'cubed' ||
				answer == '^3'
			) {
				answer = 'Cubed';
				rl.question(
					`Perfect what would you like be ${answer}? \nPlease type the first Number. \n`,
					function (a) {
						console.log(
							`------------------\n\nOutput: ${a}^3 = ${
								a * a * a
							}\n\n------------------ \n`,
						);
						calculator();
					},
				);
			} else if (
				answer == 'square root' ||
				answer == 'root' ||
				answer == '√'
			) {
				answer = 'square root';
				rl.question(
					`Perfect what would you like to ${answer}? \nPlease type it below. \n`,
					function (a) {
						console.log(
							`------------------\n\nOutput: The Square root of ${a} = ${Math.sqrt(
								`${a}`,
							)}\n\n------------------ \n`,
						);

						calculator();
					},
				);
			} else if (
				answer == '%' ||
				answer == 'mod' ||
				answer == 'remainder' ||
				answer == 'moding'
			) {
				answer = 'Remainder';
				rl.question(
					`Perfect! What would you like to find the ${answer} of? \nPlease type the first number now. \n`,
					function (a) {
						rl.question(
							`Insert the Second Number. \n`,
							function (b) {
								console.log(
									`------------------\n\nOutput: ${a} % ${b} = ${
										a % b
									}\n\n----------------- \n`,
								);

								calculator();
							},
						);
					},
				);
			} else if (
				answer == 'bye' ||
				answer == 'goodbye' ||
				answer == 'exit' ||
				answer == 'quit'
			) {
				console.log(
					'\nGoodbye! Check out this link your local web browser while you now have free time\nhttps://bit.ly/3BKztOc\n',
				);
			} else {
				console.log(
					`Sorry that wasn't one of the options... rebooting... `,
				);

				setTimeout(function () {
					console.log('.... rebooting ....');
				}, 500);
				setTimeout(function () {
					console.log('.... rebooting ....');
				}, 1000);
				setTimeout(function () {
					console.log('Insert Brand Name Here... Rebooted.');
				}, 1500);

				setTimeout(function () {
					begin();
				}, 1500);
			}
		},
	);
};

let begin = function () {
	rl.question(
		`Welcome to the calculator app, What operation would you like to use? \nAddition, Subtraction, Multiplication, Division\nSquare root, Squared, Cubed, Exponential, Moding\n-----EXIT----- \n`,
		function (answer) {
			answer = answer.toLowerCase();
			if (
				answer == 'multiplication' ||
				answer == '*' ||
				answer == 'multiply'
			) {
				answer = 'multiply';
				rl.question(
					`Perfect what would you like to ${answer}? \nPlease type the first Number. \n`,
					function (a) {
						rl.question(
							`Insert the Second Number. \n`,
							function (b) {
								console.log(
									`------------------\n\nOutput: ${a} * ${b} = ${
										a * b
									}\n\n------------------ \n`,
								);

								calculator();
							},
						);
					},
				);
			} else if (
				answer == 'divide' ||
				answer == '/' ||
				answer == 'division'
			) {
				answer = 'divide';
				rl.question(
					`Perfect what would you like to ${answer}? \nPlease type the first Number. \n`,
					function (a) {
						rl.question(
							`Insert the Second Number. \n`,
							function (b) {
								console.log(
									`------------------\n\nOutput: ${a} / ${b} = ${
										a / b
									}\n\n----------------- \n`,
								);

								calculator();
							},
						);
					},
				);
			} else if (
				answer == 'addition' ||
				answer == '+' ||
				answer == 'add'
			) {
				answer = 'add';
				rl.question(
					`Perfect what would you like to ${answer}? \nPlease type the first Number. \n`,
					function (a) {
						rl.question(
							`Insert the Second Number. \n`,
							function (b) {
								ans = parseInt(a) + parseInt(b);
								console.log(
									`------------------\n\nOutput: ${a} + ${b} = ${ans}\n\n------------------ \n`,
								);

								calculator();
							},
						);
					},
				);
			} else if (
				answer == 'subtraction' ||
				answer == '-' ||
				answer == 'subtract' ||
				answer == 'minus'
			) {
				answer = 'subtract';
				rl.question(
					`Perfect what would you like to ${answer}? \nPlease type the first Number. \n`,
					function (a) {
						rl.question(
							`Insert the Second Number. \n`,
							function (b) {
								console.log(
									`------------------\n\nOutput: ${a} - ${b} = ${
										a - b
									}\n\n------------------ \n`,
								);

								calculator();
							},
						);
					},
				);
			} else if (
				answer == 'square' ||
				answer == 'squared' ||
				answer == '^'
			) {
				answer = 'Squared';
				rl.question(
					`Perfect what would you like be ${answer}? \nPlease type the first Number. \n`,
					function (a) {
						console.log(
							`------------------\n\nOutput: ${a}^2 = ${
								a * a
							}\n\n------------------ \n`,
						);
						calculator();
					},
				);
			} else if (
				answer == 'cube' ||
				answer == 'cubed' ||
				answer == '^3'
			) {
				answer = 'Cubed';
				rl.question(
					`Perfect what would you like be ${answer}? \nPlease type the first Number. \n`,
					function (a) {
						console.log(
							`------------------\n\nOutput: ${a}^3 = ${
								a * a * a
							}\n\n------------------ \n`,
						);
						calculator();
					},
				);
			} else if (answer == 'exponential' || answer == 'exponent') {
				answer = 'power';
				rl.question(
					`Perfect To what ${answer} would you like this number to be raised? \nPlease type the Power. \n`,
					function (a) {
						rl.question(
							`What number would you like to be raised to the power of ${a}\n`,
							function (b) {
								let ans = b;
								for (let i = 0; i < a - 1; i++) {
									ans *= b;
								}
								console.log(
									`------------------\n\nOutput: ${b}^${a} = ${ans}\n\n------------------ \n`,
								);
								calculator();
							},
						);
					},
				);
			} else if (
				answer == 'square root' ||
				answer == 'root' ||
				answer == '√'
			) {
				answer = 'square root';
				rl.question(
					`Perfect what would you like to ${answer}? \nPlease type it below. \n`,
					function (a) {
						console.log(
							`------------------\n\nOutput: The Square root of ${a} = ${Math.sqrt(
								`${a}`,
							)}\n\n------------------ \n`,
						);

						calculator();
					},
				);
			} else if (
				answer == '%' ||
				answer == 'mod' ||
				answer == 'remainder' ||
				answer == 'moding'
			) {
				answer = 'Remainder';
				rl.question(
					`Perfect! What would you like to find the ${answer} of? \nPlease type the first number now. \n`,
					function (a) {
						rl.question(
							`Insert the Second Number. \n`,
							function (b) {
								console.log(
									`------------------\n\nOutput: ${a} % ${b} = ${
										a % b
									}\n\n----------------- \n`,
								);

								calculator();
							},
						);
					},
				);
			} else if (
				answer == 'bye' ||
				answer == 'goodbye' ||
				answer == 'exit' ||
				answer == 'quit'
			) {
				console.log(
					'\nGoodbye! Check out this link your local web browser while you now have free time\nhttps://bit.ly/3BKztOc\n',
				);
				rl.close();
			} else {
				console.log(
					`Sorry that wasn't one of the options... rebooting... `,
				);

				setTimeout(function () {
					console.log('.... rebooting ....');
				}, 500);
				setTimeout(function () {
					console.log('.... rebooting ....');
				}, 1000);
				setTimeout(function () {
					console.log('Insert Brand Name Here... Rebooted.');
				}, 1500);

				setTimeout(function () {
					begin();
				}, 1500);
			}
		},
	);
};
begin();
