/** 排序算法 */

/** 快排 */
const quickSort = function(arr: any[]): any[] {
　if (arr.length <= 1) return arr;
　const pivotIndex = Math.floor(arr.length / 2);
　const pivot = arr.splice(pivotIndex, 1)[0];
　const left: any[] = [];
  const right: any = [];

  arr.forEach(item => {
　  item < pivot ? left.push(item) : right.push(item);
  });

　return quickSort(left).concat([pivot], quickSort(right));
};
