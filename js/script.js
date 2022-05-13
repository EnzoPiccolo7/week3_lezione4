function bottone() {
    let nom = document.getElementById("nome").value;
    nom = nom.toUpperCase();
    document.getElementById('maiuscolo').innerHTML = nom;
    
    function maiuscol() {
        let cogn = document.getElementById("nome").value;
     cogn = cogn.toLowerCase();
     document.getElementById('minuscolo').innerHTML = cogn;
     }
    
       
    function stampa(){
        let sud = document.getElementById("nome").value;
        let sop = sud.split('-');
         conc = sop[0].concat(sop[2]);
         document.getElementById('split').innerHTML = conc;
        
        }
        return stampa(),maiuscol()
}


/* function stampa(){
let sud = document.getElementById("nome").value;
console.log(sud);
let sop = sud.split('-');
let sip = sop[0].concat(sop[2]);

} */
