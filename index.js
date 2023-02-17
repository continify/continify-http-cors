const ContinifyPlug = require('continify-plugin')

module.exports = ContinifyPlug(async function (ins, options) {
  ins.addHook('onRequest', async function (req, rep) {
    rep.setHeader(
      'Access-Control-Allow-Methods',
      'GET,HEAD,PUT,PATCH,POST,DELETE'
    )
    rep.setHeader('Access-Control-Allow-Origin', '*')
    rep.setHeader('Access-Control-Allow-Credentials', true)
    rep.setHeader('Access-Control-Allow-Headers', '*')
    rep.setHeader('Access-Control-Expose-Headers', '*')
    rep.setHeader('Access-Control-Max-Age', 7200)
  })

  ins.route({
    url: '*',
    method: 'OPTIONS',
    handler (req, rep) {
      rep.code(204)
      rep.send('')
    }
  })
}, {})
