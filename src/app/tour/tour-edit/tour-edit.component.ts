import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TourService} from "../../service/tour.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Tour} from "../../model/tour";

@Component({
  selector: 'app-tour-edit',
  templateUrl: './tour-edit.component.html',
  styleUrls: ['./tour-edit.component.css']
})
export class TourEditComponent implements OnInit {
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

  updateTour(id: number){
    const tour = this.tourForm.value;
    this.tourService.updateTour(id, tour);
    alert('Tour EDITED!')
  }






}
