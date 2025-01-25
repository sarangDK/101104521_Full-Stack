console.log("Week01 - Buffer Examples")

// Create a Buffer from String data

/*
A buffer is a space in memory (typically RAM) that stores binary data. 
In Node.js, we can access these spaces of memory with the built-in Buffer class.
Buffers store a sequence of integers, similar to an array in JavaScript. 
Unlike arrays, you cannot change the size of a buffer once it is created.
*/
let buf1 = Buffer.from("Hello World") 

console.log(buf1);
console.log(`buf1: ${buf1}`); // Shows the String
console.log(`5 plus 6 is ${5 + 6}`);

console.log(buf1.toString());
console.log(`Buffer in JSON format : ${buf1.toJSON()}`);
console.log(`Buffer in JSON format : ${JSON.stringify(buf1)}`);    // ASCII CODE (Quicker way to see the buffer)
console.log(`Buffer length : ${buf1.length}`);

console.log("********************************************************")
console.log("********************************************************")

// Task - Write a loop to iterate over the buffer 
// Show the value of element

console.log(`buf1[0] : ${buf1[0]}`); // ASCII value of H
console.log(`buf1[1] : ${buf1[1]}`); // ASCII value of e

for (let i = 0; i < buf1.length; i++) {
    console.log(`buf1[${i}] : ${buf1[i]} + ${String.fromCharCode(buf1[i])}`);
    // String.fromCharCode() method returns a string created by using the specified sequence of Unicode values.
}

console.log(`Buffer in String format: ${buf1.toString()}`); // Hello World
console.log(`Buffer in JSON format: ${JSON.stringify(buf1.toJSON())}`); // Hello World
console.log(`Buffer in Hex format: ${buf1.toString("hex")}`); // Hello World
console.log(`Buffer in UTF-8 format: ${buf1.toString("utf-8")}`); // Hello World
console.log(`Buffer in UTF-16le format: ${buf1.toString("utf-16le")}`); // Hello World

console.log("********************************************************")
console.log("********************************************************")




buf2= Buffer.from("🫠🫠🫠🫠")


console.log(`Buffer in String format: ${buf2.toString()}`); // Hello World
console.log(`Buffer in JSON format: ${JSON.stringify(buf2.toJSON())}`); // Hello World
console.log(`Buffer in Hex format: ${buf2.toString("hex")}`); // Hello World
console.log(`Buffer in UTF-8 format: ${buf2.toString("utf-8")}`); // Hello World
console.log(`Buffer in UTF-16le format: ${buf2.toString("utf-16le")}`); // Hello World

console.log('\nBuffer.alloc() function..........')


// allocate size of the buffer when creating it 
let buf3 = Buffer.alloc(10);
console.log(buf3);
console.log(`buf3: ${buf3}`); // Shows the String


buf3.write('J',3)
buf3.write('❤️',6)
buf3.write('K',8)
buf3.write("COP", 0)
// ---- these ways wont work ----
// buf3[3] = 'J'
// buf3[6] = '❤️'
// buf3[8] ='K'
console.log(buf3);
console.log(`buf3: ${buf3}`); // Shows the String

console.log("********************************************************")
console.log("********************************************************")
console.log("Buffer.concat() function..........")




// Buffer.concat
let buf4 = Buffer.concat([buf1, buf3])

console.log(`buf1: ${buf1}`);
console.log(`buf3: ${buf3}`);
console.log(`buf4: ${buf4}`); // Shows the String

// Buffer.copy() is used to copy the data from one buffer to another buffer

buf2.copy(buf4)

console.log(`buf2: ${buf2}`);
console.log(`buf3: ${buf3}`); // Shows the String

// Buffer.compare() is used to compare two buffers
// will return 0 if same 
// non zero value otherwise

let output = Buffer.compare(buf1, buf3)
console.log(buf1)
console.log(buf3)
console.log(`buf2 and buf3 are same ? : ${output}` )

buf2 = Buffer.from("Hello")
buf3= Buffer.from("Hello")
output = Buffer.compare(buf2, buf3)
console.log(` buf2: ${buf2} and  buf3: ${buf3} are same ? : ${output}` )
