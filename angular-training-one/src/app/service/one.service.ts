import { Injectable } from '@angular/core';
import { TwoService } from './two.service';

@Injectable({
  providedIn: 'root'
})
export class OneService {

  // constructor(private readonly twoService: TwoService) { }
  
  message() {
    console.log('OneService -> message called');
  }
}
