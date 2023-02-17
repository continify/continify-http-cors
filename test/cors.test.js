const tap = require('tap')
const Continify = require('continify')
const ContinifyHTTP = require('continify-http')
const ContinifyCORS = require('..')

tap.test('cors', async t => {
  const ins = Continify()
  ins.register(ContinifyHTTP)
  ins.register(ContinifyCORS)

  t.plan(10)
  await ins.ready()
  ins.route({
    url: '/cors',
    handler (req, rep) {
      rep.send('cors success')
    }
  })

  const r1 = await ins.inject({
    method: 'OPTIONS',
    url: '/cors'
  })

  t.equal(r1.statusCode, 204)
  t.equal(r1.headers['access-control-allow-origin'], '*')
  t.equal(
    r1.headers['access-control-allow-methods'],
    'GET,HEAD,PUT,PATCH,POST,DELETE'
  )
  t.equal(r1.headers['access-control-allow-credentials'], true)
  t.equal(r1.headers['access-control-max-age'], 7200)

  const r2 = await ins.inject({
    url: '/cors'
  })

  t.equal(r2.headers['access-control-allow-origin'], '*')
  t.equal(
    r2.headers['access-control-allow-methods'],
    'GET,HEAD,PUT,PATCH,POST,DELETE'
  )
  t.equal(r2.headers['access-control-allow-credentials'], true)
  t.equal(r2.headers['access-control-max-age'], 7200)
  t.equal(r2.payload, 'cors success')

  await ins.close()
})
