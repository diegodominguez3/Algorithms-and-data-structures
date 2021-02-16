/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  slow = reversed(slow);
  fast = head;

  while (slow !== null) {
    if (slow.val !== fast.val) return false;
    slow = slow.next;
    fast = fast.next;
  }

  return true;

  function reversed(node) {
    let prev = null;
    while (node !== null) {
      let next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return prev;
  }
}
