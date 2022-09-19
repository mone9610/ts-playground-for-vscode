export const fizzBuzz = (data: number): string => data % 15 === 0? 'FizzBuzz'
 : data % 3 === 0? 'Fizz'
 : data % 5 === 0? 'Buzz'
 : `${data}`
