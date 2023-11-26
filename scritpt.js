//chiedi all'utente la sua email
//controlla che sia nella lista di chi può accedere
//stampa un messaggio sull'esito del controllo

//TOOLS
//prompt to aske user his email
//list with mail addresses
//check cicle (for/if)
//inner.text to print check result

const mailList = ["benedetta@gmail.com", "francesca@gmail.com", "giorgia@gmail.com", "camilla@gmail.com", "letizia@gmail.com"]
//console.log(mailList.length);
//console.log(mailList[0]);

//Creo un prompt per chiedere all'utente di inserire la sua email
//const userMail = prompt("Inserisci la tua email")

//creo un ciclo e le condizioni per il controllo e la validazione della mail inserita
//poichè non voglio ripetere il ciclo per tutta la lunghezza della lista, ma solo 
//fino a quando non trovo la corrispondeza userMail e mailList[i]
//uso un ciclo while

/* let i = 0
while (userMail != mailList[i]) {
    i = i + 1;
    console.log(i);
    i++;
} */

/* let i = 0;
while ( i < mailList.length) { 
alert(mailList[i])
i ++;
} */

const userMail = prompt("Inserisci la tua email")
let i = 0
for (let i = 0; i < mailList.length; i++) {
    if (userMail == mailList[i]) {        
        alert("Accesso autorizzato")  ;
        break;     
    }   else if (i == 4) {
        alert("Accesso negato")
    }
        
    }

