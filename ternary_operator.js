const timeNow = new Date();
const nowYear = timeNow.getFullYear();
const minAge = 18;
let yourBirthDay = Number(prompt("when was your birth year?" ));

nowYear - yourBirthDay >= minAge? alert("your age anough"):alert("your age not anough");