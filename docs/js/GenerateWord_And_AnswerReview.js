(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
  String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); } 
  let letterShowed = document.getElementById('correct-letters');
  let letterWrong = document.getElementById('wrong-letters');
  let randomWords = require('random-spanish-words');
  let wordGenerated = randomWords().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let hiddenWord = wordGenerated.replace(/./g, "_ ");
  let errorsCounter = 0;
  letterShowed.innerHTML = hiddenWord;

  function showFailMessage(){
    document.getElementById('hangman-image').src = '../images/loseImage.png';
  }

  function checkErrors(letterWritten){
    let imageShown;
    if(letterWrong.innerHTML.search(letterWritten.toUpperCase()) < 0){
      letterWrong.innerHTML += letterWritten.toUpperCase() + ' ';
      errorsCounter++
      imageShown = "../images/hangman-"+(errorsCounter-1)+".png";
      document.getElementById("hangman-image").src = imageShown;
    }
    if(errorsCounter == 6){
      window.setTimeout(showFailMessage, 1500);
      document.getElementById('letter-to-insert').readOnly = true;
    }
  }

  function checkAccerts(){
    if(hiddenWord.indexOf('_') < 0){
      document.getElementById("hangman-image").src = '../images/winImage.png';
      document.getElementById('letter-to-insert').readOnly = true;
    }
  }

  function checkLetter(letterWritten){
    if(!(wordGenerated.includes(letterWritten))){
      return checkErrors(letterWritten);
    }
    [...wordGenerated].forEach((letter, index) => {
      if(letterWritten == letter){
        hiddenWord = hiddenWord.replaceAt(index*2, letterWritten);
        letterShowed.innerHTML = hiddenWord.toUpperCase();
      }
    })
    checkAccerts();
  }
  
  document.getElementById('attempt').addEventListener('click', () =>{
    let letterWritten = document.getElementById("letter-to-insert").value.toLowerCase();
    checkLetter(letterWritten);
    document.getElementById("letter-to-insert").value = '';
    document.getElementById("letter-to-insert").focus();
  })

  },{"random-spanish-words":2}],2:[function(require,module,exports){
  var wordList = ['a', 'abajo', 'abandonar', 'abrir', 'absoluta', 'absoluto', 'abuelo', 'acabar', 'acaso', 'acciones',
  'acci??n', 'aceptar', 'acercar', 'acordar', 'actitud', 'actividad', 'acto', 'actual', 'actuar',
  'acudir', 'acuerdo', 'adelante', 'adem??s', 'adquirir', 'advertir', 'afectar', 'afirmar', 'agua', 'ahora',
  'ah??', 'aire', 'al', 'alcanzar', 'alejar', 'alemana', 'alem??n', 'algo', 'alguien', 'alguna',
  'alguno', 'alg??n', 'all??', 'all??', 'alma', 'alta', 'alto', 'altura', 'amar', 'ambas',
  'ambos', 'americana', 'americano', 'amiga', 'amigo', 'amor', 'amplia', 'amplio', 'andar', 'animal',
  'ante', 'anterior', 'antigua', 'antiguo', 'anunciar', 'an??lisis', 'aparecer', 'apenas', 'aplicar', 'apoyar',
  'aprender', 'aprovechar', 'aquel', 'aquella', 'aquello', 'aqu??', 'arma', 'arriba', 'arte', 'asegurar',
  'aspecto', 'asunto', 'as??', 'atenciones', 'atenci??n', 'atreverse', 'atr??s', 'aumentar', 'aun', 'aunque',
  'autor', 'autora', 'autoridad', 'aut??ntica', 'aut??ntico', 'avanzar', 'ayer', 'ayuda', 'ayudar', 'azul',
  'a??n', 'baja', 'bajar', 'barrio', 'base', 'bastante', 'bastar', 'beber',
  'bien', 'blanca', 'blanco', 'boca', 'brazo', 'buen', 'buscar', 'caballo', 'caber', 'cabeza',
  'cabo', 'cada', 'cadena', 'caer', 'calle', 'cama', 'cambiar', 'cambio', 'caminar', 'camino',
  'campo', 'cantar', 'cantidad', 'capaces', 'capacidad', 'capaz', 'capital', 'cara', 'caracteres',
  'carne', 'carrera', 'carta', 'car??cter', 'casa', 'casar', 'casi', 'caso', 'catal??n', 'causa',
  'celebrar', 'central', 'centro', 'cerebro', 'cerrar', 'chica', 'chico', 'cielo', 'ciencia', 'ciento',
  'cient??fica', 'cient??fico', 'cierta', 'cierto', 'cinco', 'cine', 'circunstancia', 'ciudad', 'ciudadana', 'ciudadano',
  'civil', 'clara', 'claro', 'clase', 'coche', 'coger', 'colocar', 'color', 'comentar', 'comenzar',
  'comer', 'como', 'completo', 'comprar', 'comprender', 'comprobar', 'comunes',
  'comunicaciones', 'comunicaci??n', 'com??n', 'con', 'concepto', 'conciencia', 'concreto', 'condici??n', 'condisiones', 'conducir',
  'conjunto', 'conocer', 'conocimiento', 'consecuencia', 'conseguir', 'conservar', 'considerar', 'consistir', 'constante', 'constituir',
  'construir', 'contacto', 'contar', 'contemplar', 'contener', 'contestar', 'continuar', 'contra', 'contrario', 'control',
  'controlar', 'convencer', 'conversaci??n', 'convertir', 'coraz??n', 'correr', 'corresponder', 'corriente', 'cortar', 'cosa',
  'costumbre', 'crear', 'crecer', 'creer', 'crisis', 'cruzar', 'cuadro', 'cual', 'cualquier', 'cuando',
  'cuanto', 'cuarta', 'cuarto', 'cuatro', 'cubrir', 'cuenta', 'cuerpo', 'cuestiones', 'cuesti??n', 'cultura',
  'cultural', 'cumplir', 'cuya', 'cuyo', 'cu??l', 'cu??nto', 'c??lula', 'c??mo', 'dar', 'dato',
  'de', 'deber', 'decidir', 'decir', 'decisi??n', 'declarar', 'dedicar', 'dedo', 'defender', 'defensa',
  'definir', 'definitivo', 'dejar', 'del', 'demasiado', 'democracia', 'demostrar', 'dem??s', 'depender', 'derecha',
  'derecho', 'desaparecer', 'desarrollar', 'desarrollo', 'desconocer', 'descubrir', 'desde', 'desear', 'deseo', 'despertar',
  'despu??s', 'destino', 'detener', 'determinar', 'diaria', 'diario', 'diez', 'diferencia', 'diferente', 'dificultad',
  'dif??cil', 'dinero', 'dios', 'diosa', 'direcci??n', 'directo', 'director', 'directora', 'dirigir', 'disponer',
  'distancia', 'distinto', 'diverso', 'doble', 'doctor', 'doctora', 'dolor', 'don', 'donde', 'dormir',
  'dos', 'duda', 'durante', 'duro', 'd??a', 'd??nde', 'e', 'echar', 'econ??mico', 'edad',
  'efecto', 'ejemplo', 'ej??rcito', 'el', 'elecci??n', 'elegir', 'elemento', 'elevar', 'ella', 'empezar',
  'empresa', 'en', 'encender', 'encima', 'encontrar', 'encuentro', 'energ??a', 'enfermedad', 'enfermo', 'enorme',
  'entender', 'enterar', 'entonces', 'entrada', 'entrar', 'entre', 'entregar', 'enviar', 'equipo',
  'error', 'esa', 'escapar', 'escribir', 'escritor', 'escritora', 'escuchar', 'ese', 'esfuerzo', 'eso',
  'espacio', 'espalda', 'especial', 'especie', 'esperanza', 'esperar', 'esp??ritu',
  'esta', 'establecer', 'estado', 'estar', 'este', 'esto', 'estrella', 'estructura', 'estudiar', 'estudio',
  'etapa', 'europa', 'europea', 'europeo', 'evidente', 'evitar', 'exacta', 'exacto', 'exigir', 'existencia',
  'existir', 'experiencia', 'explicar', 'expresi??n', 'extender', 'exterior', 'extranjera', 'extranjero', 'extremo',
  'falta', 'faltar', 'familia', 'familiar', 'famoso', 'fen??meno', 'fiesta', 'figura', 'fijar', 'fin',
  'final', 'flor', 'fondo', 'forma', 'formar', 'francesa', 'francia', 'franc??s', 'frase', 'frecuencia',
  'frente', 'fr??a', 'fr??o', 'fuego', 'fuente', 'fuerte', 'fuerza', 'funcionar', 'funci??n', 'fundamental',
  'futuro', 'f??cil', 'f??sico', 'f??tbol', 'ganar', 'general', 'gente', 'gesto', 'gobierno', 'golpe',
  'gracia', 'gran', 'grande', 'grave', 'gritar', 'grupo', 'guardar', 'guerra', 'gustar', 'gusto',
  'haber', 'habitaci??n', 'habitual', 'hablar', 'hacer', 'hacia', 'hallar', 'hasta', 'hecha', 'hecho',
  'hermana', 'hermano', 'hermosa', 'hermoso', 'hija', 'hijo', 'historia', 'hist??rico', 'hombre', 'hombro',
  'hora', 'hoy', 'humana', 'humano', 'idea', 'iglesia', 'igual', 'imagen', 'imaginar', 'impedir',
  'imponer', 'importancia', 'importante', 'importar', 'imposible', 'im??genes', 'incluir', 'incluso', 'indicar', 'individuo',
  'informaciones', 'informaci??n', 'informar', 'inglesa', 'ingl??s', 'iniciar', 'inmediata', 'inmediato', 'insistir', 'instante',
  'intentar', 'interesar', 'intereses', 'interior', 'internacional', 'inter??s', 'introducir', 'ir', 'izquierda', 'jam??s',
  'jefa', 'jefe', 'joven', 'juego', 'jugador', 'jugar', 'juicio', 'junto', 'justo', 'labio',
  'lado', 'lanzar', 'largo', 'lector', 'lectora', 'leer', 'lengua', 'lenguaje', 'lento', 'levantar',
  'ley', 'libertad', 'libre', 'libro', 'limitar', 'literatura', 'llamar', 'llegar', 'llenar', 'lleno',
  'llevar', 'llorar', 'lo', 'loca', 'loco', 'lograr', 'lucha', 'luego', 'lugar', 'luz',
  'l??nea', 'madre', 'mal', 'mala', 'malo', 'mandar', 'manera', 'manifestar', 'mano', 'mantener',
  'mar', 'marcar', 'marcha', 'marchar', 'marido', 'mas', 'masa', 'matar', 'materia', 'material',
  'mayor', 'mayor??a', 'media', 'mediante', 'medida', 'medio', 'mejor', 'memoria', 'menor',
  'menos', 'menudo', 'mercado', 'merecer', 'mes', 'mesa', 'meter', 'metro', 'mi', 'miedo',
  'miembro', 'mientras', 'mil', 'militar', 'mill??n', 'ministra', 'ministro', 'minuto', 'mirada', 'mirar',
  'mis', 'mismo', 'mitad', 'modelo', 'moderna', 'moderno', 'modo', 'momento', 'moral', 'morir',
  'mostrar', 'motivo', 'mover', 'movimiento', 'muchacha', 'muchacho', 'mucho', 'muerte', 'mujer', 'mujeres',
  'mundial', 'mundo', 'muy', 'm??quina', 'm??s', 'm??ximo', 'm??dica', 'm??dico', 'm??todo', 'm??',
  'm??a', 'm??nima', 'm??nimo', 'm??o', 'm??sica', 'nacer', 'nacional', 'nada', 'nadie', 'natural',
  'naturaleza', 'necesaria', 'necesario', 'necesidad', 'necesitar', 'negar', 'negocio', 'negra', 'negro', 'ni',
  'ninguna', 'ninguno', 'ning??n', 'nivel', 'no', 'noche', 'nombre', 'normal',
  'norteamericana', 'norteamericano', 'notar', 'noticia', 'novela', 'nuestra', 'nuestro', 'nueva', 'nuevo', 'nunca',
  'n??mero', 'o', 'objetivo', 'objeto', 'obligar', 'obra', 'observar', 'obtener', 'ocasiones', 'ocasi??n',
  'ocho', 'ocupar', 'ocurrir', 'oficial', 'ofrecer', 'ojo', 'olvidar', 'operaci??n', 'opini??n', 'origen',
  'oro', 'or??genes', 'oscura', 'oscuro', 'otra', 'otro', 'o??r', 'paciente', 'padre', 'pagar',
  'palabra', 'papel', 'par', 'para', 'parar', 'parecer', 'pared', 'pareja', 'parte', 'participar',
  'particular', 'partido', 'partir', 'pasa', 'pasado', 'pasar', 'paso', 'paz', 'pa??s', 'pa??ses',
  'pecho', 'pedir', 'peligro', 'pelo', 'pel??cula', 'pena', 'pensamiento', 'pensar', 'peor',
  'perder', 'perfecto', 'periodista', 'peri??dica', 'peri??dico', 'permanecer', 'permitir', 'pero', 'perra',
  'perro', 'persona', 'personaje', 'personal', 'pertenecer', 'pesar', 'peso', 'pie', 'piedra', 'piel',
  'pierna', 'piso', 'placer', 'plan', 'plantear', 'plaza', 'pleno', 'poblaciones', 'poblaci??n', 'pobre',
  'poca', 'poco', 'poder', 'polic??a', 'pol??tica', 'pol??tico', 'poner', 'por', 'porque', 'poseer',
  'posibilidad', 'posible', 'posiciones', 'posici??n', 'precio', 'precisa', 'preciso', 'preferir', 'pregunta', 'preguntar',
  'prensa', 'preocupar', 'preparar', 'presencia', 'presentar', 'presente', 'presidente', 'pretender', 'primer', 'primera',
  'primero', 'principal', 'principio', 'privar', 'probable', 'problema', 'proceso', 'producir', 'producto', 'profesional',
  'profesor', 'profesora', 'profunda', 'profundo', 'programa', 'pronta', 'pronto', 'propia', 'propio', 'proponer',
  'provocar', 'proyecto', 'prueba', 'pr??ctico', 'pr??xima', 'pr??ximo', 'publicar', 'pueblo', 'puerta', 'pues',
  'puesto', 'punto', 'pura', 'puro', 'p??gina', 'p??blica', 'p??blico', 'que', 'quedar', 'querer',
  'quien', 'quitar', 'quiz??', 'qui??n', 'qu??', 'radio', 'rato', 'razones', 'raz??n', 'real',
  'realidad', 'realizar', 'recibir', 'reciente', 'recoger', 'reconocer', 'recordar', 'recorrer', 'recuerdo', 'recuperar',
  'reducir', 'referir', 'regresar', 'relaciones', 'relaci??n', 'religiosa', 'religioso', 'repetir', 'representar', 'resolver',
  'responder', 'responsable', 'respuesta', 'resto', 'resultado', 'resultar', 'reuniones', 'reunir', 'reuni??n', 'revista',
  'rey', 're??r', 'rica', 'rico', 'riesgo', 'rodear', 'roja', 'rojo', 'romper', 'ropa',
  'rostro', 'r??pida', 'r??pido', 'r??gimen', 'r??o', 'saber', 'sacar', 'sala', 'salida', 'salir',
  'sangre', 'secreta', 'secreto', 'sector', 'seguir', 'segundo', 'segura', 'seguridad', 'seguro', 'seg??n',
  'seis', 'semana', 'semejante', 'sensaciones', 'sensaci??n', 'sentar', 'sentida', 'sentido', 'sentimiento', 'sentir',
  'separar', 'ser', 'seria', 'serie', 'serio', 'servicio', 'servir', 'sexo', 'sexual',
  'si', 'sido', 'siempre', 'siete', 'siglo', 'significar', 'siguiente', 'silencio',
  'simple', 'sin', 'sino', 'sistema', 'sitio', 'situaciones', 'situaci??n', 'situar', 'sobre', 'social',
  'socialista', 'sociedad', 'sol', 'sola', 'solo', 'soluciones', 'soluci??n', 'sombra', 'someter', 'sonar',
  'sonre??r', 'sonrisa', 'sorprender', 'sostener', 'su', 'subir', 'suceder', 'suelo', 'suerte',
  'suficiente', 'sufrir', 'superar', 'superior', 'suponer', 'surgir', 'suya', 'suyo', 's??', 's??lo',
  'tal', 'tambi??n', 'tampoco', 'tan', 'tanta', 'tanto', 'tarde', 'tarea', 'televisiones', 'televisi??n',
  'tema', 'temer', 'tender', 'tener', 'teor??a', 'tercer', 'terminar', 'texto', 'tiempo', 'tierra',
  'tipa', 'tipo', 'tirar', 'tocar', 'toda', 'todav??a', 'todo', 'tomar', 'tono', 'total',
  'trabajar', 'trabajo', 'traer', 'tras', 'tratar', 'tres', 'tu', 't??cnica', 't??cnico', 't??rmino',
  't??a', 't??o', 't??tulo', 'un', 'una', 'unidad', 'unir', 'uno', 'usar', 'uso',
  'usted', 'utilizar', 'vac??a', 'vac??o', 'valer', 'valor', 'varias', 'varios', 'veces', 'vecina',
  'vecino', 'veinte', 'velocidad', 'vender', 'venir', 'ventana', 'ver', 'verano', 'verdad', 'verdadera',
  'verdadero', 'verde', 'vestir', 'vez', 'viaje', 'vida', 'vieja', 'viejo', 'viento', 'violencia',
  'vista', 'viva', 'vivir', 'vivo', 'voces', 'voluntad', 'volver', 'voz', 'vuelta', 'y',
  'ya', 'yo', 'zona', '??rbol', '??l', '??poca', '??sta', '??ste', '??xito', '??ltima',
  '??ltimo', '??nica', '??nico']
  
  function words(options) {
    function word() {
      return wordList[randInt(wordList.length)];
    }
  
    function randInt(lessThan) {
      return Math.floor(Math.random() * lessThan);
    }
  
    // No arguments = generate one word
    if (typeof(options) === 'undefined') {
      return word();
    }
  
    // Just a number = return that many words
    if (typeof(options) === 'number') {
      options = { exactly: options };
    }
  
    // options supported: exactly, min, max, join
  
    if (options.exactly) {
      options.min = options.exactly;
      options.max = options.exactly;
    }
    var total = options.min + randInt(options.max + 1 - options.min);
    var results = [];
    for (var i = 0; (i < total); i++) {
      results.push(word());
    }
    if (options.join) {
      results = results.join(options.join);
    }
    return results;
  }
  
  module.exports = words;
  
  },{}]},{},[1]);