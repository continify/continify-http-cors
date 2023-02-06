const Continify = require('continify')
const ContinifyHTTP = require('continify-http')
const ContinifyCORS = require('.')

async function init () {
  const ins = Continify()
  ins.register(ContinifyHTTP)
  ins.register(ContinifyCORS)

  ins.register(async ins => {
    ins.route({
      url: '/cors',
      handler (req, rep) {
        rep.send('cors success')
      }
    })
  })

  await ins.ready()
}

init()
