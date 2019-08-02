#!/usr/bin/env node
console.log('Welcome to the Brain Games!');
import { getName } from '..';
const userName = getName();
console.log(`Hello, ${userName}!`);