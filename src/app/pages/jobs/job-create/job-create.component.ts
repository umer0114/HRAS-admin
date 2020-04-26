import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {LocalDataSource} from "ng2-smart-table";
import {GridConfigurationsService} from "../../../shared/services/grid-configurations.service";
@Component({
  selector: 'job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.scss']
})
export class JobCreateComponent implements OnInit {

  markingCriteriaSettings: any;
  markingSchemes: any;
  schemeName: string;
  defaultMarkingCriteria: any = [
    {
      id: 1,
      criteriaName: 'Problem Solving',
      totalPoints: 5
    },
    {
      id: 2,
      criteriaName: 'Communication Skills',
      totalPoints: 5
    }
  ];
  addNewScheme: boolean = false;
  markingCriteriaSource: LocalDataSource;
  constructor(
    private modal: NgbActiveModal,
    private GridConfigurationsService: GridConfigurationsService
  ) { }

  ngOnInit() {
    this.markingCriteriaSource = new LocalDataSource(this.defaultMarkingCriteria);
    this.markingCriteriaSettings = this.GridConfigurationsService.getConfigurations()['markingCriteria'];
    this.markingSchemes = ['default1', 'default2'];
  }

  addScheme() {
    this.addNewScheme = true;
  }

  submitScheme() {
    this.markingSchemes.push(this.schemeName);
    this.addNewScheme = false;
    this.schemeName = '';
    this.markingCriteriaSource = new LocalDataSource(this.defaultMarkingCriteria);
  }

}
