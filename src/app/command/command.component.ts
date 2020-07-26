import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {
  Id: number;
  Command: string;
  Description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
