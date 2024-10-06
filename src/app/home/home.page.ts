import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  weatherData: any;
  city: string = 'São Paulo'; // Cidade padrão

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe(data => {
      this.weatherData = data;
    }, error => {
      console.error('Erro ao obter dados do clima:', error);
    });
  }
}
