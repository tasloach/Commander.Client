import { Component, OnInit } from '@angular/core';
import { CommandComponent } from '../command/command.component';

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css'],
})
export class CommandListComponent implements OnInit {
  Commands: CommandComponent[];

  constructor() {}

  ngOnInit(): void {}
}
