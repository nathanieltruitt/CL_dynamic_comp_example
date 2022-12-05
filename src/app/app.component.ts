import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isOpened = false;
  mockData = [
    {
      title: 'Cool Card 1',
      body: 'Cool Card 1',
    },
    {
      title: 'Cool Card 2',
      body: 'Cool Card 2',
    },
    {
      title: 'Cool Card 3',
      body: 'Cool Card 3',
    },
    {
      title: 'Cool Card 4',
      body: 'Cool Card 4',
    },
    {
      title: 'Cool Card 5',
      body: 'Cool Card 5',
    },
  ];
  selectedData!: any;

  onModalOpen(data: any) {
    this.selectedData = data;
    this.isOpened = !this.isOpened;
  }
}
