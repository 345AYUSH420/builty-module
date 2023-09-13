import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  year = [
    { year: '2022-2023' },
    { year: '2021-2022' },
    { year: '2020-2021' },
    { year: '2019-2020' },
  ];
}
