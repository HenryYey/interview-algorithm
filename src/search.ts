/** 搜索算法 */

/** 有向图的深度优先搜索 */
interface Vertex {
  key: string;
  visitied: boolean;
  next: Vertex[];
}

function DFS(data: Vertex, key: string) {
  if (data.key === key) return data;
  if (data.visitied == false) {
    data.visitied = true;
    for(let j = 0; j < data.next.length; j++) {
      DFS(data.next[j], key); //该顶点的连接点依次进行DFS遍历
    }
    return true;
  }

  return false;
};

/** 广度优先搜索 */
function BFS(root: Vertex, key: string) {
  const queue: Vertex[] = [];
  queue.push(root);

  //遍历队列
  while(queue.length > 0) {
    const item = queue.shift();
    if(key === item.key) return item;

    let len = item.next.length;
    for(let i = 0; i < len; i++) {
      queue.push(item.next[i]);
    }
  }
}
