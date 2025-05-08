# TypeScript Interfaces vs. Types: Understanding the Differences

If you're learning TypeScript, you've probably come across interfaces and types. They seem similar, but they have key differences. Also, the keyof keyword can be a bit confusing at first. Let's break these concepts down in a beginner-friendly way!

# Interfaces vs. Types: What’s the Difference?

Both interfaces and types allow you to define custom shapes for objects, but they have some differences in usage and capabilities.

1. Declaration Syntax

# Interface: Uses the "interface" keyword.

        ```interface Person {
        name: string;
        age: number;
        }```

# Type: Uses the "type" keyword.

          ```type Person = {
          name: string;
          age: number;
            };```

2. Extending and Combining

# Interface: Can be extended using extends.

        ```interface Employee extends Person {
        jobTitle: string;
        }```

# Type: Uses intersection (&) to combine types.

        ```type Employee = Person & {
        jobTitle: string;
        };```

3. Adding New Fields (Declaration Merging)

# Interface: Can be re-opened to add new properties.

      ```interface Person { gender: string; }```

# Type: Cannot be re-opened after creation.

      ```type Person = { gender: string; };``` (Error if Person was already defined)

4. Usage with Unions and Primitives

# Interface: Can only describe object shapes.

# Type: Can define unions, primitives, and more.

      ```type Status = "active" | "inactive";
      type Age = number;```

# When to Use Which?

- Use "interface" for object shapes (especially in OOP).
- Use "type" for unions, tuples, or complex type logic.

# What is keyof in TypeScript? (With Example)

The keyof keyword is used to get all the keys of an object type as a union of strings.

- Example: Getting Keys of an Object

           ```interface User {
           id: number;
           name: string;
           email: string;
           }```

  `type UserKeys = keyof User; ("id" | "name" | "email")`

Now, "UserKeys" is a union type containing all the keys of User.

# Practical Use Case: Type-Safe Property Access

      ```function getProperty(obj: User, key: keyof User) {
      return obj[key];
      }```

      ```const user: User = { id: 1, name: "Alice", email: "alice@example.com" };

      console.log(getProperty(user, "name")); (It will Work.)
      console.log(getProperty(user, "age")); (It will give Error: "age" is not a valid key)```

Here, keyof ensures that only valid keys of User can be passed.

keyof helps extract keys from an object type, making code more type-safe.

Now you know the key differences between interface and type, as well as how keyof works!
