import { Injectable } from '@angular/core';
import {Tour} from "../model/tour";

@Injectable({
  providedIn: 'root'
})
export class TourService {
  tours: Tour[] = [
    {id: 1,
      name: 'Sapa',
      price: 3000,
      description: 'Sapa is in Vietnam'},
    {id: 2,
      name: 'Ninh Binh',
      price: 4000,
      description: 'Ninh Binh is in Vietnam'},
    {id: 3,
      name: 'Moc Chau',
      price: 4000,
      description: 'Moc Chau is in Vietnam'},
  ];
  constructor() { }

  getAll(){
    return this.tours;
  }

  saveTour(tour: Tour){
    this.tours.push(tour);
  }

  findById(id : number){
   return this.tours.find(tour => tour.id === id);
  }

  updateTour(id: number, tour: Tour){
    for (let i = 0; i < this.tours.length; i++){
      if (this.tours[i].id === id) {
        this.tours[i] = tour;
      }
    }
  }

  deleteTour(id: number) {
    this.tours = this.tours.filter(tour => {
      return tour.id != id;
    })
  }
}
