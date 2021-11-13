const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?(sqrt for square root) ", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	switch (mathSymbol) {
		case '+':
		  console.log("The answer is: " + (num1 + num2));
		  break;
		case '-':
		  console.log("The answer is: " + (num1 - num2));
		  break;
		case '*':
		  console.log("The answer is: " + (num1 * num2));
		  break;
		case '/':
		  console.log("The answer is: " + (num1 / num2));
		  break;
		case 'sqrt':
			console.log("The answer is: " + Math.sqrt(num1));
			break;
		default:
		  console.log("Sorry, something went wrong. Please try again.")
		  break;
	}


	// This line closes the connection to the command line interface.
	reader.close()

});
