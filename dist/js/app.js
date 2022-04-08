import { Negociacao } from './models/Negociacao.js';
const negociacao = new Negociacao(new Date(), 12, 100);
console.log(negociacao.data);
