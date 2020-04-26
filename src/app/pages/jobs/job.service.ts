import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalConfigurationsService} from "../../global-configurations.service";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private GlobalConfigurationsService: GlobalConfigurationsService, private http: HttpClient) { }

  apiUrl: string = this.GlobalConfigurationsService.getApiUrl();

  fetchJobs() {
    return this.http
      .get(
        this.apiUrl + 'job/jobs'
      );
  }
}
