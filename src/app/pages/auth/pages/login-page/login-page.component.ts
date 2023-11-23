import { Component } from '@angular/core';
import { DefaultLoginComponent } from '@page/auth/components/default-login/default-login.component';
import { COMMON_MODULES } from '@shared/constants/modules.constant';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  standalone: true,
  imports: [...COMMON_MODULES, DefaultLoginComponent],
})
export class LoginPageComponent {}
