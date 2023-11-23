import { Component } from '@angular/core';
import { COMMON_MODULES } from '@shared/constants/modules.constant';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  standalone: true,
  imports: [...COMMON_MODULES],
})
export class LandingComponent {}
