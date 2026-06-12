import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 1, // 1 usuário 
  duration: '30s', // por 30 segundos 
  thresholds: {
    checks: ['rate==1.0'], // Critério de sucesso: 100% 
  },
};

export default function () {
  // Ajuste a porta se a sua API rodar em uma diferente de 3000
  const res = http.get('http://localhost:3000/health'); 
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}