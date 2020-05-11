const concepts = [
  'Segunda Mano. Utilizando objetos y ropa de segunda mano cuando sea posible, evitaremos un gasto innecesario a la vez que ahorraremos recursos naturales alargando la vida útil de los productos. ',
  'El sistema económico capitalista actual contribuye a la práctica de conductas consumistas trayendo consecuencias y desequilibrios de tipo económico, medioambiental y social. ',
  'Criterios para el Consumo Responsable: Elegir productos y servicios de iniciativas económicas solidarias, consumir productos ecológicos, productos locales y productos de Comercio Justo, distinguir la diferencia entre valor y precio, elegir productos y prácticas que utilicen energías renovables o que necesiten menos consumo energético, no especular con la vivienda, ya que es un bien de primera necesidad, hacer un uso responsable del agua, y compartir recursos y necesidades de forma colectiva.',
  'Comercio Justo. Los productos de CJ tienen una garantía social y medioambiental que muchas empresas no proporcionan. Asimismo mediante la compra de estos productos estamos optando por un modelo de comercio donde no prima el beneficio económico, sino criterios de justicia y equidad. ',
  'Reducir, Reutilizar y Reciclar. Son los principios básicos del consumo responsable, comprar sólo lo que necesitamos, alargar la vida útil de los productos y, cuando no tiene más utilidad integrarlo en el ciclo productivo mediante el reciclaje. ',
  'Software Libre. Esta es la denominación del software que brinda libertad a las personas usuarias sobre su producto adquirido y por lo tanto, una vez adquirido se puede usar, copiar, estudiar, modificar y redistribuir libremente.',
  'Contrainformación. Es la información transmitida por grupos independientes desvinculados del poder político o económico, que surge como una mirada alternativa y critica a los problemas del mundo que ofrecen los medios convencionales de información, resaltando también las diferentes reivindicaciones que hacen los movimientos sociales. ',
  'Turismo Responsable. Este tipo de actividad de ocio implica toda actividad planificada o espontánea que consiste en la visita de un espacio natural o cultural donde las partes relacionadas se respetan, beneficiándose mutuamente y manteniendo de forma sostenible las condiciones que la impulsaron.',
  'Comercio pequeño y local. Siendo conscientes de que el pequeño comercio tiene un rol fundamental en nuestros barrios de socialización y creación de trabajo, elegir comprar en estos comercios y no, cuando sea posible, en las grandes superficies contribuiremos al circuito de la economía local. ',
  'Participación en grupos de consumo local. Se trata de experiencias que agrupan a nivel local a personas que buscan promover un modelo de consumo de proximidad, ecológico y estableciendo unas relaciones directas entre consumidor y productor. ',
  'Bancos del Tiempo. Designa una antigua forma de intercambio de servicios y productos por otros productos donde la moneda de intercambio son las horas de nuestro tiempo. ',
  ' El Comercio Justo es una asociación de comercio, basada en el diálogo, la transparencia y el respeto, que busca una mayor equidad en el comercio internacional. Contribuye a un desarrollo sostenible ofreciendo mejores condiciones comerciales y asegurando los derechos de productores/as y trabajadores/as marginados/as, especialmente en el Sur.'
];

// Get concept

function getconcept() {
  return concepts[Math.floor(Math.random() * concepts.length)]
}

// generate a random Number
let getRandomNumber = size => {
  return Math.floor(Math.random() * size);
}

// get the Distance of two points
let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// return an String depending on the distances 
let getDistanceHint = distance => {
  if (distance < 30) {
    return `<h3>Hirviendo!</h3> </br> <p>${ getconcept() }</p>`;
  } else if (distance < 40) {
    return `<h3>Realmente caliente!</h3> </br> <p>${ getconcept() }</p>`;
  } else if (distance < 60) {
    return `<h3>Caliente!</h3> </br> <p>${ getconcept() }</p>`;
  } else if (distance < 100) {
    return `<h3>Cálido!</h3> </br> <p>${ getconcept() }</p>`;
  } else if (distance < 180) {
    return `<h3>Frío!</h3> </br> <p>${ getconcept() }</p>`;
  } else if (distance < 360) {
    return `<h3>Realmente Frío!</h3> </br> <p>${ getconcept() }</p>`;
  } else {
    return `<h3>Estás en la era glacial!</h3> </br> <p>${ getconcept() }</p>`;
  }
}
