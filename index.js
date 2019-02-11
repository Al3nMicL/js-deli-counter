// Task 1 - take a number funciton
let takeANumber = (line, name) => {
	if (Array.isArray(line)) {
  	line.push(name);	
  };

  let position = line.length; 
 
 return `Welcome, ${name}. You are number ${position} in line.`;
};

// Task 2 - now serving function
let nowServing = (katzDeliLine) => {
 if (katzDeliLine.length > 1) {
 	let person = katzDeliLine.shift();
 	return `Currently serving ${person}.`
 } else {
 	return "There is nobody waiting to be served!";
 };

};