// jadwal //
window.onload = () => {
    let hariSekarang = new Date().toLocaleDateString("id-ID", {
        weekday: "long"
    });
    hariSekarang = hariSekarang.toLowerCase(); // Biar sama dengan data-hari

    const semuaCard = document.querySelectorAll(".card");

    semuaCard.forEach(card => {
        const hariCard = card.getAttribute("data-hari").toLowerCase();
        if (hariCard !== hariSekarang) {
            card.style.display = "none";
        }
    });
};

// FUNGSI FORM //
const form = document.getElementById("form");
const status = document.getElementById("status");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
        name: form.Nama.value,
        message: form.Pesan.value
    };

    try {
        const response = await fetch("https://formspree.io/f/mvgqaweo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            status.textContent = "Message sent successfully!";
            form.reset();
        } else {
            status.textContent = "Failed to send message.";
        }
    } catch (err) {
        status.textContent = "Error sending message.";
    }
});