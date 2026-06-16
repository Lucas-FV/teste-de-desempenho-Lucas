import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 10 },  // Carga baixa inicial por 30s
    { duration: '10s', target: 300 }, // Salto imediato para 300 usuários em 10s
    { duration: '1m', target: 300 },  // Manter o pico por 1 minuto
    { duration: '10s', target: 10 },  // Queda imediata de volta para 10 usuários
  ],
};

export default function () {
  const url = 'http://localhost:3000/checkout/simple';
  
  const payload = JSON.stringify({});
  const params = {
    headers: { 'Content-Type': 'application/json' },
  };

  http.post(url, payload, params);
  
  sleep(1);
}