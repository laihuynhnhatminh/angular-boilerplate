import { Component } from '@angular/core';
import { COMMON_MODULES } from 'src/app/shared/constants/modules.constant';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [...COMMON_MODULES],
  standalone: true,
})
export class HomePageComponent {}
