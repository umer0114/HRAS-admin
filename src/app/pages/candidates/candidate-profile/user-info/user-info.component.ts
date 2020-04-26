import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss', '../candidate-profile.component.scss']
})
export class UserInfoComponent implements OnInit {
  @Input() name: string;
  @Input() title: string;
  @Input() expertise: string;

  constructor() { }

  ngOnInit() {
    console.log(this.expertise);
  }

}
