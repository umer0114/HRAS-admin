import { Component, OnInit } from '@angular/core';
import {LocalDataSource} from "ng2-smart-table";
import {GridConfigurationsService} from "../../../shared/services/grid-configurations.service";
import {CandidatesService} from "../../candidates/candidates.service";

@Component({
  selector: 'job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {

  users: any = [];
  settings: any;
  source: LocalDataSource;

  constructor(
    private GridConfigurationsService: GridConfigurationsService,
    private CandidatesService: CandidatesService) {
  }

  ngOnInit() {
    this.settings = this.GridConfigurationsService.getConfigurations()['shortlistedCandidates'];
    this.CandidatesService.fetchCandidates().subscribe((response) => {
      this.users = response['responseData'];
      this.source = new LocalDataSource(this.users);

    }, error => console.log(error));
  }
}
