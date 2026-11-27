import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-table',
  imports: [],
  templateUrl: './users-table.html',
  styleUrl: './users-table.css',
})
export class UsersTable {
  //constructor(private router: Router){}
  private router = inject(Router); //pour nouvelles version d'angular


//declarer un tableau ds ts
usersTab:any[]=[
{
  _id:1, name:"Marion", email: "marion@gmail.com", role: "client"
},{
  _id:2, name:"Randy", email: "randy@gmail.com", role: "client"
},{
  _id:3, name:"Hugo", email: "hugo@gmail.com", role: "client"
},{
  _id:4, name:"Mélina", email: "melina@gmail.com", role: "client"
}

];

goToEdit(id:any){
  this.router.navigate(["/editUsers"]);
}
deleteproduct(id:any){
  console.log("user supprimé!");
  
}

}

