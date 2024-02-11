const http = require('http');
const fs = require('fs')
const url = require('url')


// const myServer = http.createServer((req,res)=>{
//     const log = `${Date.now()} : ${req.url} New Request Received!\n`;
//     fs.appendFile('log.txt' , log , (err , data)=>{
//         res.end("hello from server!")
//     });

// });

// const myServer = http.createServer((req, res) => {
//     const log = `${Date.now()} : ${req.url} New Request Received!\n`;
//     fs.appendFile('log.txt', log, (err, data) => {
//         switch (req.url) {
//             case '/': res.end("HomePage")
//                 break
//             case '/about': res.end("about Me")
//                 break
//             default:
//                 res.end('404 : Not Found')
//         }
//     });
// });

const myServer = http.createServer((req, res) => {

    const log = `${Date.now()} : ${req.url} New Request Received!\n`;
    const myUrl = url.parse(req.url, true)
    console.log(myUrl)

    fs.appendFile('log.txt', log, (err, data) => {

        switch (myUrl.pathname) {
            case '/': res.end("HomePage")
                break
            case '/about':
                const username = myUrl.query.myname
                res.end(`about result: ${username}`)
                break
              
            case '/search':
               
                 res.end('search result loading...')
            default:
                res.end('404 : Not Found')
        }
    });
});

myServer.listen(8000, () => console.log("server started"));