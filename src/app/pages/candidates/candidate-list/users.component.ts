import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {GridConfigurationsService} from "../../../shared/services/grid-configurations.service";
import {UsersModel, CandidatesService} from "../candidates.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any = [];
  settings: any;

  source: LocalDataSource;

  constructor(
    private GridConfigurationsService: GridConfigurationsService,
    private CandidatesService: CandidatesService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.settings = this.GridConfigurationsService.getConfigurations()['candidates'];
    this.CandidatesService.fetchCandidates().subscribe((response) => {
        this.users = response['responseData'];
      this.source = new LocalDataSource(this.users);

    }, error => console.log(error));
  }

  navigateToUserProfile({data}) {
    this.router.navigate(['../user/' + data.candidateId,], {relativeTo: this.route});
  }

}
