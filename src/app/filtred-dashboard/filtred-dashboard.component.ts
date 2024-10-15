import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {MenuComponent} from "../menu/menu.component";
import {TopBarComponent} from "../top-bar/top-bar.component";

@Component({
  selector: 'app-filtred-dashboard',
  standalone: true,
    imports: [
        FooterComponent,
        MenuComponent,
        TopBarComponent
    ],
  templateUrl: './filtred-dashboard.component.html',
  styleUrl: './filtred-dashboard.component.css'
})
export class FiltredDashboardComponent {

}
