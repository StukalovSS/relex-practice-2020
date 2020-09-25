export default function askCaptcha(punishment) {
	let a: number = Math.round( Math.random() * 100 ),
		b: number = Math.round( Math.random() * 100 ),
		operations: string[] = ['+', '-', '*'],
		operationIndex: number = Math.round( Math.random() * 3 - 0.5 ),
		userAnswer: number = +prompt( a + ' ' + operations[operationIndex] + ' ' + b ),
		res: number;

	switch (operationIndex) {
		case 0:
			res = a + b;
			break;
		case 1:
			res = a - b;
			break;
		case 2:
			res = a * b;
			break;
	}

	if (userAnswer !== res) {
		punishment();
    }
}
