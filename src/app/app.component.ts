import { Component } from '@angular/core';
import { MainLayoutComponent } from '@core/layout/main-layout/main-layout.component';
import { COMMON_MODULES } from '@shared/constants/modules.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [...COMMON_MODULES, MainLayoutComponent],
  standalone: true,
})
export class AppComponent {}
