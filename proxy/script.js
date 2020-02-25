import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
  vus: 10,
  duration: '30s',
};

var min = 0;
var max = 10000000;

var lower = 6000000;
var higher = 10000000;


export default function () {
  http.get('http://localhost:2020/v1/api/listing/' + (Math.floor(Math.random() * (max - min)) + min));
  sleep(1);
}

// export default function () {
//   http.post('http://localhost:2020/v1/api/listing/' + (Math.floor(Math.random() * (max - min)) + min) + '/reviews/' + (Math.floor(Math.random() * (higher - lower)) + lower));
//   sleep(1);
// }