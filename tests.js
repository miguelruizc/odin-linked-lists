import {LinkedList} from './linked-lists.js';

// Initialize the LinkedList
let list = new LinkedList();

// Test append method
console.log("Test append method---------------------------");
list.append(1); // [1]
console.log("Test: list.append(1); // [1]");
console.log("List: " + list.toString() + '\n');

list.append(2); // [1, 2]
console.log("Test: list.append(2); // [1, 2]");
console.log("List: " + list.toString() + '\n');

list.append(3); // [1, 2, 3]
console.log("Test: list.append(3); // [1, 2, 3]");
console.log("List: " + list.toString() + '\n');

// Test prepend method
console.log("Test prepend method--------------------------");
list.prepend(0); // [0, 1, 2, 3]
console.log("Test: list.prepend(0); // [0, 1, 2, 3]");
console.log("List: " + list.toString() + '\n');

list.prepend(-1); // [-1, 0, 1, 2, 3]
console.log("Test: list.prepend(-1); // [-1, 0, 1, 2, 3]");
console.log("List: " + list.toString() + '\n');

// Test at method
console.log("Test at method-------------------------------");
console.log("Test: list.at(0).value === -1; // true");
console.log("Result: " + (list.at(0).value === -1) + '\n');

console.log("Test: list.at(2).value === 1; // true");
console.log("Result: " + (list.at(2).value === 1) + '\n');

// Test pop method
console.log("Test pop method------------------------------");
list.pop(); // [-1, 0, 1, 2]
console.log("Test: list.pop(); // [-1, 0, 1, 2]");
console.log("List: " + list.toString() + '\n');

list.pop(); // [-1, 0, 1]
console.log("Test: list.pop(); // [-1, 0, 1]");
console.log("List: " + list.toString() + '\n');

list.pop(); // [-1, 0]
console.log("Test: list.pop(); // [-1, 0]");
console.log("List: " + list.toString() + '\n');

// Test contains method
console.log("Test contains method-------------------------");
console.log("Test: list.contains(0); // true");
console.log("Result: " + list.contains(0) + '\n');

console.log("Test: list.contains(3); // false");
console.log("Result: " + list.contains(3) + '\n');

// Test find method
console.log("Test find method-----------------------------");
console.log("Test: list.find(0); // 1");
console.log("Result: " + list.find(0) + '\n');

console.log("Test: list.find(3); // null");
console.log("Result: " + list.find(3) + '\n');

// Test toString method
console.log("Test toString method-------------------------");
console.log("Test: list.toString(); // (-1)->(0)->NULL");
console.log("Result: " + list.toString() + '\n');

// Test insertAt method
console.log("Test insertAt method-------------------------");
list.insertAt(5, 2); // [-1, 0, 5]
console.log("Test: list.insertAt(5, 2); // [-1, 0, 5]");
console.log("List: " + list.toString() + '\n');

list.insertAt(10, 0); // [10, -1, 0, 5]
console.log("Test: list.insertAt(10, 0); // [10, -1, 0, 5]");
console.log("List: " + list.toString() + '\n');

// Test removeAt method
console.log("Test removeAt method-------------------------");
list.removeAt(1); // [10, 0, 5]
console.log("Test: list.removeAt(1); // [10, 0, 5]");
console.log("List: " + list.toString() + '\n');

list.removeAt(2); // [10, 0]
console.log("Test: list.removeAt(2); // [10, 0]");
console.log("List: " + list.toString() + '\n');

list.removeAt(0); // [0]
console.log("Test: list.removeAt(0); // [0]");
console.log("List: " + list.toString() + '\n');
