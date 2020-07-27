import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css'],
})
export class CommandComponent implements OnInit {
  readonly ROOT_URL = 'http://localhost:4077/api';

  gets: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  getGets(): any {
    this.httpClient.get(this.ROOT_URL + '/commands').subscribe(
      (data) => {
        this.gets = data;
        console.log('Success communicating with Commander Web API', data);
      },
      (error) => console.log('Error communicating with Commander Web API', error)
    );

    return this.gets;
  }
}
