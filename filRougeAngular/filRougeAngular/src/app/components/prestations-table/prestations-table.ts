import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestations-table',
  imports: [],
  templateUrl: './prestations-table.html',
  styleUrl: './prestations-table.css',
})
export class PrestationsTable {
  //constructor(private router: Router){}
  private router = inject(Router); //pour nouvelles version d'angular


//declarer un tableau ds ts
prestationsTab:any[]=[
{
  _id:1, name:"Mariage", description: "forfait sur mesure", price: 500
},{
  _id:2, name:"Anniversaire", description: "forfait à la journée", price: 150
},{
  _id:3, name:"Professionnelle", description: "groupe et portrait", price: 300
},{
  _id:4, name:"Scolaire", description: "photo de classe", price: 8
}

];

 display(id:any){
  this.router.navigate(["/prestationInfo"]);

}

goToEdit(id:any){
  this.router.navigate(["/editPrestations"]);
}
deleteproduct(id:any){
  console.log("prestation supprimée!");
  
}


}
