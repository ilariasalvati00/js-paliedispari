const parola = prompt ("inserisci parola"); 
palindroma(parola);


function palindroma(stringa){
    let stringa2 = stringa.split("").reverse().join("");
    if (stringa==stringa2){
        console.log(`la stringa ${stringa} è palindroma`);
    } else{
        console.log(`la stringa ${stringa} non è palindroma`);
    }
}

