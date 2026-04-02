// @ts-nocheck
import express from 'express';
import pinoHttp from 'pino-http';

const app = express();

// استخدام require هنا يحل مشكلة "not callable" لأنها تتجاوز فحص الأنواع
const pino = require('pino-http');
const http = pino.default ? pino.default() : pino();

app.use(http);

// استخدام any بشكل مباشر وصريح
app.get('/', (req: any, res: any) => {
  res.send({ status: 'OK', message: 'Smart Follow Bot is running' });
});

export default app;
