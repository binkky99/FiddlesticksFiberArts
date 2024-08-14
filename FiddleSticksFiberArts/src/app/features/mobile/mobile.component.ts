import { Component } from '@angular/core';
import { constants } from '../../constants';

@Component({
  selector: 'app-mobile',
  standalone: true,
  imports: [],
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.css'
})
export class MobileComponent {
  emailString = `mailto:${constants.email}?Subject=Information`;
}
