/// <reference types="jquery" />
const urlApi= "https://v6.exchangerate-api.com/v6/c5f93ef8d82c885c78c67caf/codes"
let miObjeto = { monedaa: {} }; 
fetch(urlApi)
  .then(respuesta => respuesta.json())
  .then(respuestaJSON => {
    const selectMoneda = $('#selectMoneda');
    Object.values(respuestaJSON.supported_codes).forEach(moneda => {
        const codigo = moneda[0];
        const nombre = moneda[1];
        const opcion = $('<option></option>').attr('value', moneda[0]).text(moneda[1]);
        miObjeto.monedaa[codigo] = nombre;
        selectMoneda.append(opcion);
    });
    console.log(miObjeto);
  });
