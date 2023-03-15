const timeNow = new Date();
const nowYear = timeNow.getFullYear();
const minAge = 18;
let yourBirthDay = Number(prompt("when was your birth year?" + nowYear));

if (nowYear - yourBirthDay >= minAge) {
    alert("you are old enough");
}else{
alert("you are not old enough");
}