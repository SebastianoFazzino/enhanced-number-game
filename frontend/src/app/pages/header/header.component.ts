import {Component} from '@angular/core';
import {faClover} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected faClover: IconDefinition = faClover;
}
