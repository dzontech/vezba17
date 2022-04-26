import { Component, OnInit } from '@angular/core';
import { NbaService } from '../nba.service';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css']
})
export class NbaComponent implements OnInit {

  nba:any;

  constructor(private service: NbaService) { }

  ngOnInit(): void {
    this.service.getNba().subscribe(data=> this.nba= data);
  }

}
