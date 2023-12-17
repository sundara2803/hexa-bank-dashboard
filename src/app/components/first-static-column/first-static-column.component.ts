import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleLeft, faAngleRight, faAdd, faPaperPlane, faMoneyBillTransfer, faClock, faEllipsis, faGamepad } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'first-static-column',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './first-static-column.component.html',
  styleUrl: './first-static-column.component.scss'
})
export class FirstStaticColumnComponent {
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faAdd = faAdd;
  faPaperPlane = faPaperPlane;
  faMoneyBillTransfer = faMoneyBillTransfer;
  faClock = faClock;
  faEllipsis = faEllipsis;
  faGamepad = faGamepad;
  imageURL = "assets/images/card.png";
}
