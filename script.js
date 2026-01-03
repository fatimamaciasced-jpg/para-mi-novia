function mensaje(num) {
    let texto = "";

    if (num === 1) {
        texto = "💖 espero me perdones por todo lo sucedido amor 💖";
    }
    if (num === 2) {
        texto = "🌹 No importa el lugar, mientras estés tú 🌹";
    }
    if (num === 3) {
        texto = "✨ Te amo más de lo que imaginas ✨";
    }

    document.getElementById("popup-texto").innerText = texto;
    document.getElementById("popup").style.display = "flex";
}

function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
}


