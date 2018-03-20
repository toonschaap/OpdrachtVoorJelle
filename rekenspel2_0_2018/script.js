const mijnOpgave = document.getElementById('mijnOpgave');
const mijnAntwoord = document.getElementById('mijnAntwoord')
const feedback = document.getElementById('feedback')
let mijnSommen = [];
let teller = 0;

for (let i = 0; i < 10; i++) {
  let mijnSom = {};
  mijnSom.getalA = maakGetal();
  mijnSom.getalB = maakGetal();
  mijnSom.goedeAntwoord = mijnSom.getalA * mijnSom.getalB;
  mijnSommen.push(mijnSom);
  //console.log(mijnSom);
}
feedback.style.display = "none";
mijnAntwoord.focus();
mijnOpgave.innerHTML = mijnSommen[0].getalA + " x " + mijnSommen[0].getalB;




function invoer(event) {
  if (event.keyCode == 13) {
    mijnSommen[teller].mijnAntwoord = mijnAntwoord.value;
    mijnAntwoord.value = "";
    teller++;
    if (teller >= mijnSommen.length) {
      eindespel();
    } else {
      mijnOpgave.innerHTML = mijnSommen[teller].getalA + " x " + mijnSommen[teller].getalB;
    }
  }
}

function eindespel() {
  console.log(mijnSommen);
  mijnAntwoord.style.display = "none"
  mijnOpgave.style.display = "none"
  feedback.style.display = "block";

  let mijnTabel = document.createElement('table');
  mijnTabel.setAttribute('border', '1');
  for (let i = 0; i < 10; i++) {
  let row = mijnTabel.insertRow();
  if(mijnSommen[i].goedeAntwoord == mijnSommen[i].mijnAntwoord){
    row.className= "goed";
  } else{
    row.className= "fout";
  }
  let cell1 = row.insertCell();
  cell1.innerHTML = mijnSommen[i].getalA + " x " + mijnSommen[i].getalB + " = " +mijnSommen[i].goedeAntwoord;
  let cell2 = row.insertCell();
  cell2.innerHTML = mijnSommen[i].mijnAntwoord;
}
  feedback.appendChild(mijnTabel);
}

function maakGetal() {
  let mijnGetal = Math.floor(Math.random() * 9) + 1;
  return mijnGetal;
}

mijnAntwoord.addEventListener("keydown", invoer, false);
