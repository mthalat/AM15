import express, { Request, Response } from 'express';
// @ts-ignore
import pinoHttp from 'pino-http';

const app = express();

// استخدام @ts-ignore يخبر المحرك بتجاهل فحص الخطأ في هذا السطر تحديداً
// @ts-ignore
const http = pinoHttp();

app.use(http);

// تحديد الأنواع (Request و Response) يدوياً لحل أخطاء السطر 17 و 24
app.get('/', (req: any, res: any) => {
  res.send({ status: 'OK', message: 'Smart Follow Bot is running' });
});

export default app;
