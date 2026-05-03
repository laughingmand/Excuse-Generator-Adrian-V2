import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let cats = ['Por la presente informo que no podré asistir a mi jornada laboral hoy. Mi gato se ha quedado dormido sobre mis piernas y, según el protocolo de "siestas felinas", moverlo constituye un delito internacional que no estoy dispuesto a cometer. Agradezco su comprensión ante este secuestro doméstico', 
    'Lamento informar que hoy trabajaré de forma remota (o me tomaré el día). Mi gato ha decidido que el cable de mi cargador es una serpiente altamente peligrosa y ha iniciado un operativo de contención que me impide salir de casa hasta que la "amenaza" sea neutralizada', 
    'Solicito permiso para ausentarme hoy por motivos de fuerza mayor. Mi gato me ha estado mirando fijamente durante tres horas y estoy empezando a cuestionar si él es el dueño de la casa y yo solo un empleado administrativo sin contrato. Necesito el día para renegociar los términos de mi existencia'];
  let dogs = ['Lamento informar que no podré asistir a la oficina hoy. Mi perro ha decidido emprender un proyecto arqueológico de gran envergadura en el jardín y, tras desenterrar algo que parece ser un hueso de la era mesozoica (o mi zapato favorito), se niega a permitir el acceso a la salida principal hasta que termine su peritaje', 
    'Por la presente solicito el día libre por causas de fuerza mayor emocional. Al ponerme la chaqueta de trabajo, mi perro me ha lanzado una mirada de tal traición y melancolía que el veterinario sugiere que, si me voy ahora, su corazón podría romperse literalmente en pedazos. No puedo cargar con esa responsabilidad legal ni mora', 
    'Estimados, hoy me resulta imposible acudir a mi puesto. Mi perro ha interceptado y "procesado" (masticado) mi identificación y las llaves del coche bajo la firme creencia de que eran dispositivos de espionaje extranjeros. Me encuentro en proceso de recuperación de activos y limpieza de babas'];
  let girlF = ['Por la presente informo que me es imposible asistir a la oficina hoy. Al despertar, he quedado atrapado en un campo de atracción gravitatoria inusual generado por el edredón y el colchón. Las leyes de la física me dictan que cualquier intento de separación brusca podría causar un colapso en mi sistema motriz. Debo permanecer en observación horizontal hasta que la polaridad se invierta', 
    'Lamento comunicar que mi presencia en el trabajo hoy no será posible. Mi cama ha iniciado una auditoría sorpresa de niveles de suavidad y me ha seleccionado como el único sujeto de pruebas cualificado. Dado que el protocolo requiere un mínimo de 10 horas de contacto continuo para validar los resultados, me veo en la obligación profesional de completar el estudio', 
    'Estimados, solicito el día libre por motivos de seguridad personal. He intentado abandonar el recinto de descanso, pero la almohada ha solicitado una prórroga de estancia y se niega a soltar mi cabeza. Ante el riesgo de un incidente de tortícolis diplomática, he decidido ceder a sus demandas y mantener el statu quo bajo las sábanas'];
  let bed = ['Lamento informar que hoy no podré presentarme a laborar. Mi novia ha iniciado una auditoría sorpresa sobre "el tiempo de calidad invertido en la relación" durante el último trimestre. Según sus métricas, mi balance está en números rojos y me ha denegado el visado de salida de casa hasta que se complete una sesión intensiva de mimos y series', 
    'Por la presente informo que mi asistencia hoy se ha visto comprometida por una crisis de seguridad doméstica. Mi novia ha soñado que yo la engañaba con una versión imaginaria de mí mismo y, bajo el protocolo de "justicia onírica", he sido sentenciado a arresto domiciliario y trabajos forzados (ir por el desayuno) hasta que el yo del sueño pida disculpas', 
    'Estimados, hoy me veo en la necesidad de ausentarme. Mi novia ha detectado un error crítico en mi sistema operativo de "escucha activa" y ha programado una actualización obligatoria de 8 horas que requiere mi presencia física total. No puedo cancelar el proceso, ya que el soporte técnico (ella) ha advertido que cualquier interrupción causará un error fatal en mi cena de esta noche'];

  const getElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const updateExcuseCats = () => {
    let genExcuse = getElement(cats);
    document.querySelector('#excuseCats').innerHTML = genExcuse;
  };

  const updateExcuseDogs = () => {
    let genExcuse = getElement(dogs);
    document.querySelector('#excuseDogs').innerHTML = genExcuse;
  };

  const updateExcuseGirlF = () => {
    let genExcuse = getElement(girlF);
    document.querySelector('#excuseGirlF').innerHTML = genExcuse;
  };

  const updateExcuseBed = () => {
    let genExcuse = getElement(bed);
    document.querySelector('#excuseBed').innerHTML = genExcuse;
  }; 

  document.querySelector('#btnCats').addEventListener("click", updateExcuseCats);
  document.querySelector('#btnDogs').addEventListener("click", updateExcuseDogs);
  document.querySelector('#btnGirlF').addEventListener("click", updateExcuseGirlF);
  document.querySelector('#btnBed').addEventListener("click", updateExcuseBed);
};