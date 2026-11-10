//creation de la classe
class Project {
    //constructor pour creer construire 
    constructor(nomProject, descriptionProject, prixProject, imgURLProject) {
        this.nom = nomProject;
        this.description = descriptionProject;
        this.prix = prixProject;
        this.imgURL = imgURLProject;

    }
}


//fonction pour ajouter un projet, prestation
function ajouterProject(){
    const form = document.getElementById('formProduct');

    if (form) {
        form.addEventListener("submit", function(event){
        event.preventDefault(); //pour anuler le rechargement auto de la page

        //1:recuperer les valeurs du formulaire
        let nom = document.getElementById('nom').value; //var1
        let description = document.getElementById('description').value; //var2
        let prix = document.getElementById('prix').value; //var3
        let imgURL = document.getElementById('imgURL').value; //var4
        console.log(nom, prix, description, imgURL);

        //2:regrouper les valeurs ds un objet
        let prestation = new Project(nom, description, prix,  imgURL); //(var1, var2, vra3, var4)
        console.log(prestation);

        //3:sauvegarder ds localstorage
        const listeProjects = JSON.parse(localStorage.getItem("listeProjects")) || [];
        listeProjects.push(prestation);

        localStorage.setItem("listeProjects", JSON.stringify(listeProjects));
        console.log(listeProjects);
        
    
        alert("Projet ajouté!")
        form.reset();

        
    })
    }
    
}

ajouterProject();



