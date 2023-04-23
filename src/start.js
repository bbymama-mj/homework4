/* eslint-disable prettier/prettier */
window.application = {
  blocks: {},
  screens: {},
  renderScreen: function (screenName) {
    window.application.timers.forEach((id) => {
      clearInterval(id);
    });
    window.application.screens[screenName]();
  },
  renderBlock: function (blockName, container) {
    if (window.application.blocks[blockName]) {
      window.application.blocks[blockName](container);
    } else {
      console.log("Такого блока нет");
    }
  },
  timers: [],
};

const app = document.querySelector(".app");
function renderStart() {
  const box = document.createElement("form");
  box.classList = "box";

  const introText = document.createElement("h1");
  introText.textContent = "Выбери сложность";
  introText.classList = "introText";

  const numberBox = document.createElement("div");
  numberBox.classList = "number";

  const numberBox1 = document.createElement("button");
  numberBox1.classList = "numberBox1";
  numberBox1.textContent = "1";

  const numberBox2 = document.createElement("button");
  numberBox2.classList = "numberBox2";
  numberBox2.textContent = "2";

  const numberBox3 = document.createElement("button");
  numberBox1.type = "radio";
  numberBox3.classList = "numberBox3";
  numberBox3.textContent = "3";

  const button = document.createElement("button");
  button.textContent = "Старт";
  button.classList = "btn";

  numberBox1.addEventListener("click", (event) => {
    event.preventDefault();
    numberBox1.classList = "numberChoose";
    numberBox2.classList.remove("numberChoose");
    numberBox2.classList.add("numberBox1");
    numberBox3.classList.remove("numberChoose");
    numberBox3.classList.add("numberBox2");

    button.addEventListener ("click", () => {
      window.application.blocks.screenGame1();
    })
  });

  numberBox2.addEventListener("click", (event) => {
    event.preventDefault();
    numberBox2.classList = "numberChoose";
    numberBox1.classList.remove("numberChoose");
    numberBox1.classList.add("numberBox1");
    numberBox3.classList.remove("numberChoose");
    numberBox3.classList.add("numberBox2");

    button.addEventListener ("click", () => {
      window.application.blocks.screenGame2();
    })
  });

  numberBox3.addEventListener("click", (event) => {
    event.preventDefault();
    numberBox3.classList = "numberChoose";
    numberBox1.classList.remove("numberChoose");
    numberBox1.classList.add("numberBox1");
    numberBox2.classList.remove("numberChoose");
    numberBox2.classList.add("numberBox2");

    button.addEventListener ("click", () => {
      window.application.blocks.screenGame3();
    })
  });

  box.append(introText);
  numberBox.append(numberBox1);
  numberBox.append(numberBox2);
  numberBox.append(numberBox3);
  box.append(numberBox);
  app.append(box);
  box.append(button);



  button.addEventListener("click", (event) => {
    event.preventDefault();
    const target = event.target;

    if (target.checkValidity()) {
      console.log('submit');
    };

    const roomNumber = document.querySelectorAll('.numberChoose');

    if (roomNumber.checked) {
      // const room = roomNumber.value; 
      window.application.blocks.screenGame();
    }

    // const message = document.createElement('p');
    // message.textContent = 'Вы не отметили галочку';
    // message.classList = "introText";


    // if (numberBox1.checked) {
    //   window.application.blocks.screenGame();
    // } else if (numberBox2.checked) {
    //   window.application.blocks.screenGameOpen();
    // } else if (numberBox3.checked) {
    //   window.application.blocks.screenGame();
    // } else {
    //   box.appendChild(message);
    // };
  });


}

  

    // box.forEach(option => {
    //   if (option.checked === numberBox1) {
    //     window.application.blocks.screenGame();
    //   } else if (option.checked === numberBox2) {
    //     window.application.blocks.screenGame();
    //   } else if (option.checked === numberBox3) {
    //     window.application.blocks.screenGame();
    //   };
    // });
  // })


  // button.addEventListener("click", () => {
    // event.preventDefault();
    // const target = event.target;

    // if (numberBox1.classList() === 'numberChoose') {

    // } else if (numberBox2.classLis() === "numberChoose" && numberBox1.classList === "numberBox1" && numberBox3.classList === "numberBox2") {
    //   window.application.blocks.screenGame();
    // } else if (numberBox3.classList() === "numberChoose" && numberBox1.classList === "numberBox1" && numberBox2.classList === "numberBox2") {
    //   window.application.blocks.screenGame();
    // }
    // }
            

  // )};
// };

window.application.blocks["startButton"] = renderStart ;