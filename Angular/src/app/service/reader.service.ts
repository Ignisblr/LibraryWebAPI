import { Reader } from './reader.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReaderService {
  formData: Reader;
  readonly Url = 'http://localhost:5000/api';
  constructor(private http: HttpClient) {}

  postReader(formData: Reader) {
    return this.http.post(this.Url + '/readers', formData);
  }
}
