import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  constructor() { }

  getUserData():UserModel {
    const user:UserModel = {
      username:"v4nz777",
      fullName:"Van Salido",
      contactNumber:"09977788852",
      lastShiftIn:"2023-06-15T13:45:30Z",
      lastShiftOut:"2023-06-15T23:45:30Z",
      jobTitle: "Technician",
      dateStarted:"",
      avatarURL:"assets/images/avatar-default.png",
      totalHoursRendered: 1000,
    }
    return user
  }
}

export interface UserModel {
  username:string;
  fullName:string;
  contactNumber:string;
  lastShiftIn:string;
  lastShiftOut:string;
  dateStarted:string;
  jobTitle:string;
  avatarURL:string;
  totalHoursRendered:number;

}
