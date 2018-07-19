import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  userObject: Object;
  allUsers: Object;
  objectId: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.objectId = '';
    this.api.getAllUsers().subscribe(
      data => {
        this.allUsers = data;
      }
    );
  }

  getUser() {
    this.api.getUserById(this.objectId).subscribe(
      data => {
        this.userObject = data;
        console.log(data);
      }
    );
  }
}
