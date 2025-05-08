function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}

// const result = formatString("Hello");
// const result2 = formatString("Hello", true);
// const result3 = formatString("Hello", false);
// console.log(result, result2, result3);


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
  return items.filter(item => item.rating >= 4);
}

// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 3.99 },
//   { title: "Book D", rating: 4.0 },
//   { title: "Book E", rating: 5.0 },
// ];
// const filteredBooks = filterByRating(books);
// console.log(filteredBooks);


function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  arrays.forEach(arr => result.push(...arr));
  return result;
}

// const result1 = concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
// const result2 = concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]
// console.log(result1, result2)

class Vehicle {
  constructor(private make: string, private year: number) {}

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}

// const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo())
// console.log(myCar.getModel())

function processValue(value: string | number): number {
  if ( typeof value === 'string'){
    return value.length;
  }
  else{
    return value*2
  }
}

// const result1=processValue("hello"); // Output: 5
// const result2=processValue(10);      // Output: 20
// console.log(result1, result2)


interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }

  const mostExpensiveProduct = [...products].sort((a, b) => b.price - a.price);
  return mostExpensiveProduct[0];
  }

// const products = [
//   { name: "Pen", price: 1110 },
//   { name: "Notebook", price: 225 },
//   { name: "Bag", price: 250 }
// ];

// const result = getMostExpensiveProduct(products);  
// console.log(result)


enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string{
 if(day === Day.Saturday || day === Day.Sunday){
  return "Weekend";
 }
 else{
  return "WeekDay";
 }
 
}

// const weekDay = getDayType(Day.Monday);   // Output: "Weekday"
// const weekend = getDayType(Day.Sunday);   // Output: "Weekend"
// console.log(weekDay, weekend)



async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    throw new Error("Negative number not allowed");
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n * n);
    }, 1000);
  });
}

// squareAsync(4)
//   .then(result=>console.log(result))
//   .catch(error=>console.log(error)) // Output after 1s: 16

// squareAsync(-3)
//   .then(result=>console.log(result))
//   .catch(error=>console.log(error))  // Output: Error: Negative number not allowed