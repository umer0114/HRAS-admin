import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './candidates/candidate-list/users.component';
import {CandidateProfileComponent} from './candidates/candidate-profile/candidate-profile.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {JobsListComponent} from './jobs/jobs-list/jobs-list.component';
import {JobDetailComponent} from './jobs/job-detail/job-detail.component';
import {InterviewListComponent} from './interviews/interview-list/interview-list.component';
import {InterviewDetailComponent} from './interviews/interview-detail/interview-detail.component';
import {ScheduleInterviewComponent} from './interviews/schedule-interview/schedule-interview.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'users',
      component: UsersComponent,
    },
    {
      path: 'user/:id',
      component: CandidateProfileComponent,
    },
    {
      path: 'jobs',
      component: JobsListComponent,
    },
    {
      path: 'job/:id/shortlist',
      component: JobDetailComponent,
    },
    {
      path: 'interviews',
      component: InterviewListComponent,
    },
    {
      path: 'interview/:id',
      component: InterviewDetailComponent,
    },
    {
      path: 'interview/schedule',
      component: ScheduleInterviewComponent,
    },
    {
      path: '**',
      component: PageNotFoundComponent,
    },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
