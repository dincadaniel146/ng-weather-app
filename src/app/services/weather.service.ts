import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = '0447c007532444c79f8173831231005';
  private apiUrl = 'https://api.weatherapi.com/v1';

  constructor( private http: HttpClient) { }

  getWeather(location: string): Observable<WeatherData> {
    const url = `${this.apiUrl}/forecast.json?key=${this.apiKey}&q=${location}&days=1&aqi=no&alerts=no`;
    return this.http.get<WeatherData>(url)
  }

  }
