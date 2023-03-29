const {readFile, writeFile} = require('fs')
console.log('starting')
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err)
    {
        console.log(err)
        return
    }
    const first =result

    readFile('./content/first.txt','utf8',(err,result)=>{
        if(err)
        {
            console.log(err)
            return
        }
        const second =result

        writeFile('./content/result-async',`here is the result ${first} and ${second}`, {flag:'a'},(err , result)=>{
            if(err)
            {
                console.log(err)
                return
            }
            console.log(result)
        })

console.log('done with task')
})})

console.log('starting new task')