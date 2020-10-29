import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TwoService {

  // constructor(private readonly oneService: OneService) { }

  message() {
    console.log('TwoService -> message called');
  }
}
