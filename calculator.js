const readline = require('readline');
const { start } = require('repl');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let calculator = function () {
	rl.question(
		`What is the next operation you'd like to use? multiplication, division, square root, addition, subtraction, goodbye \n`,
		function (answer) {
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
									`Output: ${a} * ${b} = ${a * b} \n`,
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
									`Output: ${a} / ${b} = ${a / b} \n`,
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
								console.log(`Output: ${a} + ${b} = ${ans} \n`);

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
									`Output: ${a} - ${b} = ${a - b} \n`,
								);

								calculator();
							},
						);
					},
				);
			} else if (answer == 'square root' || answer == 'root') {
				answer = 'square root';
				rl.question(
					`Perfect what would you like to ${answer}? \nPlease type it below. \n`,
					function (a) {
						console.log(
							`Output: The Square root of ${a} = ${Math.sqrt(
								`${a}`,
							)} \n`,
						);

						calculator();
					},
				);
			} else if (answer == 'bye' || answer == 'goodbye') {
				console.log(
					'Goodbye! Check out this link your local web browser while you now have free time\nhttps://bit.ly/3BKztOc',
				);
			} else {
				console.log(
					`Sorry that wasn't one of the options, rebooting... `,
				);

				setTimeout(function () {
					console.log('.... rebooting ...');
				}, 500);
				setTimeout(function () {
					console.log('.... rebooting ...');
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
		`Welcome to the calculator app, What operation would you like to use? multiplication, division, square root, addition, subtraction \n`,
		function (answer) {
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
									`Output: ${a} * ${b} = ${a * b} \n`,
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
									`Output: ${a} / ${b} = ${a / b} \n`,
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
								console.log(`Output: ${a} + ${b} = ${ans} \n`);

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
									`Output: ${a} - ${b} = ${a - b} \n`,
								);

								calculator();
							},
						);
					},
				);
			} else if (answer == 'square root' || answer == 'root') {
				answer = 'square root';
				rl.question(
					`Perfect what would you like to ${answer}? \nPlease type it below. \n`,
					function (a) {
						console.log(
							`Output: The Square root of ${a} = ${Math.sqrt(
								`${a}`,
							)} \n`,
						);

						calculator();
					},
				);
			} else if (answer == 'bye' || answer == 'goodbye') {
				console.log(
					'Goodbye! Check out this link your local web browser while you now have free time\nhttps://bit.ly/3BKztOc',
				);
			} else {
				console.log(
					`Sorry that wasn't one of the options, rebooting... `,
				);

				setTimeout(function () {
					console.log('.... rebooting ...');
				}, 500);
				setTimeout(function () {
					console.log('.... rebooting ...');
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
