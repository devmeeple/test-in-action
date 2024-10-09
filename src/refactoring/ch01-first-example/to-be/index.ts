import { readFileSync } from 'node:fs';
import { statement } from './statment';

const invoices = JSON.parse(readFileSync('invoices.json', 'utf8'));
const plays = JSON.parse(readFileSync('plays.json', 'utf8'));

console.log(statement(invoices[0], plays));
