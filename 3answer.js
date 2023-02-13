// HARUS GUNAKAN KEDUA VARIABEL DIBAWAH INI
let password = "B$DasW1";
let specialCharacter = "~!@#$%^&";
// write your code here

//counter
// let counterSpecChar = 0
// let counterAngka = 0
// let counterHuruf = 0

// for (let i = 0; i < password.length; i++) {
//   let currentChar = password[i]
//   for (let j = 0; j < specialCharacter.length; j++) {
//     if (currentChar === specialCharacter[j]) {
//       counterSpecChar++
//       break
//     }
//   }

//   if (currentChar >= 0) {
//     counterAngka++
//   }
// }

// if (counterSpecChar > 0 && counterAngka > 0) {
//   console.log("password high")
// } else if (counterAngka > 0) {
//   console.log("password medium")
// } else {
//   console.log("password low")
// }

//flagging
let specialCharacterExist = false;
let numberExist = false;
// let letterExist = false;
let output = "";

for (let i = 0; i < password.length; i++) {
    for (let j = 0; j < specialCharacter.length; j++) {
      if (password[i] === specialCharacter[j]) {
        specialCharacterExist = true;
        break;
      }
    }
  
  if (password[i] >= 0) {
    numberExist = true;
  }
}

if (numberExist && specialCharacterExist) {
  output = "password high";
} else if (numberExist) {
  output = "password medium";
} else {
  output = "password low";
}

console.log(output);
