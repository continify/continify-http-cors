const ContinifyPlug = require('continify-plugin')

module.exports = ContinifyPlug(async function (ins, options) {
  ins.addHook('onRequest', async function (req, rep) {
    rep.setHeader('Access-Control-Allow-Origin', '*')
    rep.setHeader(
      'Access-Control-Allow-Methods',
      'HEAD,GET,POST,PATCH,PUT,DELETE'
    )
    rep.setHeader('Access-Control-Allow-Credentials', true)
    rep.setHeader('Access-Control-Max-Age', 7200)
  })

  ins.route({
    url: '*',
    method: 'OPTIONS',
    handler (req, rep) {
      rep.send('')
    }
  })
}, {})
