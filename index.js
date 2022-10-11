var app = {};
var callback = data => {
    app.mensajes = data;
    var results = "";
    results += "<center> <h1>Ur My Type <br> Chat History</h1> </center>"
    app.mensajes.map(mensaje => {
        if (mensaje.name == "Madeleine") {
            results += "<div id='message-madeleine'>";
            results += "<div id='mensajero'>" + mensaje.name + "</div>"
            results += "<div id='text-madeleine'>" + mensaje.text + "</div>";   
            results += "</div>";
        }
        if (mensaje.name == "Miguel") {
            results += "<div id='message-miguel'>";
            results += "<div id='mensajero'>" + mensaje.name + "</div>"
            results += "<div id='text-miguel'>" + mensaje.text + "</div>";   
            results += "</div>";
        }
    })
    document.getElementById("results").innerHTML = results;
}
