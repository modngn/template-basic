import Client from './Client'
// Since this is a modded game, the client should be a portal that connects
// you to each modded server.  Think server browsers, direct connect via ip,
// that sort of thing.  This is where you would want to set up any apps or
// routers. This generator will remain un-opinionated on that front at least.
// Here is the minimal functionality:
let client
window.onload = function () {
  const search = new URLSearchParams(document.location.search)
  const server = search.get('server')
  const port = search.get('port')
  if (server) {
    // Connect to a specific server
    client = new Client(server, port)
  } else {
    // Connect to default server (vanilla offical?)
    client = new Client()
  }
  client.start()
}

// You can destroy the client instance by calling client.destroy()
// If you use a client side router you will want call destroy before
// createing a new instance.
