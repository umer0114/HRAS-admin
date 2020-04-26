import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { UsersComponent } from './candidates/candidate-list/users.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CandidateProfileComponent } from './candidates/candidate-profile/candidate-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RemarksComponent } from './candidates/candidate-profile/remarks/remarks.component';
import { ProfileInfoComponent } from './candidates/candidate-profile/profile-info/profile-info.component';
import {TranslateModule} from "@ngx-translate/core";
import { UserInfoComponent } from './candidates/candidate-profile/user-info/user-info.component';
import {sharedModule} from "../shared/shared.module";
import { JobsListComponent } from './jobs/jobs-list/jobs-list.component';
import { JobCreateComponent } from './jobs/job-create/job-create.component';
import {FormsModule} from "@angular/forms";
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';
import { InterviewListComponent } from './interviews/interview-list/interview-list.component';
import { InterviewDetailComponent } from './interviews/interview-detail/interview-detail.component';
import { ScheduleInterviewComponent } from './interviews/schedule-interview/schedule-interview.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    Ng2SmartTableModule,
    TranslateModule,
    sharedModule,
    FormsModule
  ],
  declarations: [
    PagesComponent,
    UsersComponent,
    CandidateProfileComponent,
    PageNotFoundComponent,
    RemarksComponent,
    ProfileInfoComponent,
    UserInfoComponent,
    JobsListComponent,
    JobCreateComponent,
    JobDetailComponent,
    InterviewListComponent,
    InterviewDetailComponent,
    ScheduleInterviewComponent
  ],
  entryComponents: [JobCreateComponent],
})
export class PagesModule {
}
