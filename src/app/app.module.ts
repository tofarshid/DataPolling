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
import { NgProfileComponent } from './ng-profile/ng-profile.component';
import { CloudComponent } from './cloud/cloud.component';

import { NgProfileModule } from './ng-profile/ngprofile.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ngProfile',
    pathMatch: 'full'
  },
  {
   path: 'ngProfile',
    component: NgProfileComponent
  },
  {
    path: 'cloud',
    component: CloudComponent
  }, 
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MasterContainerComponent,
    NgProfileComponent,
    CloudComponent
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
    MatBadgeModule,
    NgProfileModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
