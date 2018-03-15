import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatExpansionModule, MatIconModule, MatInputModule, MatTabsModule} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
  ],
  exports: [
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
  ],
})

export class MaterialModule { }
