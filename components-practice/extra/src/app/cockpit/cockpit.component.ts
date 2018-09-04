import { Component, OnInit,EventEmitter,Output, ViewChild } from '@angular/core';
//import { EventEmitter } from '../../../node_modules/protractor';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpcreated') blueprintCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  newServerName="";
  newServerContent="";
  @ViewChild('users') servercontents;

  constructor() { }

  onAddServer(servers) {
    this.serverCreated.emit({
      serverName:servers.value,
      serverContent:this.servercontents.nativeElement.value
    });
      }
  onAddBlueprint(servers) {
    this.blueprintCreated.emit({
      serverName:servers.value,
      serverContent:this.servercontents.nativeElement.value
    })
    
  }

  ngOnInit() {
  }

}
