//Opdracht 1
const fName = "Duncan";
const sName = "de Jong";
const fullName = "Duncan de Jong";

console.log(fName);
console.log(sName);
console.log(fullName);

const up = fullName.toUpperCase();
console.log(up)

const low = fullName.toLowerCase();
console.log(low)

//pdracht 2
const myDiv = document.querySelector('.fullname');
myDiv.innerHTML += fullName;

function myFunction() {
    alert(fullName);
  }

//opdracht 3
const pWord = "H@ck3d";
const lWord = pWord.toLowerCase();
const uWord = pWord.toUpperCase();

let result = prompt("Vul een wachtwoord in");

if (result.trim() == "") {
    alert("Gefaald, Game Over!");
}
else if (result == pWord) {
    alert("dit is het goede wachtwoord");
} 
else if (result == lWord) {
    alert("dit is het goede wachtwoord");
}
else if (result == uWord) {
    alert("dit is het goede wachtwoord");
}
else if (result != pWord)  {
    alert ("Dit is niet goed");
}
else {
    alert ("gameover");
}

// opdracht 4

const people = [
    {
        firstName: "piet",
        lastName: "pluk",
        age: "15",
        place: "den haag",
    },
    {
        firstName: "jan",
        lastName: "de fries",
        age: "15",
        place: "den haag",
    },
    {
        firstName: "Finn",
        lastName: "Rijndop",
        age: "15",
        place: "den haag",
    },
    {
        firstName: "henk",
        lastName: "janssen",
        age: "15",
        place:"delft",
    },
    {
        firstName: "koen",
        lastName: "koekje",
        age: "15",
        place: "den haag",
    }
];


for (let i = 0; i < people.length; i++) {
    const userName = people[i];
    console.log(userName);

}

