import { Component, OnInit } from '@angular/core';
import {TourService} from "../../service/tour.service";
import {Tour} from "../../model/tour";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-tour-view',
  templateUrl: './tour-view.component.html',
  styleUrls: ['./tour-view.component.css']
})
export class TourViewComponent implements OnInit {
  tourForm! : FormGroup;
  id!: number;

  constructor(private tourService: TourService,
              private activatedRoute : ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap) =>{
      // @ts-ignore
      this.id = +paramMap.get('id');
      const tour = this.getTour(this.id);
      this.tourForm = new FormGroup({
        // @ts-ignore
        id : new FormControl(tour.id),
        // @ts-ignore
        name : new FormControl(tour.name),
        // @ts-ignore
        price : new FormControl(tour.price),
        // @ts-ignore
        description : new FormControl(tour.description),
      })
    })
  }

  ngOnInit(): void {
  }

  getTour(id: number){
    return this.tourService.findById(id);
  }

}
