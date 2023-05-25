import { arrayToLinkedList } from "../utils/convertLinkedList.mjs";

function recursiveIsPalindrome(linkedList) {
  const length = getLinkedListLength(linkedList);

  const result = isPalindrome(linkedList.head, length);

  return result.palindrome;
}

function isPalindrome(node, length) {
  // Reached the middle of the string
  if (length === 0 || length === 1) {
    return { node: length === 0 ? node : node.next, palindrome: true };
  }

  // DFS problem: We want to call the recursive function before evaluating the results
  const result = isPalindrome(node.next, length - 2);

  if (!result.palindrome) {
    return result;
  }

  const palindrome = !!(result.node.data === node.data);

  return { node: result.node.next, palindrome };
}

function getLinkedListLength(linkedList) {
  let counter = 0;
  let curr = linkedList.head;
  while (curr !== null) {
    counter++;
    curr = curr.next;
  }

  return counter;
}

//passing case
const test1 = arrayToLinkedList(["r", "a", "c", "e", "c", "a", "r"]);
const test2 = arrayToLinkedList(["s", "h", "a", "n", "n", "a", "h", "s"]);
const test3 = arrayToLinkedList(["s"]);
const test7 = arrayToLinkedList([]);

console.log(recursiveIsPalindrome(test1));
console.log(recursiveIsPalindrome(test2));
console.log(recursiveIsPalindrome(test3));
console.log(recursiveIsPalindrome(test7));

//failing cases
const test4 = arrayToLinkedList(["s", "h", "a", "n", "h", "s"]);
const test5 = arrayToLinkedList(["s", "a", "d", "d", "h", "a", "n", "h", "s"]);
const test6 = arrayToLinkedList(["a", "a", "a", "b", "a", "a"]);
console.log(recursiveIsPalindrome(test4));
console.log(recursiveIsPalindrome(test5));
console.log(recursiveIsPalindrome(test6));
