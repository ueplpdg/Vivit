let points = 0;
let currentRoutine = null;
let routineLevels = {
    pecho: 1,
    espalda: 1,
    hombros: 1,
    biceps: 1,
    triceps: 1,
    piernas: 1
};

// Mostrar sección
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Seleccionar rutina
function selectRoutine(type) {
    currentRoutine = type;
    const level = routineLevels[type];
    const details = document.getElementById("routine-details");
    details.innerHTML = `<h3>Rutina de ${type.charAt(0).toUpperCase() + type.slice(1)} - Nivel ${level}</h3>`;
    
    if (type === 'pecho') {
        details.innerHTML += `
            <div class="exercise">
                <h4>Press de banca</h4>
                <img src="assets/gifs/pecho_press_banca.gif" alt="Press de banca">
                <p>${4 + level} series de 10 repeticiones</p>
            </div>
            <div class="exercise">
                <h4>Flexiones</h4>
                <img src="assets/gifs/pecho_flexiones.gif" alt="Flexiones">
                <p>${3 + level} series de 15 repeticiones</p>
            </div>
        `;
    } else if (type === 'espalda') {
        details.innerHTML += `
            <div class="exercise">
                <h4>Dominadas</h4>
                <img src="assets/gifs/espalda_dominadas.gif" alt="Dominadas">
                <p>${3 + level} series de 8 repeticiones</p>
            </div>
            <div class="exercise">
                <h4>Remo con banda</h4>
                <img src="assets/gifs/espalda_remobanda.gif" alt="Remo con banda">
                <p>${4 + level} series de 12 repeticiones</p>
            </div>
        `;
    } else if (type === 'hombros') {
        details.innerHTML += `
            <div class="exercise">
                <h4>Press militar</h4>
                <img src="assets/gifs/hombros_press_militar.gif" alt="Press militar">
                <p>${4 + level} series de 10 repeticiones</p>
            </div>
            <div class="exercise">
                <h4>Elevaciones laterales</h4>
                <img src="assets/gifs/hombros_elevaciones_laterales.gif" alt="Elevaciones laterales">
                <p>${3 + level} series de 12 repeticiones</p>
            </div>
        `;
    } else if (type === 'biceps') {
        details.innerHTML += `
            <div class="exercise">
                <h4>Curl de bíceps</h4>
                <img src="assets/gifs/biceps_curl_biceps.gif" alt="Curl de bíceps">
                <p>${3 + level} series de 12 repeticiones</p>
            </div>
        `;
    } else if (type === 'triceps') {
        details.innerHTML += `
            <div class="exercise">
                <h4>Fondos</h4>
                <img src="assets/gifs/triceps_fondos.gif" alt="Fondos">
                <p>${3 + level} series de 15 repeticiones</p>
            </div>
        `;
    } else if (type === 'piernas') {
        details.innerHTML += `
            <div class="exercise">
                <h4>Sentadillas</h4>
                <img src="assets/gifs/piernas_sentadillas.gif" alt="Sentadillas">
                <p>${4 + level} series de 12 repeticiones</p>
            </div>
            <div class="exercise">
                <h4>Peso muerto</h4>
                <img src="assets/gifs/piernas_peso_muerto.gif" alt="Peso muerto">
                <p>${4 + level} series de 10 repeticiones</p>
            </div>
        `;
    }
    document.getElementById("complete-routine").style.display = "block";
}

// Completar rutina y ganar puntos
function completeRoutine() {
    if (currentRoutine) {
        const level = routineLevels[currentRoutine];
        points += 10 * level;
        routineLevels[currentRoutine]++;
        alert(`¡Rutina de ${currentRoutine} completada! Ganaste ${10 * level} puntos.`);
        document.getElementById("points").textContent = points;
        selectRoutine(currentRoutine);
    }
}

// Comprar con puntos
function buyWithPoints(cost, productName) {
    if (points >= cost) {
        points -= cost;
        alert(`Has comprado ${productName} con ${cost} puntos.`);
        document.getElementById("points").textContent = points;
    } else {
        alert("No tienes suficientes puntos para comprar este producto.");
    }
}

// Comprar con dinero (simulación)
function buyWithMoney(productName, price) {
    alert(`Redirigiendo a pasarela de pago para comprar ${productName} por $${price}.`);
}

