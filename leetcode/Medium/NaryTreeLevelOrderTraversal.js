/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
function levelOrder(root) {
  if (root == null) {
    return [];
  }

  let queue = [];
  queue.push({level: 0, node: root});

  let result = [];

  while(queue.length > 0) {
      let item = queue.shift();
      let level = item.level;
      
      // no subarray yet at that level
      if (result[level] == null) {
          result[level] = [];
      }
      result[level].push(item.node.val);
      
      for(let child of item.node.children) {
          queue.push({level: level + 1, node: child});
      }
  }

  return result;
}