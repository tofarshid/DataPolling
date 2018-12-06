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
import { MasterContainerComponent } from './master-container/master-container.component';
import { MyNavComponent } from './my-nav/my-nav.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'RestApi',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MasterContainerComponent
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
    RouterModule.forRoot(routes),
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule

  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
