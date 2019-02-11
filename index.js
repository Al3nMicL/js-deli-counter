// Task 1 - take a number funciton
let takeANumber = (line, name) => {
	if (Array.isArray(line)) {
  	line.push(name);	
  };
  
  let position = line.length; 
 
 return `Welcome, ${name}. You are number ${position} in line.`;
};
