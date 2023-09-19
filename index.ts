//Name: Syed Qalab Abbas Shah
// Roll No:	PIAIC160920
// Course:	Certified Web 3.0 and Metaverse Developer
// Email:	sqabbas1994@gmail.com

//20 Array methods in Typescript with examples
//1-==================PUSH=========================

let nums1: number[] = [1,2,3];
nums1.push(4);
console.log("20 Array methods in Typescript with examples")
console.log("1. Push =",nums1)

//2-==================POP=========================
let nums2: number[] = [1,2,3];
nums2.pop();
console.log("2. Pop = ",nums2)

//3-==================SHIFT=========================
let nums3: number[] = [1,2,3];
nums3.shift();
console.log("3. Shift = ",nums3)

//4-==================UNSHIFT=========================

let nums4: number[] = [1,2,3];
nums4.unshift(0);
console.log("4. UnShift = ",nums4)

//5-==================CONCAT=========================

let a : string [] = ['a','b'];
let b : string []= ['c','d'];
let c = a.concat (b);
console.log("5. Cancat =",c)

//6-==================JOIN=========================

let a1 : string [] = ['a','b','c'];
let b1 = a1.join('-')
console.log("6. Join =",b1)

//7-==================SLICE=========================

let a2 : string [] = ['a','b','c','d'];
let b2 = a2.slice(1,3)
console.log("7. Slice = ", b2)

//8-==================SPLICE=========================

 let sp : string [] = ['a','b','c'];
let sp1= sp.splice(1, 1, 'e'); 
console.log("8. Splice = ",sp)


//9-==================IndexOf=========================

let a3 : string [] = ['a','b','c','d'];
let b3 = a3.indexOf('c')
console.log("9. IndexOf = ", b3)

//10-==================Includes=========================

let a4 : string [] = ['a','b','c'];
let b4 = a4.includes('b')
console.log("10. Includes = ", b4)

//11-==================Find=========================

let numbers: number[] = [3, 5, 6, 8, 9];
let foundNumber = numbers.find((numbers) => numbers % 2 === 0 ); 
console.log("11. Find = ", foundNumber)

//12-==================FindIndex=========================

let numbers1: number[] = [3, 5, 6, 8, 9];
let foundIndex = numbers1.findIndex((numbers1) => numbers1 % 2 !== 0 ); 
console.log("12. FindIndex = ", foundIndex)

//13-==================Map=========================

let numMap: number[] = [3, 4, 8, 6];
let numMap1 = numMap.map((numMap) => numMap * 2 ); // 
console.log("13. Map = ", numMap1)

//14-==================Filter=========================

let numFilter: number[] = [1, 4, 7, 8];
let numFilter1 = numFilter.filter((numFilter) => numFilter % 2 === 0 ); 
console.log("14. Filter = ", numFilter1)

//15-==================Reduce=========================

let numReduce: number[] = [2, 4, 3, 7];
let sum = numReduce.reduce((acc, cur) => acc + cur, 0); 
console.log("15. Reduce = ", sum)

//16-==================Every=========================

let numEvery: number[] = [2, 3, 4, 5];
let numEvery1 = numEvery.every((numEvery)=> numEvery < 6); 
console.log("16. Every = ", numEvery1)

//17-==================Some=========================

let numSome: number[] = [3, 5, 6, 8];
let numSome1 = numSome.some((numSome)=> numSome > 6); 
console.log("17. Some = ", numSome1)

//18-==================Reverse=========================

let numReverse: number[] = [1, 2, 3, 4];
let numReverse1 = numReverse.reverse(); 
console.log("18. Reverse = ", numReverse1)

//19-==================Sort=========================

let strSort: string[] = ['d', 'a', 'b', 'c'];
let strSort1 = strSort.sort(); 
console.log("19. Sort = ", strSort1)


//20-==================Fill=========================
let array = [1, 2, 3, 4, 5];
array.fill(0, 2, 4);
console.log("20. Fill = ", array); 
array.fill(6, 1);
console.log(array); 
