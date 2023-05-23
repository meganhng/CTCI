import { arrayToLinkedList } from "../utils/convertLinkedList.mjs";

function returnKthToLast(linkedList, k) {
  let runner = linkedList.head;
  let slow = runner;

  while (runner.next !== null) {
    if (k === 0) {
      slow = slow.next;
    } else {
      k--;
    }

    runner = runner.next;
  }

  return slow.data;
}

const test1 = arrayToLinkedList([1, 2, 20, 4, 5, 3]);

console.log(returnKthToLast(test1, 3));
console.log(returnKthToLast(test1, 1));
console.log(returnKthToLast(test1, 0));
console.log(returnKthToLast(test1, 50));
