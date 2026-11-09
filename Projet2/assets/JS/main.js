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

//pour afficher automatiquement une liste de produits
function afficherProduits() {
const container = document.querySelector('.product-container');
console.log(container);



// POUR TOUTE LES PRESTATIONS/ LISTE! pour declarer les valeurs
    let produits = [
        {
        nom: "mariage",
        description: "forfait mariage complet",
        prix: 500 ,
        imgURL: "assets/images/smiln32-ai-généré 8138112_640.webp", 
        },
        {
        nom: "naissance",
        description: "grossesse, naissance et post partum, tout est possible!",
        prix: 100,
        imgURL: "assets/images/conexaocabeca-enceinte-2763934_640_webp.webp",
        },
        {
        nom: "Nature",
        description: "pour vos animaux ou vos voyages",
        prix: 50,
        imgURL: "assets/images/images7.webp",  
        },
        {
        nom: "portrait d'entreprise",
        description: "forfait",
        prix: 150,
        imgURL: "assets/images/erwinbosman-chef-10264466_640.webp",   
        }

    ];
    console.log(produits);

//CREATION ELEMENT PRESTATION 
//IDEAL POUR AJOUTER DES PRODUITS sans reconstruire toute la liste de produits
    if (container) {
        produits.forEach((produit)=>{
        const article = document.createElement("article");
        article.classList.add("product-card"); 
        //.classlist pour acces a la liste et .add pour ajouter

        article.innerHTML = `
        <h3 class="h3">${produit.nom}</h3>
            <img src=${produit.imgURL} alt="${produit.nom}">
            <p>${produit.description}</p>
            <p class="price">${produit.prix} £</p>
            <button type="button">Me contacter</button>
        `
        container.appendChild(article); 
        //.appendChid rajoute un noueud au dernier noeud enfant
    })
    }
    

}
afficherProduits();


//creation page addProduct fonctions
function ajouterProduit(){
    const form = document.getElementById('formProduct');

    form.addEventListener("submit", function(event){
        event.preventDefault(); //pour anuler le rechargement auto de la page
        let nom = document.getElementById('nom').value;
        let prix = document.getElementById('prix').value;
        let description = document.getElementById('description').value;
        let imgURL = document.getElementById('imgURL').value;
        console.log(nom, prix, description, imgURL);
        //alert("produit ajouté!");
    })
}

ajouterProduit();