import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {MenuComponent} from "../menu/menu.component";
import {TopBarComponent} from "../top-bar/top-bar.component";

@Component({
  selector: 'app-users',
  standalone: true,
    imports: [
        FooterComponent,
        MenuComponent,
        TopBarComponent
    ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

}
