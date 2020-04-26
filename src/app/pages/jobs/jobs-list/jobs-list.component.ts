import { Component, OnInit } from '@angular/core';
import {LocalDataSource} from "ng2-smart-table";
import {GridConfigurationsService} from "../../../shared/services/grid-configurations.service";
import {JobService} from "../job.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {JobCreateComponent} from "../job-create/job-create.component";
import {CandidatesService} from "../../candidates/candidates.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {

  settings: any;
  jobs: any;
  source: any;
  constructor(
    private GridConfigurationsService: GridConfigurationsService,
    private JobService: JobService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.settings = this.GridConfigurationsService.getConfigurations()['jobs'];
    this.JobService.fetchJobs().subscribe((response) => {
      this.jobs = response['responseData'];
      this.source = new LocalDataSource(this.jobs);

    }, error => console.log(error));
  }

  createJob() {
    this.modalService.open(JobCreateComponent, {size: "lg"});
  }

  navigateToJobDetailScreen({data}) {
    this.router.navigate(['../job/' + data.candidateId + '/shortlist',], {relativeTo: this.route});
  }
}
