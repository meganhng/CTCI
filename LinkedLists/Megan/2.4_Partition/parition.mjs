import { arrayToLinkedList } from "../utils/convertLinkedList.mjs";
import { LinkedList } from "../LinkedList.mjs";

function parition(linkedList, x) {
  let headLessThanX = linkedList.head;
  let tailGreaterThanX = linkedList.head;

  let curr = linkedList.head;
  while (curr !== null) {
    let next = curr.next;
    if (curr.data < x) {
      curr.next = headLessThanX;
      headLessThanX = curr;
    } else {
      tailGreaterThanX.next = curr;
      tailGreaterThanX = curr;
    }
    curr = next;
  }

  tailGreaterThanX.next = null;

  return new LinkedList(headLessThanX);
}

const test1 = arrayToLinkedList([1, 3, 2, 4, 8, 10, 5, 2, 6]);
const test2 = arrayToLinkedList([4, 3]);

console.log(parition(test1, 4).toString());
console.log(parition(test2, 4).toString());
