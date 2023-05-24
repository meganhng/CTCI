import { LinkedList, LinkedNode } from "../LinkedList.mjs";
import { arrayToLinkedList } from "../utils/convertLinkedList.mjs";

// stored in correct order
function sumListFollowUp(number1, number2) {
  // similar to the recursive sum list solution but instead bringing the "carry over" value up rather than down

  // Adding padding to the numbers to ensure they're the same length
  zeroPadding(number1, number2);

  //recursive step
  let head = new LinkedNode();
  const carryOver = recursiveSum(number1.head, number2.head, head);

  // Edge cases for carryover values that weren't dealt with during recurrsion
  if (carryOver !== 0) {
    head.data = carryOver;
  } else {
    head = head.next;
  }
  return new LinkedList(head);
}

function recursiveSum(number1, number2, node) {
  /*Since this is DFS we need to think about what we want to bring up from the bottom nodes.
    In this situation the most important information is the "carry over" value.
  */
  if (number1 === null && number2 === null) {
    node.next = null;
    return 0;
  } else {
    node.next = new LinkedNode();
    const carryOver = recursiveSum(number1.next, number2.next, node.next);
    const sum = number1.data + number2.data + carryOver;

    node.next.data = sum % 10;

    return Math.floor(sum / 10);
  }
}

// util functions
function zeroPadding(number1, number2) {
  let digitCounter1 = 0;
  let digitCounter2 = 0;

  let curr = number1.head;

  while (curr !== null) {
    digitCounter1++;
    curr = curr.next;
  }

  curr = number2.head;
  while (curr !== null) {
    digitCounter2++;
    curr = curr.next;
  }

  if (digitCounter1 === digitCounter2) {
    return;
  }

  const difference = Math.abs(digitCounter1 - digitCounter2);

  addZeroPadding(difference, digitCounter1 < digitCounter2 ? number1 : number2);
}

function addZeroPadding(numZeros, linkedList) {
  while (numZeros !== 0) {
    const zero = new LinkedNode(0);
    zero.next = linkedList.head;
    linkedList.head = zero;
    numZeros--;
  }
}

// TEST CASES
// answer: 2998
const number1 = arrayToLinkedList([9, 9, 9]);
const number2 = arrayToLinkedList([1, 9, 9, 9]);
console.log(sumListFollowUp(number1, number2).toString());

// answer: 100000059912;
const number3 = arrayToLinkedList([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]);
const number4 = arrayToLinkedList([5, 9, 9, 1, 3]);
console.log(sumListFollowUp(number3, number4).toString());

// answer: 2
const number5 = arrayToLinkedList([]);
const number6 = arrayToLinkedList([2]);
console.log(sumListFollowUp(number5, number6).toString());

// answer: 318
const number7 = arrayToLinkedList([1, 8, 9]);
const number8 = arrayToLinkedList([1, 2, 9]);
console.log(sumListFollowUp(number7, number8).toString());
