/*
Task 06: Task: Array Filtering and Mapping
Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.
*/

const peoples = [
    { name: "Alice", age: 25, gender: "female" },
    { name: "Bob", age: 30, gender: "male" },
    { name: "Charlie", age: 22, gender: "male" },
    { name: "Diana", age: 28, gender: "female" },
  ];
  
  const filterAndMap = (peoples) => {
    const filteredPeoples = [];
    peoples.forEach((people) => {
      if (people.gender === "male") {
        filteredPeoples.push(people.name);
      }
    });
    return filteredPeoples;
  };
  
  console.log(filterAndMap(peoples));
  