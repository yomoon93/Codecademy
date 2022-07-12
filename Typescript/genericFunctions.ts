
// this function is telling us whats coming out 
//it has any type and it has two values 
// and what your getting out is an array that is any type 
function getFilled<T>(value:T, n:number): T[]{
   // its a method that creates an array contructor
   // it takes two things in a number or undefined
   // the fill tells us what we are filling the array with
   //fill takes in 3 things a any , start , and end
    return Array(n).fill(value)
}

// to start each one should have an array bc thats what we are creating with this fumction
// the type can be whatever just remember that the parameters will  always be there
// the third thing to notice is that the array at the end creates one but more can be created 

// the function helps with making a generic array 

   let stringArray: string[];
   let numberArray: number[];
   let personArray: {name: string, age: number}[]
   let coordinateArray: [number, number][];


   stringArray = getFilled<string>('hi',6)
   numberArray = getFilled<number>(9,6)
   personArray =  getFilled<{name:string,age:number}>({name:'JJ.Moon', age:24},6)
   coordinateArray = getFilled<[number, number]>([3,4],6)


   console.log(stringArray)
   console.log(numberArray)
   console.log(personArray)
   console.log(coordinateArray)