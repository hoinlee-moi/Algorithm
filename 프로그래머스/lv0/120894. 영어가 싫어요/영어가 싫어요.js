function solution(numbers) {
  const number = {
      0 :"zero", 1: "one", 2: "two", 3: "three", 4: "four", 
      5: "five", 6: "six", 7: "seven", 8: "eight", 9:"nine"
  }
  for(let i =0; i<Object.values(number).length; i++) {
      if(numbers.includes(Object.values(number)[i])){
          const oldValue = new RegExp(Object.values(number)[i], "gi")
      numbers = numbers.replace(oldValue , i)
      }
  }
  return Number(numbers)
}