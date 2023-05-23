import { arrayToLinkedList } from "../utils/convertLinkedList.mjs";

// with temporary buffer
function removeDupes(linkedList) {
  let unqiueValues = {};

  let curr = linkedList.head;
  let prev = null;

  while (curr !== null) {
    if (!unqiueValues[curr.data]) {
      unqiueValues[curr.data] = curr.data;
      if (prev === null) {
        prev = curr;
      } else {
        prev = prev.next;
      }
    } else {
      prev.next = curr.next;
    }
    curr = curr.next;
  }

  return linkedList;
}

// No temporary buffer
function removeDupesNoBuffer(linkedList) {
  if (linkedList.head === null) {
    return linkedList;
  }

  let curr = linkedList.head;
  let prevRunner = curr;
  let runner = curr.next;

  while (curr.next !== null) {
    if (runner !== null && curr.data !== runner.data) {
      prevRunner = runner;
      runner = runner.next;
    } else if (runner === null) {
      curr = curr.next;
      prevRunner = curr;
      runner = curr.next;
    } else if (curr.data === runner.data) {
      runner = runner.next;
      prevRunner.next = runner;
    }
  }

  return linkedList;
}

const test1 = arrayToLinkedList([1, 2, 2, 4, 5, 3, 2, 2]);
const test2 = arrayToLinkedList([1, 1, 2, 4, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1]);
const test3 = arrayToLinkedList([]);
const test4 = arrayToLinkedList([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

console.log(removeDupesNoBuffer(test1).toString());
console.log(removeDupesNoBuffer(test2).toString());
console.log(removeDupesNoBuffer(test3).toString());
console.log(removeDupesNoBuffer(test4).toString());
