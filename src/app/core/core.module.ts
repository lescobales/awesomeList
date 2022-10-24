import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from '../public/public.module';
import { ProtectedModule } from '../protected/protected.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterbarComponent } from './components/footerbar/footerbar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterbarComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    PublicModule,
    ProtectedModule
  ],
  exports: [
    NavbarComponent,
    FooterbarComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
     throw new Error('CoreModule is already loaded.');
    }
   }
 }
