import { arrayToLinkedList } from "../utils/convertLinkedList.mjs";

// Solution requires using two linked lists
function palindrome(linkedList) {
  let reverseList = null;

  // find the middle of the linked list
  let runner = linkedList.head;
  let middle = linkedList.head;
  let counter = 0;
  while (runner !== null) {
    if (counter === 2) {
      middle = middle.next;
      counter = 0;
    }

    counter++;
    runner = runner.next;
  }

  // reverse half of the list
  runner = middle.next;
  while (runner !== null) {
    let next = runner.next;
    if (reverseList === null) {
      reverseList = runner;
      reverseList.next = null;
    } else {
      runner.next = reverseList;
      reverseList = runner;
    }

    runner = next;
  }

  // comparison time
  while (reverseList !== null) {
    if (reverseList.data !== linkedList.head.data) {
      return false;
    } else {
      reverseList = reverseList.next;
      linkedList.head = linkedList.head.next;
    }
  }

  return true;
}

//passing case
const test1 = arrayToLinkedList(["r", "a", "c", "e", "c", "a", "r"]);
const test2 = arrayToLinkedList(["s", "h", "a", "n", "n", "a", "h", "s"]);
const test3 = arrayToLinkedList(["s"]);
console.log(palindrome(test1));
console.log(palindrome(test2));
console.log(palindrome(test3));

//failing cases
const test4 = arrayToLinkedList(["s", "h", "a", "n", "h", "s"]);
const test5 = arrayToLinkedList(["s", "a", "d", "d", "h", "a", "n", "h", "s"]);
const test6 = arrayToLinkedList(["a", "a", "a", "b", "a", "a"]);
console.log(palindrome(test4));
console.log(palindrome(test5));
console.log(palindrome(test6));
