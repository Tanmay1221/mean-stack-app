import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendAngular';
  readonly baseURL = 'http://backend:3000'
  message: any
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.baseURL).subscribe((res) => {
      this.message = res
      console.log(this.message)
    })
    // this.http.get(this.baseURL).subscribe((res) => {
    //   //this.message = res.toString()
    //   console.log(this.message)
    // })
  }
}
