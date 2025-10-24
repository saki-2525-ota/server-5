// 自分で一から書いてみよう
import { Hono } from 'jsr:@hono/hono';
import { serveStatic } from 'jsr:@hono/hono/deno';

const pink = new Hono();

pink.use('/*', serveStatic({ root: './public' }));

pink.get('api', async (c) => {
  console.log('abcd');
  return c.json({ message: 'fruit:orange' });
});
