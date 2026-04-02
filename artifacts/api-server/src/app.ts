// 1. استيراد المكتبات مع تحديد الأنواع (Request, Response) والأقواس لـ pinoHttp
import express, { Request, Response } from 'express';
import { pinoHttp } from 'pino-http'; 

const app = express();

// 2. إصلاح السطر 14 (سيعمل الآن بفضل الأقواس في السطر 2)
const http = pinoHttp(); 

app.use(http);

// 3. إصلاح السطر 17 و 24 بإضافة الأنواع لـ req و res
app.get('/', (req: Request, res: Response) => {
  res.send({ status: 'OK', message: 'Smart Follow Bot is running' });
});

export default app;
