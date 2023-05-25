// Iterative solution we will use other data structures such as "stacks" to help us find the solution
import { arrayToLinkedList } from "../utils/convertLinkedList.mjs";

function iterativePalindrome(linkedList) {
  let stack = [];

  //find the middle of the linked list
  let middle = linkedList.head;
  let runner = linkedList.head;

  let counter = 0;

  while (runner !== null) {
    if (counter === 2) {
      middle = middle.next;
      counter = 0;
    }
    counter++;
    runner = runner.next;
  }

  while (middle !== null) {
    stack.push(middle.data);
    middle = middle.next;
  }

  let curr = linkedList.head;
  while (stack.length !== 0) {
    const char = stack.pop();
    if (curr.data !== char) {
      return false;
    }
    curr = curr.next;
  }

  return true;
}

//passing case
const test1 = arrayToLinkedList(["r", "a", "c", "e", "c", "a", "r"]);
const test2 = arrayToLinkedList(["s", "h", "a", "n", "n", "a", "h", "s"]);
const test3 = arrayToLinkedList(["s"]);
const test7 = arrayToLinkedList([]);

console.log(iterativePalindrome(test1));
console.log(iterativePalindrome(test2));
console.log(iterativePalindrome(test3));
console.log(iterativePalindrome(test7));

//failing cases
const test4 = arrayToLinkedList(["s", "h", "a", "n", "h", "s"]);
const test5 = arrayToLinkedList(["s", "a", "d", "d", "h", "a", "n", "h", "s"]);
const test6 = arrayToLinkedList(["a", "a", "a", "b", "a", "a"]);
console.log(iterativePalindrome(test4));
console.log(iterativePalindrome(test5));
console.log(iterativePalindrome(test6));
