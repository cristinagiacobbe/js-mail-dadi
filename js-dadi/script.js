//GIOCO DEI DADI

const number_dice = [1, 2, 3, 4, 5, 6]

const user_random = Math.floor(Math.random() * number_dice.length) + 1;
document.getElementById("user_number").innerHTML = `Il dado lanciato dal giocatore ha numero: ${user_random}`

const pc_random = Math.floor(Math.random() * number_dice.length) + 1;
document.getElementById("pc_number").innerHTML = `Il dado lanciato dal computer ha numero: ${pc_random}`

if (user_random < pc_random) {
    document.getElementById("text_dice").innerHTML = "Il computer ha vinto";
} else if (user_random > pc_random) {
    document.getElementById("text_dice").innerHTML = "Hai vinto!";
} else if (user_random == pc_random) {
    document.getElementById("text_dice").innerHTML = "Pareggio";
}

