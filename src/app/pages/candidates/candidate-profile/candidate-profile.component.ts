import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {CandidatesService} from "../candidates.service";
// import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'user-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.scss']
})
export class CandidateProfileComponent implements OnInit {
  candidateInformation: any;
  name: string;
  title: string;
  expertise: string;
  id: number;

  constructor(private CandidatesService: CandidatesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.initialize();
    });
  }

  initialize() {
    this.CandidatesService.getCandidateByID(this.id).subscribe(
      candidateInfo => {
        this.candidateInformation = candidateInfo['responseData'];
        this.name = this.getFullName(this.candidateInformation);
        this.title = this.candidateInformation.title;
        this.expertise = this.candidateInformation.candidateExpertise.length ?
          this.candidateInformation.candidateExpertise.map(expertise => expertise.expertiseName)
            .join(' | ') : '';

      }
    );
  }

  getFullName({firstName, lastName}) {
    return firstName + ' ' + lastName;
  }

}
