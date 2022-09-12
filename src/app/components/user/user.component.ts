import {Component, OnInit} from '@angular/core';

import {User} from '../../Models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{
    //properties
    user: User;

    //methods
    constructor(){
      
    }

    ngOnInit(): void {
        this.user = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com'
        }
    }
}

