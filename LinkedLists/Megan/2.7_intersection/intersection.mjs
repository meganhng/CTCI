import { LinkedList } from "../LinkedList.mjs";
import { arrayToLinkedNodes } from "../utils/convertLinkedList.mjs";

function intersectionHashMap(list1, list2) {
  const map = new Map();

  let curr = list1;
  while (curr !== null) {
    map.set(curr, curr);
    curr = curr.next;
  }

  Object.keys(map).forEach((test) => console.log(test));

  curr = list2;
  while (curr !== null) {
    if (map.get(curr)) {
      return curr;
    }
    curr = curr.next;
  }

  return null;
}

function intersectionPointers(list1, list2) {
  let length1 = 0;
  let length2 = 0;

  let curr1 = list1;
  let curr2 = list2;

  while (curr1 !== null) {
    length1++;
    curr1 = curr1.next;
  }

  while (curr2 !== null) {
    length2++;
    curr2 = curr2.next;
  }

  if (curr1 !== curr2) {
    return null;
  }

  const diff = Math.abs(length1 - length2);

  let longerList = length1 > length2 ? list1 : list2;
  let shorterList = length1 > length2 ? list2 : list1;

  for (let i = 0; i < diff; i++) {
    longerList = longerList.next;
  }

  while (longerList !== null) {
    if (longerList === shorterList) {
      return longerList;
    }
    longerList = longerList.next;
    shorterList = shorterList.next;
  }

  return null;
}
// fail tests
const test1 = arrayToLinkedNodes([1, 2, 3, 4, 5, 6]);
const test2 = arrayToLinkedNodes([1, 11, 2, 13]);

console.log(intersectionPointers(test1, test2));

// pass test
const test3 = arrayToLinkedNodes([1, 2, 3, 4, 5, 6]);
const test4 = arrayToLinkedNodes([1, 11, 2, 13]);

let curr = test4;
while (curr.next !== null) {
  curr = curr.next;
}
curr.next = test3.next.next.next;

console.log(new LinkedList(test4).toString());
console.log(intersectionPointers(test3, test4));
