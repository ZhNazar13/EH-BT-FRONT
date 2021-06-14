import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {UserProfileComponent} from '../../user-profile/user-profile.component';
import {TableListComponent} from '../../table-list/table-list.component';
import {TypographyComponent} from '../../typography/typography.component';
import {IconsComponent} from '../../icons/icons.component';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {UpgradeComponent} from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {CatalogSubjectControlComponent} from '../../catalog-subject-control/catalog-subject-control.component';
import {SubjectControlDialogComponent} from '../../catalog-subject-control/subject-control-dialog/subject-control-dialog.component';
import {UserControlComponent} from '../../user-control/user-control.component';
import {UserControlDialogComponent} from '../../user-control/user-control-dialog/user-control-dialog.component';
import {StaffControlComponent} from '../../staff-control/staff-control.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {TeacherSchedulerComponent} from '../../schedule-control/teacher-scheduler.component';
import {LessonItemComponent} from '../../schedule-control/lesson-item/lesson-item.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatTableModule,
        MatDialogModule,
        MatPaginatorModule,
        MatCardModule,
        MatToolbarModule
    ],
    declarations: [
        DashboardComponent,
        UserProfileComponent,
        TableListComponent,
        TypographyComponent,
        IconsComponent,
        NotificationsComponent,
        UpgradeComponent,
        UserControlComponent,
        UserControlDialogComponent,
        CatalogSubjectControlComponent,
        SubjectControlDialogComponent,
        StaffControlComponent,
        TeacherSchedulerComponent,
        LessonItemComponent
    ]
})

export class AdminLayoutModule {
}
