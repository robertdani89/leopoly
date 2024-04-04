import { PathNotFound, WordIsNotInList } from '../word-chain.errors';

export class WordChainSolver {
  words: string[];
  nodes: { [key: number]: number[] } = {}; //key: index of word, valuer: word indexes that are neighbor nodes

  constructor(words: string[]) {
    this.words = words;
    this.nodes = Array(words.length)
      .fill(0)
      .reduce((p, c, i) => ({ ...p, ...{ [i]: [] } }), {});
    this.cacheNodes();
  }

  findChain(source: string, target: string): string[] {
    const i1 = this.words.indexOf(source);
    const i2 = this.words.indexOf(target);

    if (i1 === -1 || i2 === -1) throw new WordIsNotInList();

    const result = this.dijkstra(this.nodes, i1, i2);
    if (result.path.length < 2) throw new PathNotFound();
    return result.path.map((i) => this.words[i]);
  }

  cacheNodes() {
    for (let i = 0; i < this.words.length; i++) {
      const word1 = this.words[i];
      for (let y = i + 1; y < this.words.length; y++) {
        const word2 = this.words[y];
        if (this.canWordsChain(word1, word2)) {
          this.nodes[i].push(y);
          this.nodes[y].push(i);
        }
      }
    }
  }

  canWordsChain(word1: string, word2: string): boolean {
    if (word1 === word2) return false;
    if (word1.length !== word2.length) return false;

    const chars1 = Array.from(word1);
    const chars2 = Array.from(word2);

    let diffCount = 0;

    for (let i = 0; i < chars1.length; i++) {
      if (chars1[i] !== chars2[i]) diffCount++;
      if (diffCount > 1) return false;
    }

    return diffCount === 1;
  }

  dijkstra(
    graph: { [key: number]: number[] },
    startNode: number,
    endNode: number,
  ): { distance: number; path: number[] } {
    // Create an object to store distances from the start node to all other nodes
    let distances = {};
    // Create an object to store the shortest path from start node to each node
    let shortestPath = {};
    // Initialize the shortest path to each node as infinity and the predecessor of each node as null
    for (let node in graph) {
      distances[node] = Infinity;
      shortestPath[node] = null;
    }
    // Distance from start node to itself is 0
    distances[startNode] = 0;

    // Create a priority queue to store nodes with their respective distances
    let priorityQueue = [startNode];

    // While the priority queue is not empty
    while (priorityQueue.length > 0) {
      // Get the node with the smallest distance from the priority queue
      let currentNode = priorityQueue.shift();

      // If the current node is the end node, break out of the loop
      if (currentNode === endNode) {
        break;
      }

      // Iterate through the neighbors of the current node
      for (let neighbor of graph[currentNode]) {
        let distance = distances[currentNode] + 1; // Assuming distance between neighboring nodes is 1

        // If the new distance is shorter than the existing distance, update it
        if (distance < distances[neighbor]) {
          distances[neighbor] = distance;
          shortestPath[neighbor] = currentNode;
          // Add the neighbor to the priority queue
          priorityQueue.push(neighbor);
          // Sort the priority queue based on the distances
          priorityQueue.sort((a, b) => distances[a] - distances[b]);
        }
      }
    }

    // Build the shortest path from start node to end node
    let path = [];
    let currentNode = endNode;
    while (currentNode !== null) {
      path.unshift(currentNode);
      currentNode = shortestPath[currentNode];
    }

    return { distance: distances[endNode], path: path };
  }
}
