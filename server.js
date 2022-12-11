const Koa = require('koa');
const Router = require('@koa/router');

const noblox = require('noblox.js');

const app = new Koa();

app.use(async ctx => {

    console.log("TESTa")
    ctx.body = "await noblox.getUsernameFromId(1243)"
});

app.listen(3000);