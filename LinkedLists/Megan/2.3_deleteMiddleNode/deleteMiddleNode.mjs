import { arrayToLinkedList } from "../utils/convertLinkedList.mjs";

function deleteMiddleNode(linkedList) {
  // checking edge cases for linked lists length 0-2
  if (linkedList.head === null || linkedList.head.next === null) {
    return linkedList;
  } else if (linkedList.head.next.next === null) {
    linkedList.head = linkedList.head.next;
  } else {
    let runner = linkedList.head;
    let prevMid = null;

    let counter = 0;
    while (runner !== null) {
      if (counter === 2) {
        if (prevMid === null) {
          prevMid = linkedList.head;
        } else {
          prevMid = prevMid.next;
        }
        counter = 0;
      }
      counter++;
      runner = runner.next;
    }

    // remove middle node
    prevMid.next = prevMid.next.next;
  }

  return linkedList;
}

const test1 = arrayToLinkedList([1, 2, 20, 4, 5, 3]);
const test2 = arrayToLinkedList([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
]);
const test3 = arrayToLinkedList([1]);
const test4 = arrayToLinkedList([]);
const test5 = arrayToLinkedList([1, 5]);

console.log(deleteMiddleNode(test1).toString());
console.log(deleteMiddleNode(test2).toString());
console.log(deleteMiddleNode(test3).toString());
console.log(deleteMiddleNode(test4).toString());
console.log(deleteMiddleNode(test5).toString());
