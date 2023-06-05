class HashTable{
    constructor(size)
    {
        this.table=new Array(size)
        this.size=size
    }
    hash(key)
    {
        let total=0
        for( let i=0;i<key.length;i++)
        {
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value)
    {
        const index= this.hash(key)
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
    remove(key)
    {
        const index=this.hash(key)
        const bucket= this.table[index]
        if(bucket)
        {
            const samekeyitem=bucket.find(item=>item[0]===key)
            if(samekeyitem){
                bucket.splice(bucket.indexOf(samekeyitem),1)
            }
        }
    }
    display()
    {
        for( let i=0;i<this.table.length;i++)
        {
            if(this.table[i])
            {
            console.log(i,this.table[i])
            }
        }
    }
}
const table=new HashTable(50)
table.set("fullname","siyaan sanal")
table.set("age",4)
table.set("place","Thrissur")
table.set("class","LKG")
table.display()
// table.remove("age")
// table.remove("class")
// table.display()