function hitungLuas() {
    let sisi = document.getElementById("inputLuas").value;
    let hasilLuas = document.getElementById("hasilLuas");

    if (!sisi || sisi <= 0) {
        alert("Masukkan nilai sisi yang valid!");
        return;
    }

    let luas = sisi * sisi;
    hasilLuas.innerHTML = `
        <p><b>Perhitungan:</b></p>
        <p>L = S × S</p>
        <p>L = ${sisi} × ${sisi}</p>
        <p><b>L = ${luas}</b></p>
    `;
}

function hitungKeliling() {
    let sisi = document.getElementById("inputKeliling").value;
    let hasilKeliling = document.getElementById("hasilKeliling");

    if (!sisi || sisi <= 0) {
        alert("Masukkan nilai sisi yang valid!");
        return;
    }

    let keliling = 4 * sisi;
    hasilKeliling.innerHTML = `
        <p><b>Perhitungan:</b></p>
        <p>K = 4 × S</p>
        <p>K = 4 × ${sisi}</p>
        <p><b>K = ${keliling}</b></p>
    `;
}

function resetLuas() {
    document.getElementById("inputLuas").value = "";
    document.getElementById("hasilLuas").innerHTML = "";
}

function resetKeliling() {
    document.getElementById("inputKeliling").value = "";
    document.getElementById("hasilKeliling").innerHTML = "";
}
