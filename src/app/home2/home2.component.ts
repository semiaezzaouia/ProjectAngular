import { Component } from '@angular/core';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-home2',
  standalone: true,
  imports: [TopBarComponent,MenuComponent],
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.css'
})
export class Home2Component {

}
