//boutton scrolltop
const btnScroll = document.querySelector('.scroll-top');
console.log(btnScroll);

if (btnScroll) {
    btnScroll.addEventListener("click", function(){
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    })
};


//pour afficher automatiquement la liste des prestations, projets
function afficherPrestations() {
const container = document.querySelector('.project-container');
console.log(container);


//pour entrer les produits de facon dynamique à partir du form addproduct!
     let listeProjects = JSON.parse(localStorage.getItem("listeProjects")) || [];
    console.log("liste des projets a partir du LS", listeProjects);


//AJOUTER DES PRODUITS sans reconstruire toute la liste de produits
    if (container) {
        listeProjects.forEach((project)=>{
        const nouveauProjet = document.createElement("article");
        nouveauProjet.classList.add("product-card"); 
        //.classlist pour acces a la liste et .add pour ajouter

        listeProjects.innerHTML = `
        <h3 class="h3">${project.nom}</h3>
            <img src=${project.imgURL} alt="${project.nom}">
            <p>${project.description}</p>
            <p class="price">${project.prix} £</p>
            <button type="button">Acheter</button>
        `
        container.appendChild(nouveauProjet); 
        //.appendChid rajoute un noeud au dernier noeud enfant
    })
    }
    

}
afficherPrestations();
