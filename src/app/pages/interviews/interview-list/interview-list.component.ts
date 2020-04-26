import { Component, OnInit } from '@angular/core';
import {LocalDataSource} from "ng2-smart-table";
import {JobCreateComponent} from "../../jobs/job-create/job-create.component";
import {GridConfigurationsService} from "../../../shared/services/grid-configurations.service";
import {ActivatedRoute, Router} from "@angular/router";
import {InterviewService} from "../interview.service";

@Component({
  selector: 'interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.scss']
})
export class InterviewListComponent implements OnInit {

  settings: any;
  interviews: any;
  source: any;
  constructor(
    private route: ActivatedRoute,
    private GridConfigurationsService: GridConfigurationsService,
    private InterviewService: InterviewService,
    private router: Router
  ) { }

  ngOnInit() {
    this.settings = this.GridConfigurationsService.getConfigurations()['interviews'];
    this.InterviewService.fetchInterviews().subscribe((response) => {
      this.interviews = response['responseData'];
      this.source = new LocalDataSource(this.interviews);

    }, error => console.log(error));
  }

  scheduleInterview() {
    this.router.navigate(['../interview/schedule',], {relativeTo: this.route});
  }

}
