import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCrown, faAngleLeft, faEnvelope, faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'top-navigation',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './top-navigation.component.html',
  styleUrl: './top-navigation.component.scss'
})
export class TopNavigationComponent {
  faCoffee = faCrown;
  faAngleLeft = faAngleLeft;
  faEnvelope = faEnvelope;
  faBell = faBell;
  faMagnifyingGlass = faMagnifyingGlass;
  navBarOpen: boolean = true;
  closeNavbar() {
    this.navBarOpen = false;
  }
}