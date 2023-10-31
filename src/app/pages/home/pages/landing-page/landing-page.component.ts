import { Component } from '@angular/core';
import { COMMON_MODULES } from 'src/app/shared/constants/modules.constant';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  imports: [...COMMON_MODULES],
  standalone: true,
})
export class LandingPageComponent {}
