import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes  }from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';

import { FormsModule } from '@angular/forms';

import { 
    MatDatepickerModule,
    MatDialogModule, 
    MatListModule, 
    MatPaginatorModule, 
    MatProgressSpinnerModule, 
    MatSelectModule, 
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule


 } from '@angular/material';


// add
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgProfileComponent } from './ng-profile/ng-profile.component';

import { NgProfileModule } from './ng-profile/ngprofile.module';

const routes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    NgProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    NgProfileModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
