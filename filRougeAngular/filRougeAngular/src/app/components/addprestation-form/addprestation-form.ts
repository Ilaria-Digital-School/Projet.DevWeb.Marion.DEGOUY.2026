import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-addprestation-form',
  imports: [FormsModule],
  templateUrl: './addprestation-form.html',
  styleUrl: './addprestation-form.css',
})

export class AddprestationForm {
  prestations:any[]=[];
  prestation:any={};

  addPrestation(prestationForm:NgForm){
    console.log(this.prestation);

    //ajouter la nouvelle prestation
    this.prestations= JSON.parse(localStorage.getItem("prestationsList") || "[]");
    this.prestations.push(this.prestation);
    localStorage.setItem("prestationsList", JSON.stringify(this.prestations));
  
  }
}

