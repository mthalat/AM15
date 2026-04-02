import express, { Request, Response } from 'express';
// تغيير طريقة الاستيراد هنا لحل مشكلة "not callable" نهائياً
import * as pinoHttp from 'pino-http';

const app = express();

// استخدام (pinoHttp as any) يتجاوز قيود الأنواع التي تسبب فشل الـ Build
const logger = (pinoHttp as any).default ? (pinoHttp as any).default() : (pinoHttp as any)();

app.use(logger);

// إضافة الأنواع (Request, Response) لحل خطأ السطر 17 و 24
app.get('/', (req: Request, res: Response) => {
  res.send({ status: 'OK', message: 'Smart Follow Bot is running' });
});

export default app;
