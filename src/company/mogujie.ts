/** 蘑菇街 */

/**
 * 统计出现最多的字符
 * 编写一个js函数,传入一个非空字符串,计算出现次数最多的字符,返回该字符及 出现次数,结果可能包含多个字符。如传入“xyzzyxyz”,则返回:{y:3, z:3}
 * https://www.nowcoder.com/test/question/done?tid=34509805&qid=339039#summary
 */

interface IStrResult {
  [props: string]: number;
}

function getStr(str: string) {
  const sources: IStrResult = {};
  const result: IStrResult = {};

  for (let i = 0; i < str.length; i++) {
    sources[str[i]] = typeof sources[str[i]] === "undefined" ? 1 : sources[str[i]] + 1;
  }

  const max = Math.max(...Object.values(sources));

  const entries = Object.entries(sources);

  for (const [key, value] of entries) {
    if (value === max) result[key] = value;
  }

  return result;
}