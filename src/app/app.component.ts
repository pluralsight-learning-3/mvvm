import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  destinatario = '';
  private url = "https://mvvm-mvvm.azuremicroservices.io/api/persone"; //azure spring app 
  // private url = "https://mvvm.azurewebsites.net/api/HttpTrigger1?code=ryjcl40cNXh43zJzmCiKOx5Cq9uSV4MxdZ4fpypf5nAMAzFu1dx6Gw%3D%3D"; //azure function 

  public constructor(private readonly http: HttpClient){}

  fuckOff() {
    this.http.post(this.url, {data: ["Domenico", "Mancino"]} ).subscribe((res: any) => {
      this.destinatario = res.res.toUpperCase();
    })
  }
}
