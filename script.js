document.getElementById('startButton').addEventListener('click', function() {
    startExercise();
});

let columnshtml = document.getElementById("columns");
var visualInterval;
var timerInterval;
var column1Words, column2Words, column3Words;
var originalWords = [
    "Gran animal gris", "Instrumento de cuerdas", "Arena y mar", "Máquina de datos", "Elevación de tierra", "Dulce de cacao", "Todo lo existente", "Texto impreso", "Cuerpo celeste brillante", "Fruta roja pequeña", "Ruta al frente", "Mascota leal", "Experiencia emocionante", "Melodía con letra", "Área con árboles", "Espacio infinito azul", "Sentimiento profundo", "Teclas musicales", "Trayecto largo", "Postre frío", "Gran cuerpo acuático", "Satélite natural", "Estrella diurna", "Fenómeno colorido", "Lugar para vivir", "Planta con pétalos", "Insecto polinizador", "Insecto alado colorido", "Luz matutina", "Vapor condensado", "Destello en cielo", "Persona admirable", "Gesto feliz", "Artista de danza", "Corriente de aire", "Caída de agua", "Flor alta amarilla", "Región árida", "Medidor de tiempo", "Gran cuerpo acuático", "Partículas de playa", "Ser marino exótico", "Criatura mitológica acuática", "Vehículo espacial", "Movimiento de agua", "Sueño profundo", "Momento al despertar", "Final del día", "Línea distante vista", "Paz interior", "Imagen reflejada", "Elevación suave", "Vapor en aire", "Ausencia de sonido", "Pensamiento profundo", "Planta leñosa", "Corriente de agua", "Ave voladora", "Partes de planta", "Agua cayendo", "Conjunto de escalones", "Transporte acuático", "Tierra rodeada de agua", "Precipitación blanca", "Partícula de nieve", "Piedra preciosa", "Gema redonda", "Aire suave", "Ruido suave", "Cuerpo de agua", "Sol bajando", "Asiento de caballo", "Fenómeno brillante", "Animal rápido", "Vapor espeso", "Elemento ígneo", "Rayo con trueno", "Estado de calma", "Momento de pausa", "Caminata ligera", "Señal de paso", "Lugar perfecto", "Vínculo cercano", "Órgano vital", "Memoria pasada", "Composición sonora", "Fuente de ideas", "Acto de crear", "Comienzo de vida", "Etapa juvenil", "Primera etapa", "Estado de liberación", "Lugar protegido", "Espacio verde cuidado", "Planta exótica", "Superficie reflectante", "Cueva subterránea", "Lugar sagrado", "Torre luminosa", "Estado de equilibrio", "Sentimiento de futuro", "Sonido metálico", "Líquido ocular", "Brillo rápido", "Primera luz", "Tonos vibrantes", "Fuente de luz", "Cristal transparente", "Curva en cielo", "Corriente de agua", "Diseño básico", "Cambio de agua", "Grupo de estrellas", "Techo abovedado", "Planeta firme", "Narración breve", "Onda sonora", "Recorrido largo", "Cabaña rústica", "Aroma agradable", "Vapor condensado", "Campo de trigo", "Fruto de cosecha", "Niebla ligera", "Ondas pequeñas", "Burbujas marinas", "Partículas en playa", "Caída de agua", "Ave pequeña", "Agua en planta", "Eco lejano", "Residuos quemados", "Parte subterránea", "Material orgánico", "Tierra húmeda", "Molino de viento", "Vistazo rápido", "Sonido sutil", "Ave marina", "Parte de planta", "Proceso de florecer", "Ritmo musical", "Área oscura", "Sendero pequeño", "Punto de vista", "Persona vigilante", "Colina pequeña", "Formación mineral", "Barco con vela", "Persona náufraga", "Flujo acuático", "Escultura espiritual", "Jardín frutal", "Nube estelar", "Objeto luminoso", "Guía constante", "Estado de calma", "Instrumento musical", "Haz de luz", "Lugar de observación", "Estructura alta", "Estructura elevada", "Torre de vigilancia", "Cueva subterránea", "Césped verde", "Campo abierto", "Material leñoso", "Brillo intenso", "Cielo estrellado", "Ave pequeña rápida", "Secuencia armónica", "Música instrumental", "Ambiente pacífico", "Valor y fuerza", "Corriente rápida", "Corriente de aire", "Barca pequeña", "Camino angosto", "Visión ilusoria", "Pequeño bosque", "Cadena montañosa", "Cambio de estación", "Cambio de estación", "Corriente de aire", "Brisa suave", "Tormenta fuerte", "Clima tormentoso", "Vapor en aire", "Agua en vapor", "Espacio infinito", "Cielo oscuro", "Fuente de luz", "Luz de mañana", "Estrella brillante", "Cuerpo celeste", "Objeto en cielo", "Condensación flotante", "Descarga eléctrica", "Ruido fuerte", "Corriente de agua", "Flujo natural", "Caída de agua", "Cuerpo de agua", "Pequeña laguna", "Agua estancada", "Gran cuerpo acuático", "Gran cuerpo acuático", "Movimiento de agua", "Partículas de playa", "Colina de arena", "Región seca", "Planeta sólido", "Valle profundo", "Suave elevación", "Gran formación rocosa", "Punto más alto", "Hielo en montaña", "Cordillera alta", "Conjunto de árboles", "Vegetación tropical", "Campo extenso", "Tierra cultivada", "Pequeño jardín", "Cueva oculta", "Formación rocosa", "Borde elevado", "Pared rocosa", "Montaña volcánica", "Agujero volcánico", "Abertura de gas", "Agua caliente natural", "Terreno húmedo", "Roca sólida", "Pequeño río", "Camino estrecho", "Vía principal", "Vía pavimentada", "Área urbana", "Lugar pequeño", "Poblado pequeño", "Casa rural", "Residencia grande", "Construcción lujosa", "Estructura fortificada", "Construcción defensiva", "Muro protector", "Conexión elevada", "Paso subterráneo", "Pasaje estrecho", "Vía principal", "Área comercial", "Almacén agrícola", "Refugio animal", "Cultivo de uvas", "Área de cultivo", "Campo de pinos", "Pequeña bahía", "Área costera", "Playa arenosa", "Línea lejana vista", "Precipitación blanca", "Clima frío", "Corriente de aire", "Bajo cero", "Punto más alto", "Suave elevación", "Planta con tronco", "Árbol perenne", "Árbol maderable", "Árbol fuerte", "Árbol llorón", "Árbol alto", "Árbol frutal", "Árbol de frutas", "Árbol cítrico", "Árbol mediterráneo", "Árbol frutal", "Árbol alto", "Planta trepadora", "Planta trepadora", "Planta con espinas", "Planta decorativa", "Planta tropical", "Flor alta amarilla", "Planta ornamental", "Flor de primavera", "Planta aromática", "Flor con fragancia", "Flor de agua", "Flor grande", "Planta decorativa", "Planta resistente", "Flor colgante", "Flor de campo", "Flor vibrante", "Hierba curativa", "Planta medicinal", "Hierba aromática", "Planta culinaria", "Planta aromática", "Hierba refrescante", "Infusión curativa", "Planta calmante", "Planta silvestre", "Raíz curativa", "Especia aromática", "Semilla comestible", "Especia aromática", "Especia picante", "Grano aromático", "Semilla amarga", "Vaina fragante", "Cristal dulce", "Miel dorada", "Caramelo suave", "Dulce con cacao", "Pastel dulce", "Pastel de frutas", "Galleta crujiente", "Bizcocho suave", "Postre cremoso", "Postre suave", "Postre con crema", "Postre ligero", "Postre frío", "Postre helado", "Postre refrescante", "Postre frío", "Postre cremoso", "Lácteo fermentado", "Producto lácteo", "Pan de harina", "Pan largo", "Pan francés", "Emparedado clásico", "Mezcla de vegetales", "Alimento saludable", "Comida caliente", "Comida tradicional", "Plato español", "Comida asiática", "Plato japonés", "Comida italiana", "Pasta italiana", "Plato de arroz", "Carne de ave", "Carne roja", "Plato de carne", "Carne con hueso", "Carne con especias", "Plato con hierbas", "Plato vegetariano", "Comida exótica", "Postre refrescante", "Postre dulce", "Bebida refrescante", "Bebida caliente", "Bebida con cafeína", "Bebida fría", "Bebida con gas", "Líquido natural", "Líquido caliente", "Agua caliente", "Líquido burbujeante", "Líquido refrescante", "Bebida alcohólica", "Líquido oscuro", "Bebida con cafeína", "Líquido dulce", "Jugo de frutas", "Zumo de uvas", "Agua con gas", "Líquido transparente", "Bebida sin gas", "Líquido transparente", "Líquido con burbujas", "Líquido sin gas", "Bebida tropical", "Zumo exótico", "Bebida espumosa", "Jugo con pulpa", "Líquido fermentado", "Líquido embotellado", "Líquido envasado", "Bebida sin gas", "Líquido refrescante", "Líquido caliente", "Líquido tibio", "Bebida fría", "Zumo de frutas", "Jugo natural", "Bebida fría"
];

