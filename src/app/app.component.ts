import { Component,OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Current, Location, WeatherData } from './models/weather.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  weatherData?: WeatherData;
  cityName:string='Craiova'; //Default city
  constructor(private weatherApi: WeatherService) { }

  ngOnInit():void {
    this.getWeatherData(this.cityName);
    this.cityName='';
  }
onSubmit(){
this.getWeatherData(this.cityName);
this.cityName='';
}
private getWeatherData(cityName:string){
  this.weatherApi.getWeather(cityName)
    .subscribe({
      next: (response) => {
this.weatherData= response;

        console.log(response);
      }
    });
}
}
