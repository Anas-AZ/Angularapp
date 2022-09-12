import { Component, OnInit, ViewChild } from '@angular/core';
import {User} from '../../Models/User';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;  
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data: any;

  newUser: User = {
    firstName: '',
    lastName: '',
    email: ''
  }



  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      console.log(data);
    });

    this.dataService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true ;  
    });

     
      
  }

  onSubmit({value, valid}: {value:User, valid:boolean}){
    if(!valid){
      console.log('Form is not valid');
    }
    else{
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.dataService.addUser(value);

      this.form.reset();
    }
  }


}
