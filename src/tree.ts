/** 树的相关算法 */

/** 
 * 二叉树层次遍历 
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/
 */

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

var levelOrder = function(root: TreeNode): number[][] {
  if (!root) return [];
  const queue = [root];
  const res = [];
  let level = 0; // 代表层级
  while (queue.length) {
      res[level] = [];
      let len = queue.length;
      while (len--) {
          const node = queue.shift(); // 取出队头
          res[level].push(node.val)
          node.left && queue.push(node.left);  
          node.right && queue.push(node.right);
      }
      level++;
  }
  return res;    
};

/**
 * 二叉树X序遍历
 */

var inorderTraversal = function(root: TreeNode) {
  const res: number[] = [];
  fuck(root, res);
  return res
};

function fuck(root: TreeNode, res: number[]) {
  if (root !== null) {
      fuck(root.left, res);
      res.push(root.val); // 什么遍历就放在哪，前序放在上面，中序放在中间，后序放在下面
      fuck(root.right, res);
  }
}
