const pari_dispari = prompt("Pari o dispari?");
let numero = prompt ("Scrivi un numero da 1 a 5");
numero = parseInt(numero);
const numero2 = genera_numero();
const somma = numero + numero2;
const risultato = somma_pari_dispari(somma);
if (pari_dispari == risultato){
    console.log("Hai vinto");
} else{
    console.log("Hai perso");
}



function genera_numero(){
    let x = Math.floor((Math.random() * 5) + 1);
    return x;
}

function somma_pari_dispari(x){
    if (x%2==0){
        return "pari";
    }else{
        return "dispari";
    }
}
