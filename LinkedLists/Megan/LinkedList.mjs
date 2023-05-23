import { linkedListToArray } from "./utils/convertLinkedList.mjs";

export class LinkedNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  toString() {
    return linkedListToArray(this.head);
  }
}
