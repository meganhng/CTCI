import { LinkedList, LinkedNode } from "../LinkedList.mjs";
import { arrayToLinkedList } from "../utils/convertLinkedList.mjs";

function sumList(linkList1, linkList2) {
  let curr1 = linkList1.head;
  let curr2 = linkList2.head;

  let sum = null;
  let head = null;

  let carryOver = 0;

  while (curr1 !== null || curr2 !== null || carryOver !== 0) {
    //calculate values
    const digitSum = (curr1?.data || 0) + (curr2?.data || 0) + carryOver;
    carryOver = Math.floor(digitSum / 10);
    if (sum === null) {
      sum = new LinkedNode(digitSum % 10);
      head = sum;
    } else {
      sum.next = new LinkedNode(digitSum % 10);
      sum = sum.next;
    }

    // check edge
    if (curr1 !== null) {
      curr1 = curr1.next;
    }
    if (curr2 !== null) {
      curr2 = curr2.next;
    }
  }

  return new LinkedList(head);
}

const number1 = arrayToLinkedList([7, 1, 6, 9, 9]);
const number2 = arrayToLinkedList([5, 9, 9]);
console.log(sumList(number1, number2).toString());

const number3 = arrayToLinkedList([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]);
const number4 = arrayToLinkedList([5, 9, 9, 1, 3]);
console.log(sumList(number3, number4).toString());

const number5 = arrayToLinkedList([]);
const number6 = arrayToLinkedList([2]);
console.log(sumList(number5, number6).toString());
