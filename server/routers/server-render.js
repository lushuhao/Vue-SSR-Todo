const ejs = require('ejs')

module.exports = async (ctx, renderer, template) => {
  ctx.headers['ContentType'] = 'text/html'

  const context = {url: ctx.path}

  try {
    const appString = await renderer.renderToString(context)

    ctx.body = ejs.render(template, {
      appString,
      style: context.renderStyles(),
      script: context.renderScripts()
    })
  } catch (e) {
    console.log('render error', e)
    throw e
  }
}
