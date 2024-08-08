// src/mocks/browser.ts
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// モックサービスワーカーを設定して開始
export const worker = setupWorker(...handlers);
