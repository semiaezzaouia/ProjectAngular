import { Component } from '@angular/core';
import {TopBarComponent} from '../top-bar/top-bar.component';
import {MenuComponent} from '../menu/menu.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-general-dashboard',
  standalone: true,
  imports: [
    TopBarComponent,
    MenuComponent,
    FooterComponent
  ],
  templateUrl: './general-dashboard.component.html',
  styleUrl: './general-dashboard.component.css'
})
export class GeneralDashboardComponent {

}
