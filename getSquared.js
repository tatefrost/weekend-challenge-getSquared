const array = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9]
const newArray = [];

const getSquared = arr => {
  for(let i = 0; i < arr.length; i++){
    newArray.push(arr[i] * arr[i]); 
  }
  return newArray
}

console.log(getSquared(array));