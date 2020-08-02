/** 通用算法 */

/** 
 * 如下：{1:222, 2:123, 5:888}，请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]。
 */
const formatSell = () => {
  const obj = {1:222, 2:123, 5:888};
  const fuck = Array.from({ length: 12}).map((_, i) => obj[i + 1] || null);
  return fuck;
}

/**
 * 给定两个数组，写一个方法来计算它们的交集
 */

const intersection = (arr1: any[], arr2: any[]) => arr1.filter(item => arr2.includes(item));

/** 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。 */
const reverseArr = (arr: number[], k: number) => {
  const arr1 = arr.slice(-3);
  const arr2 = arr.slice(0,-3);
  return arr1.concat(arr2);
}
/**
 * 斐波那契数列
 * @param n 序号
 */
const feibo = (n) => {
  let n1 = 1, n2 = 1;
  let sum = n1 + n2;
  for (let i = 3; i < n; i++) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
  }
  return sum;
}

/**
 * 函数库里化
 * @param fn 函数
 */
function curry(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  }

  return function(...args2) {
    return curry(fn, ...args, ...args2);
  }
}