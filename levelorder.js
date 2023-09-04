levelorder()
{
    const queue=[]
    queue.push(this.root)
    while(queue.length)
    {
        let curr=queue.shift()
        if(curr.left)
        {
            queue.push(curr.left)
        }
        if(curr.right)
        {
            queue.push(curr.right)
        }
    }
}