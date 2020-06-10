function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function randomFromArray( arr ){
  return arr[Math.floor( Math.random() * arr.length )];
}

ready( function(){
  const images = [
    'https://cdn.glitch.com/478eeae7-13dc-463c-b280-ea7b06b63e2d%2FEI54X3oXUAA-i8k.png?v=1591733817562',
    'https://cdn.glitch.com/478eeae7-13dc-463c-b280-ea7b06b63e2d%2FEFQM7GoXoAAQN6r.png?v=1591733817689',
    'https://cdn.glitch.com/478eeae7-13dc-463c-b280-ea7b06b63e2d%2FEIIvWWBWsAUGDtX.png?v=1591733817731',
    'https://cdn.glitch.com/478eeae7-13dc-463c-b280-ea7b06b63e2d%2FEFKMZbiX4AcQCbN.png?v=1591733817754',
    'https://cdn.glitch.com/478eeae7-13dc-463c-b280-ea7b06b63e2d%2FEGUA_S0WsAIE03o.png?v=1591733817780',
    'https://cdn.glitch.com/478eeae7-13dc-463c-b280-ea7b06b63e2d%2FEHqDhb3X0AIgaSX.png?v=1591733817818',
    'https://cdn.glitch.com/478eeae7-13dc-463c-b280-ea7b06b63e2d%2FEIFTnxIXkAAKlnM.png?v=1591733817875',
    'https://cdn.glitch.com/478eeae7-13dc-463c-b280-ea7b06b63e2d%2FEJYIvKRXUAATZt7.png?v=1591733817917',
    'https://cdn.glitch.com/478eeae7-13dc-463c-b280-ea7b06b63e2d%2FEFFCy_oX4AESj3i.jpeg?v=1591733817964',
    'https://cdn.glitch.com/478eeae7-13dc-463c-b280-ea7b06b63e2d%2FERA8F2LUwAAdnOI.png?v=1591733817990',
    'https://cdn.glitch.com/478eeae7-13dc-463c-b280-ea7b06b63e2d%2FEQMlNajWkAA83Sw.png?v=1591733818005',
    'https://cdn.glitch.com/478eeae7-13dc-463c-b280-ea7b06b63e2d%2FEOzcyTKWAAEIr8u.png?v=1591733818062',
    'https://cdn.glitch.com/478eeae7-13dc-463c-b280-ea7b06b63e2d%2FERbVQjfXsAAwDRB.png?v=1591733818162',
    'https://cdn.glitch.com/478eeae7-13dc-463c-b280-ea7b06b63e2d%2FEUQBeAeXgAYxhP5.png?v=1591733818182',
    'https://cdn.glitch.com/478eeae7-13dc-463c-b280-ea7b06b63e2d%2FEKrm5zOWsAAAwIQ.png?v=1591733818426',
    'https://cdn.glitch.com/478eeae7-13dc-463c-b280-ea7b06b63e2d%2FEP9_Xa7X0AE9-nz.png?v=1591733818506',
    'https://cdn.glitch.com/478eeae7-13dc-463c-b280-ea7b06b63e2d%2FEMzpr0WX0AUPKAD.png?v=1591733818529',
    'https://cdn.glitch.com/478eeae7-13dc-463c-b280-ea7b06b63e2d%2FENV--axWoAE2R95.png?v=1591733818597',
    'https://cdn.glitch.com/478eeae7-13dc-463c-b280-ea7b06b63e2d%2FEUlexoMUwAYuMj_.jpeg?v=1591733818698',
    'https://cdn.glitch.com/478eeae7-13dc-463c-b280-ea7b06b63e2d%2FERYwdhZXsAAcYuL.png?v=1591733818738',
    'https://cdn.glitch.com/478eeae7-13dc-463c-b280-ea7b06b63e2d%2FEYTv8FDX0AIBNFo.jpeg?v=1591733818752',
    'https://cdn.glitch.com/478eeae7-13dc-463c-b280-ea7b06b63e2d%2FEVIPh3sWAAMgwXN.png?v=1591733818789',
    'https://cdn.glitch.com/478eeae7-13dc-463c-b280-ea7b06b63e2d%2FEWspV_dUcAAqkTF.png?v=1591733818856',
    'https://cdn.glitch.com/478eeae7-13dc-463c-b280-ea7b06b63e2d%2FEZq_8QTX0AYo6wn.jpeg?v=1591733818973',
    'https://cdn.glitch.com/478eeae7-13dc-463c-b280-ea7b06b63e2d%2FEV17armWoAM3cMw.png?v=1591733819032'
  ];

  let robotsContainer = document.getElementById( 'robots' );
  let firstRobot = document.querySelector( '.robot-1' );

  robotsContainer.innerHTML = `<a href="https://botwiki.org/random-bot/"><img class="robot robot-1" src="${ images[0] }"></a>`; 

  let index = 1,
      totalCount = 1,
      colSize = Math.floor( robotsContainer.offsetHeight / 100 ),
      rowSize = Math.floor( robotsContainer.offsetWidth / 100 ),
      totalCountFinal = rowSize * colSize;

  let css = '',
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement( 'style' );

  for ( let i = 0; i <= totalCountFinal; i++ ) {
    css += `.robot-${ i } { animation-delay: ${ 60/totalCountFinal/200 * i }s; }`;
  }
  
  head.appendChild( style );
  style.type = 'text/css';
  style.appendChild( document.createTextNode( css ) );

  while ( totalCount < totalCountFinal ){
    document.getElementById( 'robots' ).innerHTML = document.getElementById( 'robots' ).innerHTML + `<a href="https://botwiki.org/random-bot/"><img class="robot robot-${ totalCount }" src="${ images[index] }"></a>`;
    if ( index < images.length - 1 ){
      index++;
    } else {
      index = 0;
    }
    totalCount++;
  }

  setTimeout( function(){
    [300, 750, 1250].forEach( function( interval ){
      setInterval( function(){
        let robots = document.querySelectorAll('.robot');
        let robot = randomFromArray( robots );
        robot.src = randomFromArray( images );
      }, interval );
    } );
  }, 1000 );
} );