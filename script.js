const credit = document.querySelector(`.credit`);
const debit = document.querySelector(`.debit`);
const passbook = document.querySelector(`.passbook`);
const reset = document.querySelector(`.reset`);
let totalDeposit = document.querySelector(`.totalDiposit`);
let totalWithraw = document.querySelector(`.totalWithraw`);
let totalBalance = document.querySelector(`.totalBalance`);
let balance = 0;
let allDepo = 0;
let allwed = 0;
let count = 0;

credit.addEventListener(`click`, function () {
  count += 1;
  let sum = Number(document.querySelector(`.amount`).value);
  balance += sum;
  allDepo += sum;

  let tr = document.createElement(`tr`);

  let td1 = document.createElement(`td`);
  td1.classList.add(`ser`);

  let td2 = document.createElement(`td`);
  td2.classList.add(`cre`);

  let td3 = document.createElement(`td`);
  td3.classList.add(`deb`);

  let td4 = document.createElement(`td`);
  td4.classList.add(`bal`);

  let serial = document.createTextNode(count);

  let Deposit = document.createTextNode(sum);

  let Withdraw = document.createTextNode(`0`);

  let availBalance = document.createTextNode(balance);

  td1.appendChild(serial);

  td2.appendChild(Deposit);

  td3.appendChild(Withdraw);

  td4.appendChild(availBalance);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);

  let add = document.querySelector(`.addEntries`);
  add.append(tr);

  totalDeposit.innerHTML = ``;
  totalDeposit.innerHTML = allDepo;
  totalBalance.innerHTML = ``;
  totalBalance.innerHTML = balance;
});

debit.addEventListener(`click`, function () {
  count += 1;
  let sum = Number(document.querySelector(`.amount`).value);
  balance -= sum;
  allwed += sum;

  let tr = document.createElement(`tr`);

  let td1 = document.createElement(`td`);
  td1.classList.add(`ser`);

  let td2 = document.createElement(`td`);
  td2.classList.add(`cre`);

  let td3 = document.createElement(`td`);
  td3.classList.add(`deb`);

  let td4 = document.createElement(`td`);
  td4.classList.add(`bal`);

  let serial = document.createTextNode(count);

  let Deposit = document.createTextNode(`0`);

  let Withdraw = document.createTextNode(sum);

  let availBalance = document.createTextNode(balance);

  td1.appendChild(serial);

  td2.appendChild(Deposit);

  td3.appendChild(Withdraw);

  td4.appendChild(availBalance);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);

  let add = document.querySelector(`.addEntries`);
  add.append(tr);

  totalWithraw.innerHTML = ``;
  totalWithraw.innerHTML = allwed;
  totalBalance.innerHTML = ``;
  totalBalance.innerHTML = balance;
});

reset.addEventListener(`click`, function () {
  count = 0;
  allDepo = 0;
  allwed = 0;
  balance = 0;
  let add = document.querySelector(`.addEntries`);
  add.innerHTML = ``;
  totalBalance.innerHTML = ``;
  totalDeposit.innerHTML = ``;
  totalWithraw.innerHTML = ``;
});
