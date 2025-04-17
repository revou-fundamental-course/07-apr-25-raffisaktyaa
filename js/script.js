// Function to validate the form
    document.getElementById('messageForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const birthdate = document.getElementById('birthdate').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const message = document.getElementById('message').value;

    // Tampilkan nama di bagian welcome
    document.getElementById('welcome-message').innerText = `Hi ${name}, Welcome to my website`;

    // Tampilkan hasil isian form di sebelah kanan
    const now = new Date();
    const output = `
        <p><strong>Current time:</strong> ${now}</p>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;
    document.getElementById('formOutput').innerHTML = output;

    // Reset form (opsional)
    // document.getElementById('messageForm').reset();
    });


let indexBanner = 0;

function nextBanner() {
    indexBanner += 1;
    showBanner();
}

function showBanner() {
    const bannerList = document.getElementsByClassName('banner-img');

    if (indexBanner > bannerList.length - 1) {
        indexBanner = 0;
    }

    for (let i = 0; i < bannerList.length; i++) {
        bannerList[i].style.display = 'none';
    }

    bannerList[indexBanner].style.display = 'block';
}

// Tampilkan banner pertama
showBanner();

// Auto ganti banner setiap 3 detik
setInterval(() => {
    nextBanner();
}, 3000);
