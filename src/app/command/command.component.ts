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

  constructor(
    private httpClient: HttpClient,
    // private Id: number,
    // private Command: string,
    // private Description: string
  ) {}

  ngOnInit(): void {}

  getGets(): void {
    this.gets = this.httpClient.get(this.ROOT_URL + '/commands');
  }
}