function startExercise() {
    var instructionParagraphs = document.querySelectorAll('.instruction');
    for (var i = 0; i < instructionParagraphs.length; i++) {
        instructionParagraphs[i].style.display = 'none';
    }
    // Ocultar botón de inicio
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('containerInputButton').style.display = 'none';
    document.getElementById("title").classList.add("hidden");
    columnshtml.classList.remove("hidden");
    
    columnshtml.style.display = "flex";
    // Obtener la velocidad del recorrido desde el campo de entrada
    var speedInput = document.getElementById('speedInput');
    var velocidadRecorrido = parseInt(speedInput.value);
    
    // Iniciar temporizador
    startTimer();
    
    // Inicializar las palabras y el recorrido visual
    initializeWords();
    startVisualRecorrido(velocidadRecorrido);
}

function initializeWords() {
    // Barajar las palabras aleatoriamente
    originalWords = shuffle(originalWords);
    // Dividir las palabras en tres columnas
    column1Words = originalWords.slice(0, 12);
    column2Words = originalWords.slice(12, 24);
    column3Words = originalWords.slice(24, 36);

    // Mostrar las palabras en las columnas
    displayWords();
}

function shuffle(array) {
    var currentIndex = array.length, randomIndex, temporaryValue;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function displayWords() {
    var column1 = document.getElementById('column1');
    var column2 = document.getElementById('column2');
    var column3 = document.getElementById('column3');

    // Limpiar columnas
    column1.innerHTML = '';
    column2.innerHTML = '';
    column3.innerHTML = '';

    // Mostrar palabras en las columnas
    for (var i = 0; i < 12; i++) {
        column1.innerHTML += '<p>' + column1Words[i] + '</p>';
        column2.innerHTML += '<p>' + column2Words[i] + '</p>';
        column3.innerHTML += '<p>' + column3Words[i] + '</p>';
    }
}

function startVisualRecorrido(velocidadRecorrido) {
    clearInterval(visualInterval);
    var columns = document.querySelectorAll('.column p');
    var currentColumnIndex = 0;
    var currentRowIndex = 0;
    var highlightedWordIndex = -1;

    visualInterval = setInterval(function() {
        // Resetear el estilo de la palabra anteriormente resaltada
        if (highlightedWordIndex >= 0) {
            var previousWordIndex = currentColumnIndex * 12 + highlightedWordIndex;
            columns[previousWordIndex].style.backgroundColor = '';
            columns[previousWordIndex].style.fontWeight = 'normal'; // Restaurar fuente normal
        }

        // Incrementar el índice de la palabra resaltada
        highlightedWordIndex++;

        // Si se ha llegado al final de una columna, pasar a la siguiente columna
        if (highlightedWordIndex >= 12) {
            currentColumnIndex++;
            currentRowIndex = 0; // Restablecer el índice de la fila
            highlightedWordIndex = 0;

            // Si se ha llegado al final de la última columna, reiniciar el recorrido
            if (currentColumnIndex >= 3) {
                currentColumnIndex = 0;
                // Barajar las palabras nuevamente
                shuffleWords();
                // Reiniciar el índice de la palabra resaltada
                highlightedWordIndex = -1;
                clearInterval(visualInterval);
                startVisualRecorrido(velocidadRecorrido); // Reiniciar el recorrido
            }
        }

        // Asegurarse de que el índice de la fila no exceda el número de palabras en la columna
        if (currentRowIndex < 12) {
           // Resaltar la palabra actual
           var currentWordIndex = currentColumnIndex * 12 + currentRowIndex;
           columns[currentWordIndex].style.backgroundColor = '#ffc107';
           columns[currentWordIndex].style.fontWeight = 'bold'; // Aplicar fuente en negrita
           currentRowIndex++;
        }
    }, velocidadRecorrido); // Usar la velocidad del recorrido proporcionada por el usuario
}




function shuffleWords() {
    clearInterval(visualInterval);

    // Barajar las palabras nuevamente
    column1Words = shuffle(column1Words);
    column2Words = shuffle(column2Words);
    column3Words = shuffle(column3Words);

    // Mostrar las palabras en las columnas
    displayWords();
    startVisualRecorrido();
                    
}

function startTimer(){
    var timerElement = document.getElementById('timer');
    var totalTime = 300; // 5 minutos en segundos
    var minutes, seconds;
    timerInterval = setInterval(function() {
        minutes = Math.floor(totalTime / 60);
        seconds = totalTime % 60;
        timerElement.innerHTML = 'Tiempo restante: ' + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

        if (totalTime <= 0) {
            clearInterval(timerInterval);
            clearInterval(visualInterval);
            alert('¡El ejercicio ha terminado!');
            return;
        }
        totalTime--;
    }, 1000); // Actualizar
}
