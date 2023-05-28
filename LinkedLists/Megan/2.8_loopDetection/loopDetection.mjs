import { LinkedList } from "../LinkedList.mjs";
import { arrayToLinkedNodes } from "../utils/convertLinkedList.mjs";

function loopDetectionHashMap(head) {
  const map = new Map();

  while (head !== null) {
    if (map.get(head)) {
      return head;
    } else {
      map.set(head, head);
      head = head.next;
    }
  }

  return null;
}

function loopDetectionPointers(head) {
  // detect loop
  let runner = head;
  let slow = head;

  while (runner !== null && runner !== undefined) {
    runner = runner?.next?.next;
    slow = slow?.next;

    // if a loop is detected (collision occurred)
    if (runner === slow) {
      slow = head;
      // find the starting point of the loop
      while (runner !== slow) {
        slow = slow.next;
        runner = runner.next;
      }

      return runner;
    }
  }

  // if no loop is found return null
  return null;
}

// Loop Tests
const test = arrayToLinkedNodes([1, 2, 3, 4, 5, 3]);

let curr = test;
while (curr.next !== null) {
  curr = curr.next;
}

curr.next = test.next.next;

console.log(loopDetectionHashMap(test));
console.log(loopDetectionPointers(test));

// No loop tests
const test2 = arrayToLinkedNodes([1, 1, 1, 1, 1]);

console.log(loopDetectionHashMap(test2));
console.log(loopDetectionPointers(test2));
