class Hashtable{
    constructor(size)
    {
        this.table=new Array(size)
        this.size=size
    }
    hash(key)
    {
        let total=0
        for(let i=0;i<key.length;i++)
        {
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value)
    {
        const index=this.hash(key)
        const bucket=this.table[index]
        if(!bucket)
        {
            this.table[index]=[[key,value]]
        }
        else{
            const samekeyitem=bucket.find(item=>item[0]===key)
            
                if(samekeyitem)
                {
                    samekeyitem[1]=value
                }
                else{
                    bucket.push([key,value])
                }
            
        }
    }
    get(key)
    {
        const index=this.hash(key)
        const bucket=this.table[index]
        if(bucket)
        {
            const samekeyitem=bucket.find(item=>item[0]===key)
            if(samekeyitem)
            {
                return samekeyitem[1]
            }
            else
            {
                return undefined
            }
        }
    }
    display()
    {
        for(let i=0;i<this.table.length;i++)
        {
            if(this.table[i])
            {
                console.log(i,this.table[i])
            }
        }
    }
}

const hash = new Hashtable(20)
hash.set("name","siyaan")
hash.set("place","Thrissur")
hash.set("age",3)
console.log(hash.get("place"))
console.log(hash.table)
hash.display()