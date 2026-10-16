import { Router, Request, Response } from 'express';

const router = Router();

router.get('/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    message: 'Sellora Backend API is running',
    timestamp: new Date().toISOString(),
  });
});

export default router;
