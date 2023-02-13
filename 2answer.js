let id = "3888-I-0197621";
// let id = "38880197-A-621";
let totalMember = 21;
// let totalMember = 10;
// let totalMember = 31;

let citizen = ""
let price = 0;
let discount = 0;

for (let i = 0; i < id.length; i++) {
  if (id[i] === "I") {
    citizen = "wni"
  } else if (id[i] === "A") {
    citizen = "wna"
  }
}

if (citizen === "wni") {
  price = 20000 * totalMember;
  if (totalMember > 20) {
    discount = 0.2;
  }
} else {
  price = 50000 * totalMember;
  if (totalMember > 30) {
    discount = 0.2;
  }
}

price -= price * discount;

if (citizen === "") {
  console.log("Anda tidak terdaftar");
} else {
  console.log(
    `Karena anda adalah ${citizen}, maka tagihan untuk id ${id} adalah ${price}`
  );
}
