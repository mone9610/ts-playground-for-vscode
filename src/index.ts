import { fizzBuzz, list } from "./utils";

list(1, 5).map(num => console.log(num))
list(1, 15).map(num => console.log(fizzBuzz(num)))
