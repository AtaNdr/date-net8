import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  standalone: true,
  imports: [],
  templateUrl: './test-errors.component.html',
  styleUrl: './test-errors.component.css'
})
export class TestErrorsComponent {
  baseUrl = 'https://localhost:5001/api/';
  private http = inject(HttpClient);
  validationErrors: string[] = [];

  get400Error(){
    this.http.get(this.baseUrl + 'buggy/bad-request').subscribe({
      next: response => console.log('OK', response),
      error: error => console.log('err', error)
    })
  }
  get401Error(){
    this.http.get(this.baseUrl + 'buggy/auth').subscribe({
      next: response => console.log('OK', response),
      error: error => console.log('err', error)
    })
  }
  get404Error(){
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe({
      next: response => console.log('OK', response),
      error: error => console.log('err', error)
    })
  }
  get500Error(){
    this.http.get(this.baseUrl + 'buggy/server-error').subscribe({
      next: response => console.log('OK', response),
      error: error => console.log('err', error)
    })
  }
  get400ValidationError(){
    this.http.post(this.baseUrl + 'account/register', {}).subscribe({
      next: response => console.log('OK', response),
      error: error => {
        console.log('err', error)
        this.validationErrors = error;
      }
    })
  }

}
