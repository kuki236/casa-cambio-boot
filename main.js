const $elemento = $('#botonCambiar')
$elemento.click( function(){
    limpiarPantalla()
    ocultarInfo()
    mostrarCambios();
})
const informacionPagina = $('.informacionPagina')
function ocultarInfo(){
    informacionPagina
    .addClass('oculto')
}
function mostrarCambios(){
    const valorSeleccionado = $('#selectMoneda').val();
    console.log(valorSeleccionado)
    const urlApiNueva = 'https://v6.exchangerate-api.com/v6/c5f93ef8d82c885c78c67caf/latest/' + valorSeleccionado
    console.log(urlApiNueva)
    fetch(urlApiNueva)
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
        const fila = $('.filaMonedas')
        const valorCantidad= Number($('#numeroCalcular').val())
        Object.keys(respuestaJSON.conversion_rates).forEach(moneda =>{
            const cantidadConvertida = (Number(respuestaJSON.conversion_rates[moneda])*valorCantidad).toFixed(2)
            const divMoneda = $('<div></div>').text(miObjeto.monedaa[moneda] + ' ' + cantidadConvertida);
            divMoneda.addClass("col-md-2")
            divMoneda.addClass("elementoMoneda")
             fila.append(divMoneda);
        })
    }) 
};
function limpiarPantalla(){
    $('.filaMonedas').html('')
}