// Calculadora de IMC
document.getElementById('bmi-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const bmi = (weight / (height * height)).toFixed(1);
    document.getElementById('bmi-result').innerHTML = `Tu IMC es: ${bmi}`;

    let dietPlan = "<h3>Plan de dieta (5 comidas al día):</h3><ul>";
    if (bmi < 18.5) {
        dietPlan += `
            <li><strong>Desayuno:</strong> Avena con leche entera, plátano y almendras (500 cal).</li>
            <li><strong>Media mañana:</strong> Batido de proteína con mantequilla de maní (350 cal).</li>
            <li><strong>Almuerzo:</strong> Pollo asado, arroz integral, aguacate (700 cal).</li>
            <li><strong>Merienda:</strong> Yogur griego con nueces y miel (300 cal).</li>
            <li><strong>Cena:</strong> Salmón con puré de papa y brócoli (600 cal).</li>
        `;
    } else if (bmi >= 18.5 && bmi < 25) {
        dietPlan += `
            <li><strong>Desayuno:</strong> Tostada integral con aguacate y huevo (350 cal).</li>
            <li><strong>Media mañana:</strong> Fruta fresca y un puñado de almendras (200 cal).</li>
            <li><strong>Almuerzo:</strong> Pechuga de pollo, quinoa y ensalada (500 cal).</li>
            <li><strong>Merienda:</strong> Yogur natural con semillas de chía (150 cal).</li>
            <li><strong>Cena:</strong> Pescado blanco con verduras al vapor (400 cal).</li>
        `;
    } else if (bmi >= 25 && bmi < 30) {
        dietPlan += `
            <li><strong>Desayuno:</strong> Clara de huevo con espinacas y té verde (200 cal).</li>
            <li><strong>Media mañana:</strong> Manzana y 10 almendras (150 cal).</li>
            <li><strong>Almuerzo:</strong> Pollo a la plancha con brócoli (350 cal).</li>
            <li><strong>Merienda:</strong> Zanahorias baby con hummus (100 cal).</li>
            <li><strong>Cena:</strong> Ensalada de atún con limón (250 cal).</li>
        `;
    } else {
        dietPlan += `
            <li><strong>Desayuno:</strong> Té verde y una rebanada de pan integral (150 cal).</li>
            <li><strong>Media mañana:</strong> Pepino con limón (50 cal).</li>
            <li><strong>Almuerzo:</strong> Sopa de verduras con pechuga de pavo (300 cal).</li>
            <li><strong>Merienda:</strong> Gelatina sin azúcar (50 cal).</li>
            <li><strong>Cena:</strong> Espárragos al vapor y huevo cocido (200 cal).</li>
        `;
    }
    dietPlan += "</ul>";
    document.getElementById('diet-plan').innerHTML = dietPlan;
});

// Registro de seguimiento
document.getElementById('tracking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('tracking-summary').innerHTML = 'Datos registrados.';
});

// Test de estrés
document.getElementById('stress-test').addEventListener('submit', function(e) {
    e.preventDefault();
    const stress1 = parseInt(document.getElementById('stress1').value);
    const stress2 = parseInt(document.getElementById('stress2').value);
    const score = stress1 + (6 - stress2);

    let feedback = `<h3>Nivel de estrés: ${score}/10</h3>`;
    if (score <= 4) {
        feedback += `
            <p><strong>Estrés bajo:</strong> Estás manejando bien tus niveles de estrés.</p>
            <p><strong>Consejos:</strong></p>
            <ul>
                <li>Mantén una rutina de sueño de 7-8 horas (National Sleep Foundation).</li>
                <li>Realiza pausas activas de 5 minutos cada hora para mantener la energía (estudio de Cornell University).</li>
            </ul>
        `;
    } else if (score <= 7) {
        feedback += `
            <p><strong>Estrés moderado:</strong> Hay señales de estrés que podrías abordar.</p>
            <p><strong>Consejos:</strong></p>
            <ul>
                <li>Prueba la técnica 4-7-8: inhala 4s, retiene 7s, exhala 8s (Dr. Andrew Weil).</li>
                <li>Haz ejercicio aeróbico 30 min, 3 veces por semana (reduce cortisol según Harvard Medical School).</li>
                <li>Limita la cafeína después del mediodía (afecta el sueño, Journal of Clinical Sleep Medicine).</li>
            </ul>
        `;
    } else {
        feedback += `
            <p><strong>Estrés alto:</strong> Necesitas atención para reducir tu estrés.</p>
            <p><strong>Consejos:</strong></p>
            <ul>
                <li>Meditación diaria de 10 min (reduce estrés en un 14%, estudio de JAMA Internal Medicine).</li>
                <li>Evita pantallas 1 hora antes de dormir (luz azul afecta melatonina, National Institutes of Health).</li>
                <li>Consulta a un profesional si persiste (APA recomienda intervención temprana).</li>
            </ul>
        `;
    }
    document.getElementById('stress-result').innerHTML = feedback;
});