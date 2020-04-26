import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {GlobalConfigurationsService} from "../../global-configurations.service";

@Injectable({
  providedIn: 'root'
})

export class CandidatesService {
  constructor(private http: HttpClient, private GlobalConfigurationsService: GlobalConfigurationsService) { }

  apiUrl: string = this.GlobalConfigurationsService.getApiUrl();

  fetchCandidates() {
    return this.http
      .get(
        this.apiUrl + 'candidate/candidates'
      );

    // return dummyResponse;
  }

  getCandidateByID(id) {
    return this.http
      .get(
        this.apiUrl + 'candidate/' + id
      );
  }

  uploadImage(file: File) {
    return this.http
      .get(
        this.apiUrl + 'candidate/'
      );
  }
}

export interface UsersModel {
  name: string,
  title: string,
  id: number
}

export interface CandidatesModel {
  name: string,
  title: string,
  id: number
}
