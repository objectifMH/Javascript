// DOMContentLoaded est déclenché lorsque le document HTML initial a été complètement chargé et analysé,
// sans attendre les feuilles de style, images et sous-trames pour terminer le chargement.
document.addEventListener("DOMContentLoaded", function(){

// on récupère la div contenant l'image :
myContenant = document.getElementById('contenantImg');

// on récupère l'image :
myImg = document.getElementById('monImage');
var myImgSrc = myImg.src;
// on cache l'image principal
myImg.setAttribute("hidden","hidden");


// on crée une image qui va servir de thumb
var imgThumb = document.createElement('img');
imgThumb.src = "./assets/uploads/photo.thumb.jpg";

//on insère notre thumb avant l'image principale
myImg.parentNode.insertBefore(imgThumb, myImg);
Object.assign(imgThumb.style,{margin:"0 auto", width:"50vw", border:"2px solid red" });

//on va écouter un événement click sur notre image
myImg.addEventListener("click", function(){
        var creation = createCadre();
    });

function createCadre(){
        // on crée une div
        myDiv = document.createElement('div');
        Object.assign(myDiv.style,{display:"flex", width:"100vw", height:"100vh",background:"rgba(48,215,205,0.2)",position:"absolute", border:"0px solid red",top:"0", right:"0",bottom:"0",left:"0", margin:"auto" });
        //on place cette div au parent du parent de  notre image, il sera le frère de notre parent
        myImg.parentNode.parentNode.appendChild(myDiv);

        //on crée une image qui sera afficher sur notre nouvelle div
        var imgCadre = document.createElement('img');
        imgCadre.src = myImgSrc;
        myContenant.setAttribute("hidden","hidden");

        // cette image devient un enfant de notre nouvelle div
        myDiv.appendChild(imgCadre);
        Object.assign(imgCadre.style,{margin:"auto", width:"80vw",height:"80vh",minHeight:"400px",minWidth:"800px"  });

        // on crée un écouteur d'évènement sur notre div
        myDiv.addEventListener('click', function(){
        //quand on click sur la div elle disparait car on on supprime l'objet
        this.remove();

        // on réaffiche notre div contenant
        myContenant.removeAttribute("hidden");
    });

}

    //on va maintenant créer une image qui va charger en arrière plan l'img complète
    var fullImg = document.createElement('img');
    fullImg.src = myImgSrc;
    Object.assign(fullImg.style,{width:"50vw", border:"2px solid red" });
    fullImg.addEventListener('load', function () {

        // quand l'image est chargée on affecte à notre image la meme source
        myImg.src = this.src;
        myImg.removeAttribute("hidden");
        imgThumb.remove();
    });

});





