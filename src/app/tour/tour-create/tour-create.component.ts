import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TourService} from "../../service/tour.service";

@Component({
  selector: 'app-tour-create',
  templateUrl: './tour-create.component.html',
  styleUrls: ['./tour-create.component.css']
})
export class TourCreateComponent implements OnInit {
  tourForm: FormGroup  = new FormGroup({
    id : new FormControl(null, Validators.required),
    name : new FormControl(null, Validators.required),
    price : new FormControl(null, Validators.required),
    description : new FormControl(null, Validators.required),

  })

  constructor(private tourService: TourService) { }

  ngOnInit(): void {
  }

  createTour() {
    const tour = this.tourForm.value;
    this.tourService.saveTour(tour);
    alert('Tour CREATED!')
  }
}
