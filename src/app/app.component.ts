import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public persona = "";
  public destinatario = '';
  private url = "https://mvvm-mvvm.azuremicroservices.io/api/persone"; //azure spring app 
  // private url = "https://mvvm.azurewebsites.net/api/HttpTrigger1?code=ryjcl40cNXh43zJzmCiKOx5Cq9uSV4MxdZ4fpypf5nAMAzFu1dx6Gw%3D%3D"; //azure function 
  // private url = "http://localhost:8080/api/persone"

  public list: string[] = [];

  public constructor(private readonly http: HttpClient){}

  add() {
    this.list.push(this.persona);
    this.persona = "";
  }

  fuckOff() {
    this.http.post(this.url, {data: this.list} ).subscribe((res: any) => {
      this.destinatario = res.data.toUpperCase();
    })
  }
}
