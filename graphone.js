// JS code to implement the approach

// Function to find the level of the given node
function findLevel( N, edges, X)
{
	// Variable to store maximum vertex of graph
	let maxVertex = 0;
	for (let i=0;i<edges.length;i++){
		let it = edges[i];
		let a = Math.max(it[0],it[1]);
		maxVertex = Math.max(maxVertex,a);
	}

	// Creating adjacency list
	let adj = [];
	for(let i=0;i<maxVertex+1;i++){
		adj.push([]);
	}
	for (let i = 0; i < edges.length; i++) {
		adj[edges[i][0]].push(edges[i][1]);
		adj[edges[i][1]].push(edges[i][0]);
	}

	// If X is not present then return -1
	if (X > maxVertex || adj[X].length == 0)
		return -1;

	// Initialize a Queue for BFS traversal
	let q = [];
	q.push(0);
	let level = 0;

	// Visited array to mark the already visited nodes
	let visited = [];
	for(let i=0;i<maxVertex+1;i++)
	{
		visited.push(0);
	}
	visited[0] = 1;

	// BFS traversal
	
	while (q.length > 0) {
		let sz = q.length;
		while (sz--) {
			let currentNode = q[0];
			q.shift();
			if (currentNode == X) {
				return level;
			}

			for(let k =0;k<adj[currentNode].length;k++){
				let it = adj[currentNode][k];
				if (visited[it]==0) {
					q.push(it);
					visited[it] = 1;
				}
			}
		}
		level++;
	}

	return -1;
}

// Driver Code
let V = 5;
let edges
	= [ [ 0, 1 ], [ 0, 2 ], [ 1, 3 ], [ 2, 4 ] ];
let X = 3;

// Function call
let level = findLevel(V, edges, X);
console.log(level);

// This code is contributed by ksam24000
