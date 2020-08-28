import { Reader } from './reader.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {
  formData: Reader;

  constructor() { }
}
