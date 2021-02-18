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
