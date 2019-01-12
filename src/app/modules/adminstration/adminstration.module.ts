import { NgModule } from '@angular/core';
import { AdminstrationRoutingModule } from './adminstarion-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  MatProgressSpinnerModule,
  MatIconModule,
  MatButtonModule,
  MatPaginatorModule,
  MatTableModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    AdminstrationRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule
  ],
  exports: [LoginComponent]
})
export class AdminstrationModule {}
