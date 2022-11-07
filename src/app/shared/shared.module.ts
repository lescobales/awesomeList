import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BorderCardDirective } from './directives/border-card.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BorderCardDirective,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    NgxBootstrapModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    NgxBootstrapModule,
    BorderCardDirective,
    SidenavComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
