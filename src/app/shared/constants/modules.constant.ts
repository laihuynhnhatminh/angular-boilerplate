import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from 'src/app/core/core.module';

export const COMMON_MODULES = [
  CommonModule,
  CoreModule,
  HttpClientModule,
  RouterModule,
];
