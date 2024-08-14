import { Component } from '@angular/core';
import { constants } from '../../constants';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.css'
})
export class DesktopComponent {
  emailString = `mailto:${constants.email}?Subject=Information`;
}
