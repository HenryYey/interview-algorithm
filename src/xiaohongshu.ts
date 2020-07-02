/** 小红书面试题 */

/** 
 * 统计数组中字符出现的频次
 * https://www.nowcoder.com/questionTerminal/e1bb4fb1dec34f7fbcf2f26d3e478b25?toCommentId=6388914
 * input: ['a', 'b', 'c', 'a']
 * output: {a: true, b: false, c:false}
 */
interface Duplicates {
  [props: string]: boolean;
}
function duplicates (arr: string[]): Duplicates {
  let obj: Duplicates = {};
  arr.forEach((str: string) => {
    obj[str] = typeof obj[str] === 'undefined' ? false: true;
  });

  return obj;
}