import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { TestComponent } from './test/test.component';
import { StaffControlComponent } from './staff-control/staff-control.component';
import {MatTableModule} from '@angular/material/table';
import { ScheduleComponent } from './schedule/schedule.component';
import { UserControlComponent } from './user-control/user-control.component';
import {DialogContentExampleDialogComponent} from './dialog-content-example-dialog/dialog-content-example-dialog.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        }),
        MatTableModule,
        MatButtonModule
    ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    TestComponent,
    StaffControlComponent,
    ScheduleComponent,
    UserControlComponent,
    DialogContentExampleDialogComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
