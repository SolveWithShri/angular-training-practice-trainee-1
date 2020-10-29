import { Injectable } from '@angular/core';

@Injectable()
export class RandomService {

  private readonly value: number;

  constructor() {
    console.log('RandomService -> constructor');
    this.value = Math.floor(Math.random() * 100) + 1;
  }

  getValue(): number {
    return this.value;
  }
}
