const http = require('http')
const forwarded = require('forwarded')
const PORT = process.env.PORT || 8080

http.createServer( (req,res) => {

  req.on('error', (err) => {
    console.log(err)
  })

  res.on('error', (err) => {
    console.log(err)
  })
  
  let ipaddress = forwarded(req)
  let { headers } = req
  let clientInfo = {}
  let language = headers['accept-language'].split(',')
  clientInfo.IP = ipaddress[(ipaddress.length-1)]

  let software = headers['user-agent'].match(/\(.*?\)/) || "no OS found"
  clientInfo.software = software[0].substr(1,software[0].length-2)
  clientInfo.language = language[0]
  res.end(JSON.stringify(clientInfo))

}).listen(PORT, () => console.log(`Listening on ${ PORT }`))
