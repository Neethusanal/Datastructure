class Graph{
    constructor()
    {
        this.adjacenecyList={}
    }
    addVertex(vertex)
    {
        if(!this.adjacenecyList[vertex])
        {
            this.adjacenecyList[vertex]=new set()
        }
    }
    addEdge(vertex1,vertex2)
    {
        if(!this.adjacencyList[vertex])
        {
            this.addVertex(vertex1)
        }
        if(!this.adjacenecyList[vertex])
        {
            this.addVertex(vertex2)
        }
        this.adjacenecyList[vertex1].add(vertex2)
        this.adjacenecyList[vertex2].add(vertex1)
    }
}
const graph= new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A","B")
graph.addEdge("B","C")
