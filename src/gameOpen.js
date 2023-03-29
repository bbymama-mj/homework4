function renderGameScreenOpen() {
  const app = document.querySelector(".app");
  app.textContent = "";

  const boxTime = document.createElement("div");
  boxTime.classList = "boxTime";

  const box = document.createElement("div");
  box.classList = "timeStyle";

  const boxPosition = document.createElement("div");
  boxPosition.classlist = "boxPosition";

  const clocks = document.createElement("h1");
  clocks.textContent = "00.00";
  clocks.classList = "clocks";

  const minutes = document.createElement("h1");
  minutes.textContent = "min";
  minutes.classList = "time";

  const sec = document.createElement("h1");
  sec.textContent = "sec";
  sec.classList = "time";

  const button = document.createElement("button");
  button.textContent = "Начать заново";
  button.classList = "btnRestart";

  const cardBox = document.createElement("div");
  cardBox.classList = "cardBox";

  const card1 = document.createElement("img");
  card1.src = "./img/P/6P.jpg";
  card1.classList = "card";

  const card2 = document.createElement("img");
  card2.src = "./img/P/7P.jpg";
  card2.classList = "card";

  const card3 = document.createElement("img");
  card3.src = "./img/P/8P.jpg";
  card3.classList = "card";

  const card4 = document.createElement("img");
  card4.src = "./img/P/9P.jpg";
  card4.classList = "card";

  const card5 = document.createElement("img");
  card5.src = "./img/P/10P.jpg";
  card5.classList = "card";

  const card6 = document.createElement("img");
  card6.src = "./img/P/DP.jpg";
  card6.classList = "card";

  const card7 = document.createElement("img");
  card7.src = "./img/P/JP.jpg";
  card7.classList = "card";

  const card8 = document.createElement("img");
  card8.src = "./img/P/KP.jpg";
  card8.classList = "card";

  const card9 = document.createElement("img");
  card9.src = "./img/P/1P.jpg";
  card9.classList = "card";

  const card10 = document.createElement("img");
  card10.src = "./img/B/1B.jpg";
  card10.classList = "card";

  const card11 = document.createElement("img");
  card11.src = "./img/B/6B.jpg";
  card11.classList = "card";

  const card12 = document.createElement("img");
  card12.src = "./img/B/7B.jpg";
  card12.classList = "card";

  const card13 = document.createElement("img");
  card13.src = "./img/B/8B.jpg";
  card13.classList = "card";

  const card14 = document.createElement("img");
  card14.src = "./img/B/9B.jpg";
  card14.classList = "card";

  const card15 = document.createElement("img");
  card15.src = "./img/B/10B.jpg";
  card15.classList = "card";

  const card16 = document.createElement("img");
  card16.src = "./img/B/JB.jpg";
  card16.classList = "card";

  const card17 = document.createElement("img");
  card17.src = "./img/B/DB.jpg";
  card17.classList = "card";

  const card18 = document.createElement("img");
  card18.src = "./img/B/KB.jpg";
  card18.classList = "card";

  const card19 = document.createElement("img");
  card19.src = "./img/C/1C.jpg";
  card19.classList = "card";

  const card20 = document.createElement("img");
  card20.src = "./img/C/6C.jpg";
  card20.classList = "card";

  const card21 = document.createElement("img");
  card21.src = "./img/C/7C.jpg";
  card21.classList = "card";

  const card22 = document.createElement("img");
  card22.src = "./img/C/8C.jpg";
  card22.classList = "card";

  const card23 = document.createElement("img");
  card23.src = "./img/C/9C.jpg";
  card23.classList = "card";

  const card24 = document.createElement("img");
  card24.src = "./img/C/10C.jpg";
  card24.classList = "card";

  const card25 = document.createElement("img");
  card25.src = "./img/C/JC.jpg";
  card25.classList = "card";

  const card26 = document.createElement("img");
  card26.src = "./img/C/DC.jpg";
  card26.classList = "card";

  const card27 = document.createElement("img");
  card27.src = "./img/C/KC.jpg";
  card27.classList = "card";

  const card28 = document.createElement("img");
  card28.src = "./img/K/1K.jpg";
  card28.classList = "card";

  const card29 = document.createElement("img");
  card29.src = "./img/K/6K.jpg";
  card29.classList = "card";

  const card30 = document.createElement("img");
  card30.src = "./img/K/7K.jpg";
  card30.classList = "card";

  const card31 = document.createElement("img");
  card31.src = "./img/K/8K.jpg";
  card31.classList = "card";

  const card32 = document.createElement("img");
  card32.src = "./img/K/9K.jpg";
  card32.classList = "card";

  const card33 = document.createElement("img");
  card33.src = "./img/K/10K.jpg";
  card33.classList = "card";

  const card34 = document.createElement("img");
  card34.src = "./img/K/JK.jpg";
  card34.classList = "card";

  const card35 = document.createElement("img");
  card35.src = "./img/K/DK.jpg";
  card35.classList = "card";

  const card36 = document.createElement("img");
  card36.src = "./img/K/KK.jpg";
  card36.classList = "card";

  boxTime.append(minutes);
  boxTime.append(sec);
  boxPosition.append(boxTime);
  boxPosition.append(clocks);
  box.append(boxPosition);
  box.append(button);
  app.append(box);
  cardBox.append(card1);
  cardBox.append(card2);
  cardBox.append(card3);
  cardBox.append(card4);
  cardBox.append(card5);
  cardBox.append(card6);
  cardBox.append(card7);
  cardBox.append(card8);
  cardBox.append(card9);
  cardBox.append(card10);
  cardBox.append(card11);
  cardBox.append(card12);
  cardBox.append(card13);
  cardBox.append(card14);
  cardBox.append(card15);
  cardBox.append(card16);
  cardBox.append(card17);
  cardBox.append(card18);
  cardBox.append(card19);
  cardBox.append(card20);
  cardBox.append(card21);
  cardBox.append(card22);
  cardBox.append(card23);
  cardBox.append(card24);
  cardBox.append(card25);
  cardBox.append(card26);
  cardBox.append(card27);
  cardBox.append(card28);
  cardBox.append(card29);
  cardBox.append(card30);
  cardBox.append(card31);
  cardBox.append(card32);
  cardBox.append(card33);
  cardBox.append(card34);
  cardBox.append(card35);
  cardBox.append(card36);
  app.append(cardBox);
}

window.application.blocks["screenGameOpen"] = renderGameScreenOpen;
