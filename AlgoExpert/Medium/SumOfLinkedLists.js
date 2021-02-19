// Naive approach (not recommended)
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  // Write your code here.
  let numOne = parseInt(linkedListToStr(linkedListOne));
  let numTwo = parseInt(linkedListToStr(linkedListTwo));
  let res = (numOne + numTwo).toString().split('').reverse().join('');
  let resArr = res.split('').map(Number);
  return toLinkedList(resArr);
}

function linkedListToStr(linkedList) {
  let arr = [];
  let node = linkedList;
  while (node !== null) {
    arr.push(node.value);
    node = node.next;
  }
  return arr.reverse().join('');
}

function toLinkedList(nums) {
  let list = new LinkedList(nums[0]);
  let node = list;
  for (let i = 1; i < nums.length; i++) {
    node.next = new LinkedList(nums[i]);
    node = node.next;
  }
  return list;
}

// Correct approach O(max(m,n)) time O(max(m,n)) space where m and n are the lengths of the respective linked lists
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  // Write your code here.
  let carry = 0;
  let dummy = new LinkedList(0);
  let currentNode = dummy;
  let nodeOne = linkedListOne;
  let nodeTwo = linkedListTwo;
  while (nodeOne !== null || nodeTwo !== null || carry !== 0) {
    const valueOne = nodeOne !== null ? nodeOne.value : 0;
    const valueTwo = nodeTwo !== null ? nodeTwo.value : 0;
    const sum = valueOne + valueTwo + carry;

    const newValue = sum % 10;
    const newNode = new LinkedList(newValue);
    currentNode.next = newNode;
    currentNode = newNode;

    carry = Math.floor(sum / 10);
    nodeOne = nodeOne !== null ? nodeOne.next : null;
    nodeTwo = nodeTwo !== null ? nodeTwo.next : null;
  }
  return dummy.next;
}
