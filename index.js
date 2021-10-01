// Câu 1: 
// 1. In JavaScript, in what cases, you will get the SyntaxError telling you that some of your variables have invalid names? Can you give 3 different examples of invalid variable names?
// - Tên bắt đầu bằng số VD: 3qa
// - Tên bao gồm các ký hiệu đặc biệt (trừ $ và _) VD: &study
// - Tên được sử dụng bởi chính ngôn ngữ đó VD: let, return
// 2. In JavaScript, how to check a variable data types?
// use typeof 


// Câu 2:
// 1-b
// 2-a
// 3-e
// 4-c

// Câu 3: 
// a, A String named message with value ‘Coding is great’, then use console.log to print it out
// let message = 'Coding is great';
// console.log(message);
// // b, A Number named studentCount with value 0, then use console.log to  print it out
// let studentCount = 0;
// console.log(studentCount);

// // Câu 4:
// // a, Change message into ‘Coding might not be easy, but still great’, then use console.log to  print it out
// message = 'Coding might not be easy, but still great';
// console.log(message);
// // b, Change studentCount into total of the students in our class right now (16 for example), then use console.log to print it out
// studentCount = 30;
// console.log(studentCount);
// c, After completing exercise a, change the message into lowercase, then use console.log to print it out
// message = message.toLowerCase();
// console.log(message);
// d, After completing exercise b, increase studentCount by 1, then use console.log to print it out
// studentCount += 1;
// console.log(studentCount);

// Câu 5: Write a script to show user a nice message
// alert('You look beautiful today');

// Câu 6: Write a script to ask user about their name, and then say hi to them, say something nice to them if you want :)
// let name = prompt('Hi there, your name please?');
// console.log(name);
// alert (`Hi ${name}`);

// Câu 7: Write a script that ask 2 things from users, their first name and last name, then greet them with their full name
// let firstname = prompt('Enter your first name');
// let lastname = prompt('Enter your last name');
// alert (`Hi ${lastname} ${firstname}`);

// Câu 8: Write a script that calculates the area of a square
// let length = prompt('Enter the length of a square');
// alert (`The area of a square is : ${length*length}`);

// Câu 9: Write a script that calculates the area of a circle
let radius = prompt('Enter the radius of a circle');
alert (`The area of a circle is : ${radius*2*3.14}`);

// CÂU 10: Write a script that converts Celsius (0C) into Fahrenheit (0F)
let celsius = Number(prompt('Enter the temperature in Celsius'));
let fahrenheit = 9/5 * celsius + 32;
alert (`${celsius} (C) = ${fahrenheit} (F)`);

