import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../models/nba';
import { NbaService } from '../nba.service';

@Component({
  selector: 'app-nbasingle',
  templateUrl: './nbasingle.component.html',
  styleUrls: ['./nbasingle.component.css']
})
export class NbasingleComponent implements OnInit {

  nbasingle!: Team;

  constructor(private service: NbaService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getNba().subscribe(data => {
      this.route.params.subscribe(value=> {
        this.nbasingle = data.teams[value['id']-1]
      })
    })

    
  }

}
