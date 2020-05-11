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
  ' El Comercio Justo es una asociación de comercio, basada en el diálogo, la transparencia y el respeto, que busca una mayor equidad en el comercio internacional. Contribuye a un desarrollo sostenible ofreciendo mejores condiciones comerciales y asegurando los derechos de productores/as y trabajadores/as marginados/as, especialmente en el Sur.',
  'COMPRA PÚBLICA RESPONSABLE. Cuando una administración pública adjudica un contrato de obra, suministro o servicio está generando un gran impacto en el mercado y en su entorno cercano. Las iniciativas de Compra Pública Responsable contribuyen a la construcción de relaciones comerciales más responsables y a la promoción de productos y servicios con un valor añadido de justicia y equilibrio ambiental.',
'La Compra Pública Ética se relaciona a la contratación pública de bienes o servicios que tienen en cuenta criterios éticos relativos al cumplimiento de convenciones o tratados internacionales y estándares sobre condiciones laborales dignas de las personas como son: salarios mínimos, derechos de las personas trabajadoras, lucha contra la explotación laboral infantil, garantizan la equidad de género. De esta manera se da preferencia en sus procesos de compras a las empresas proveedoras y a los productos que, como son los estándares de Comercio Justo, buscan un comercio que garantice el desarrollo sostenible de los pueblos y las personas productoras.',
'La Compra Pública Verde, se refiere a la adopción por parte de las autoridades, empresas y organizaciones de un compromiso a favor del desarrollo sostenible a través de la introducción de cláusulas medioambientales en los pliegos de la contratación pública. La Comisión Europea ha elaborado un manual de Compra Verde en el cual se explica a las personas responsables de la compra pública los pasos necesarios para introducir una estrategia de contratación con criterios ambientales, organizar el proceso de contratación, definir los requisitos y criterios en la selección de las empresas proveedoras y contratistas, como así también la adjudicación y ejecución del contrato. ',
'La Compra Pública Social implica la reserva que hacen las administraciones de una parte de la contratación pública a empresas de inserción, centros especiales de trabajo y entidades que tienen como finalidad la inserción sociolaboral de personas con riesgo de exclusión social.',
'MERCADO SOCIAL. Por Mercado Social entendemos una red de producción, distribución y consumo de bienes y servicios y aprendizaje común que funciona con criterios éticos, democráticos, ecológicos y solidarios, en un territorio determinado, constituida tanto por empresas y entidades de la economía solidaria y social como por consumidores/as individuales y colectivos.',
'Economía solidaria. La economía solidaria es una forma de producción, consumo, y distribución de riqueza, centrada en la valorización del ser humano y no en la priorización del capital. Promueve la asociatividad, la cooperación y la autogestión, y está orientada a la producción, al consumo, y a la comercialización de bienes y servicios, de un modo principalmente autogestionado, teniendo como finalidad el desarrollo ampliado de la vida.'
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
