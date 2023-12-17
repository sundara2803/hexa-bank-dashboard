import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAdd, faMoon, faInfo, faGear, faArrowsUpDown, faUserAstronaut, faCreditCard, faListUl, faChartSimple, faDiceFour } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'left-navigation',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './left-navigation.component.html',
  styleUrl: './left-navigation.component.scss'
})

export class LeftNavigationComponent {
  faAdd = faAdd;
  faArrowsUpDown = faArrowsUpDown;
  faUserAstronaut = faUserAstronaut;
  menuItems: MenuItem[] = [
    { label: 'Overview', iconClass: faDiceFour },
    { label: 'Transactions', iconClass: faListUl },
    { label: 'Analytics', iconClass: faChartSimple },
    { label: 'Cards', iconClass: faCreditCard }
  ];
  generalItems: MenuItem[] = [
    { label: 'Settings', iconClass: faGear },
    { label: 'Help/Support', iconClass: faInfo },
    { label: 'Dark Mode', iconClass: faMoon },
  ];

}
interface MenuItem {
  label: string;
  iconClass: any;
}

