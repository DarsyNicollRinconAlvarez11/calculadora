const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.items');
botones.forEach(boton =>{
    boton.addEventListener('click',() =>{
        const botonApretado = boton.textContent;
        if (boton.id === 'c'){
            pantalla.textContent = '0';
            return;
        }
        if (boton.id === 'igual'){
            try {
                pantalla.textContent = math.evaluate(pantalla.textContent);
                return;
            } catch {
                pantalla.textContent= 'Error!'
                return
            }
        }
        if (boton.id === 'sin'){
            let radianes = (pantalla.textContent*math.PI) / 180
            pantalla.textContent = math.sin(radianes);
            return;
        }
        if (boton.id === 'cos'){
            let radianes = (pantalla.textContent*math.PI) / 180
            pantalla.textContent = math.cos(radianes);
            return;
        }
        if (boton.id === 'tan'){
            let radianes = (pantalla.textContent*math.PI) / 180
            pantalla.textContent = math.tan(radianes);
            return;
        }
        if (boton.id === 'raiz'){
            pantalla.textContent = math.sqrt(pantalla.textContent );
            return;
        }
        if (boton.id === 'exp'){
            pantalla.textContent += '^';
            pantalla.textContent = math.evaluate(pantalla.textContent );
            return;
        }
        if (pantalla.textContent === '0' || pantalla.textContent=== 'Error!' || pantalla.textContent=== 'Infinity') {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    })
} )