// Program to find even or odd no
const list=prompt('Enter elements separated by comma: ');
const arr=list.split(',');
console.log('The array elements are '+arr);
for(let i=0;i<1;i++) {
    if (arr[i]%2==0){
        console.log('Even no');
    }
    else {
        console.log('Odd no');
    }

}


//Program to find the frequent element
function findMostFrequent(arr) {
    const frequencyMap = {};
    let maxCount = 0;
    let mostFrequentItem;
  
    for (const item of arr) {
      frequencyMap[item] = (frequencyMap[item] || 0) + 1;
      
      if (frequencyMap[item] > maxCount) {
        maxCount = frequencyMap[item];
        mostFrequentItem = item;
      }
    }
  
    return mostFrequentItem;
  }
  
  const array = [3, 7, 3, 2, 3, 2, 7, 3, 7, 7, 7];
  console.log(findMostFrequent(array)); 


  //pgm to check no is odd or even
  for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }
  

  //sum of sqaure of nos
  function sumOfSquares(arr) {
    let sum = 0;
  
    for (const num of arr) {
      sum += num * num;
    }
  
    return sum;
  }
  

  const numbers = [1, 2, 3, 4, 5];
  console.log(sumOfSquares(numbers)); 
  