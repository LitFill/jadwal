const jadwal = {
    "Senin": [
        { waktu: "08:00 - 08:50", pelajaran: "Aqidah" },
        { waktu: "08:50 - 09:40", pelajaran: "Bimbingan Bahtsu" },
        { waktu: "09:40 - 10:15", pelajaran: "Istirahat" },
        { waktu: "10:15 - 11:10", pelajaran: "Bimbingan Bahtsu" },
        { waktu: "11:10 - 12:00", pelajaran: "Bimbingan Bahtsu" },
        { waktu: "14:00 - 15:00", pelajaran: "Nahwu" },
        { waktu: "15:00 - 16:00", pelajaran: "Balaghoh" },
    ],
    "Selasa": [
        { waktu: "08:00 - 08:50", pelajaran: "Ushul Fiqih" },
        { waktu: "08:50 - 09:40", pelajaran: "Ulumul Qur'an" },
        { waktu: "09:40 - 10:15", pelajaran: "Istirahat" },
        { waktu: "10:15 - 11:10", pelajaran: "Bimbingan Bahtsu" },
        { waktu: "11:10 - 12:00", pelajaran: "Bimbingan Bahtsu" },
    ],
    "Rabu": [
        { waktu: "08:00 - 08:50", pelajaran: "Shorof" },
        { waktu: "08:50 - 09:40", pelajaran: "Manthiq" },
    ],
    "Kamis": [
        { waktu: "08:00 - 08:50", pelajaran: "Bimbingan Bahtsu" },
        { waktu: "08:50 - 09:40", pelajaran: "Bimbingan Bahtsu" },
        { waktu: "09:40 - 10:15", pelajaran: "Istirahat" },
        { waktu: "10:15 - 11:10", pelajaran: "Fiqih" },
        { waktu: "11:10 - 12:00", pelajaran: "Fiqih" },
    ],
    "Jumat": [
        { waktu: "08:00 - 09:00", pelajaran: "Bimbingan Bahtsu" },
        { waktu: "09:00 - 10:00", pelajaran: "Manthiq" },
        { waktu: "10:00 - 11:00", pelajaran: "Ushul Fiqih" },
    ],
    "Sabtu": [
        { waktu: "08:00 - 08:50", pelajaran: "Aqidah" },
        { waktu: "10:15 - 11:10", pelajaran: "Qowaid Fiqih" },
        { waktu: "11:10 - 12:00", pelajaran: "Qowaid Fiqih" },
    ],
    // "Minggu": []
};

function tampilkanJadwal(hari) {
    const container = document.getElementById('jadwalContainer');
    container.innerHTML = '';
    if (jadwal[hari] && jadwal[hari].length > 0) {
        jadwal[hari].forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'jadwal-item card bg-base-300 h-20';
            div.innerHTML = `<h3>${item.pelajaran}</h3><p>${item.waktu}</p>`;
            container.appendChild(div);
            if (!(index >= jadwal[hari].length - 1)) {
                const divider = document.createElement('div');
                divider.className = 'divider';
                container.appendChild(divider);
            }
        });
    } else {
        container.innerHTML = '<p class="no-jadwal">Tidak ada jadwal untuk hari ini</p>';
    }
}

const hariIni = new Date().toLocaleDateString('id-ID', { weekday: 'long' });
tampilkanJadwal(hariIni);

const buttons = document.querySelectorAll('.hari-nav button');
buttons.forEach(button => {
    if (button.dataset.hari === hariIni) {
        button.classList.add('btn-neutral');
    }
    button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('btn-neutral'));
        this.classList.add('btn-neutral');
        tampilkanJadwal(this.dataset.hari);
    });
});
