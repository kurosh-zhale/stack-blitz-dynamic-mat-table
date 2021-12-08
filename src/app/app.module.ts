import { NgModule, TemplateRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// dynamic-table
import { DynamicMatTableModule } from 'dynamic-mat-table';
// material modules
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { SelectableTableComponent } from './selectable-table/selectable-table.component';

const MaterialModules = [
  MatIconModule,
  MatTableModule,
  MatSliderModule,
  MatInputModule,
  MatExpansionModule,
  MatCardModule,
  MatCheckboxModule,
  MatButtonModule,
  MatTabsModule,
  MatToolbarModule,
  MatButtonToggleModule,
]

@NgModule({
  declarations: [
    AppComponent,
    SimpleTableComponent,
    SelectableTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DynamicMatTableModule,
    ...MaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
