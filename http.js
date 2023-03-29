const http = require('http')
const server = http.createServer((req , res)=>{
    console.log(req)
       
    // res.write('welcome to home page')
    // res.end()
    if(req.url ==='/')
    {
        res.end('welcome to home page')
    }
    if(req.url ==='/about')
    {
        res.end('about page')
    }
res.end(`<h1> Ooops!</h1>
<p> we can't seem to page you are looking for</p>
<a href="/"> back home</a>`)
}
)
server.listen(5000)
