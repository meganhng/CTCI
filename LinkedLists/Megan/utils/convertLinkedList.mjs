import { LinkedList, LinkedNode } from "../LinkedList.mjs";

export function arrayToLinkedList(array) {
  const head = arrayToLinkedNode(array);

  return new LinkedList(head);
}

export function arrayToLinkedNodes(array) {
  let head;
  let curr;

  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      head = new LinkedNode(array[i]);
      curr = head;
    } else {
      curr.next = new LinkedNode(array[i]);
      curr = curr.next;
    }
  }

  return head;
}

export function linkedListToArray(linkedList) {
  let array = [];

  while (linkedList !== null) {
    array.push(linkedList.data);
    linkedList = linkedList.next;
  }

  return array;
}
