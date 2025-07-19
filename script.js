const ready = (fn) => {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
};

const randomFromArray = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

ready(() => {
  const images = [
    "images/robots/478eeae7-13dc-463c-b280-ea7b06b63e2d_EFFCy_oX4AESj3i.jpeg",
    "images/robots/478eeae7-13dc-463c-b280-ea7b06b63e2d_EFKMZbiX4AcQCbN.png",
    "images/robots/478eeae7-13dc-463c-b280-ea7b06b63e2d_EFQM7GoXoAAQN6r.png",
    "images/robots/478eeae7-13dc-463c-b280-ea7b06b63e2d_EGUA_S0WsAIE03o.png",
    "images/robots/478eeae7-13dc-463c-b280-ea7b06b63e2d_EHqDhb3X0AIgaSX.png",
    "images/robots/478eeae7-13dc-463c-b280-ea7b06b63e2d_EI54X3oXUAA-i8k.png",
    "images/robots/478eeae7-13dc-463c-b280-ea7b06b63e2d_EIFTnxIXkAAKlnM.png",
    "images/robots/478eeae7-13dc-463c-b280-ea7b06b63e2d_EIIvWWBWsAUGDtX.png",
    "images/robots/478eeae7-13dc-463c-b280-ea7b06b63e2d_EJYIvKRXUAATZt7.png",
    "images/robots/478eeae7-13dc-463c-b280-ea7b06b63e2d_EKrm5zOWsAAAwIQ.png",
    "images/robots/478eeae7-13dc-463c-b280-ea7b06b63e2d_EMzpr0WX0AUPKAD.png",
    "images/robots/478eeae7-13dc-463c-b280-ea7b06b63e2d_ENV--axWoAE2R95.png",
    "images/robots/478eeae7-13dc-463c-b280-ea7b06b63e2d_EOzcyTKWAAEIr8u.png",
    "images/robots/478eeae7-13dc-463c-b280-ea7b06b63e2d_EP9_Xa7X0AE9-nz.png",
    "images/robots/478eeae7-13dc-463c-b280-ea7b06b63e2d_EQMlNajWkAA83Sw.png",
    "images/robots/478eeae7-13dc-463c-b280-ea7b06b63e2d_ERA8F2LUwAAdnOI.png",
    "images/robots/478eeae7-13dc-463c-b280-ea7b06b63e2d_ERbVQjfXsAAwDRB.png",
    "images/robots/478eeae7-13dc-463c-b280-ea7b06b63e2d_ERYwdhZXsAAcYuL.png",
    "images/robots/478eeae7-13dc-463c-b280-ea7b06b63e2d_EUlexoMUwAYuMj_.jpeg",
    "images/robots/478eeae7-13dc-463c-b280-ea7b06b63e2d_EUQBeAeXgAYxhP5.png",
    "images/robots/478eeae7-13dc-463c-b280-ea7b06b63e2d_EV17armWoAM3cMw.png",
    "images/robots/478eeae7-13dc-463c-b280-ea7b06b63e2d_EVIPh3sWAAMgwXN.png",
    "images/robots/478eeae7-13dc-463c-b280-ea7b06b63e2d_EWspV_dUcAAqkTF.png",
    "images/robots/478eeae7-13dc-463c-b280-ea7b06b63e2d_EYTv8FDX0AIBNFo.jpeg",
    "images/robots/478eeae7-13dc-463c-b280-ea7b06b63e2d_EZq_8QTX0AYo6wn.jpeg",
  ];

  let robotsContainer = document.getElementById("robots");
  let firstRobot = document.querySelector(".robot-1");

  robotsContainer.innerHTML = `<a href="https://botwiki.org/random-bot/"><img class="robot robot-1" src="${images[0]}"></a>`;

  let index = 1,
    totalCount = 1,
    colSize = Math.floor(robotsContainer.offsetHeight / 100),
    rowSize = Math.floor(robotsContainer.offsetWidth / 100),
    totalCountFinal = rowSize * colSize;

  let css = "",
    head = document.head || document.getElementsByTagName("head")[0],
    style = document.createElement("style");

  for (let i = 0; i <= totalCountFinal; i++) {
    css += `.robot-${i} { animation-delay: ${
      (60 / totalCountFinal / 200) * i
    }s; }`;
  }

  head.appendChild(style);
  style.type = "text/css";
  style.appendChild(document.createTextNode(css));

  while (totalCount < totalCountFinal) {
    document.getElementById("robots").innerHTML =
      document.getElementById("robots").innerHTML +
      `<a href="https://botwiki.org/random-bot/"><img class="robot robot-${totalCount}" src="${images[index]}"></a>`;
    if (index < images.length - 1) {
      index++;
    } else {
      index = 0;
    }
    totalCount++;
  }

  setTimeout(() => {
    [300, 750, 1250].forEach((interval) => {
      setInterval(() => {
        let robots = document.querySelectorAll(".robot");
        let robot = randomFromArray(robots);
        robot.src = randomFromArray(images);
      }, interval);
    });
  }, 1000);
});
