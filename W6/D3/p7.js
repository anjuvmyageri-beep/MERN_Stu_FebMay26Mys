//Introduction to Buffers in NodeJS
// A buffer stores raw bytes
//Here we create
const textBuffer=Buffer.from("Anjali");

console.log("Buffer object:",textBuffer);
console.log("Buffer length in bytes:",textBuffer.length);
console.log("Byte at index 0",textBuffer[0]);
console.log("Byte at index 0",textBuffer[1]);

//Each character is stored internally as byte data
//For standard ASCII letters there will ba a equivalent code
//Buffer stores numeric value between 0 to 255