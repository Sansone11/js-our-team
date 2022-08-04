console.log('JS ok');
// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// nome           role                    image
// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg

// PSEUDOCODICE


// crea una funzione che genera membri del team i cui valori sono nome,ruolo ,immagine
// crea un array di oggetti con le informazioni fornite
// cicla gli elementi per ogni membro
// stampa in console con singoli attributi cono dot.notation
// crea elemento div 
// aggiungere(+=) all'inner del container il div
// stampa il contenuto delle stringhe dentro il div con Inner.

const containerElement = document.getElementById('container')

// crea una funzione che genera membri del team i cui valori sono nome,ruolo ,immagine
function createMember(nome, ruolo, image) {
    const member = {
        nome: nome,
        ruolo: ruolo,
        image: image,
    }
    return member
    
    
}
// crea un array di oggetti con le informazioni fornite
const membri = [
    createMember('wayne-barnett', 'founder-ceo', 'wayne-barnett-founder-ceo.jpg'),
    createMember('angela-caroll', 'chief-editor', 'angela-caroll-chief-editor.jpg'),
    createMember('Walter Gordon', 'Office Manager', 'walter-gordon-office-manager.jpg'),
    createMember('Angela Lopez', 'Social Media Manager', 'angela-lopez-social-media-manager.jpg'),
    createMember('Scott Estrada', 'Developer', 'scott-estrada-developer.jpg'),
    createMember('Barbara Ramos', 'Graphic Designer', 'barbara-ramos-graphic-designer.jpg'),
]
// console.log(membri)
// cicla gli elementi per ogni membro
membri.forEach(element => {
    // stampa in console con singoli attributi cono dot.notation
    console.log(element.nome,element.ruolo,element.image);
    // stampa il contenuto delle stringhe dentro il div con Inner.
     containerElement.innerHTML +=`<div class="card" style="width: 18rem;">
     <img src="./img/${element.image}" class="card-img-top" alt="...">
     <div class="card-body">
       <p class="card-text">nome :${element.nome}.</p>
       <p class="card-text">ruolo :${element.ruolo}.</p>
     </div>
   </div>`
     
     
     
     
    //  `<div>nome : ${element.nome}<br>
    //  ruolo : ${element.ruolo}<br>
    //  image: ${element.image}</div>`;
    
})

