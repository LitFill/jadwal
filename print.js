/**
 * Objek yang menyimpan jadwal pelajaran untuk setiap hari dalam seminggu.
 * Kunci adalah nama hari dalam bahasa Indonesia, dan nilai adalah array
 * dari objek yang berisi waktu dan nama pelajaran.
 * @type {Object.<string, Array<{waktu: string, pelajaran: string}>>}
 */
const jadwal = {
    Senin: [
        { waktu: "08:00 - 08:50", pelajaran: "Aqidah" },
        { waktu: "08:50 - 09:40", pelajaran: "Bimbingan Bahtsu" },
        { waktu: "09:40 - 10:15", pelajaran: "Istirahat" },
        { waktu: "10:15 - 11:10", pelajaran: "Bimbingan Bahtsu" },
        { waktu: "11:10 - 12:00", pelajaran: "Bimbingan Bahtsu" },
        { waktu: "14:00 - 15:00", pelajaran: "Nahwu" },
        { waktu: "15:00 - 16:00", pelajaran: "Balaghoh" },
    ],
    Selasa: [
        { waktu: "08:00 - 08:50", pelajaran: "Ushul Fiqih" },
        { waktu: "08:50 - 09:40", pelajaran: "Ulumul Qur'an" },
        { waktu: "09:40 - 10:15", pelajaran: "Istirahat" },
        { waktu: "10:15 - 11:10", pelajaran: "Bimbingan Bahtsu" },
        { waktu: "11:10 - 12:00", pelajaran: "Bimbingan Bahtsu" },
    ],
    Rabu: [
        { waktu: "08:00 - 08:50", pelajaran: "Shorof" },
        { waktu: "08:50 - 09:40", pelajaran: "Manthiq" },
    ],
    Kamis: [
        { waktu: "08:00 - 08:50", pelajaran: "Bimbingan Bahtsu" },
        { waktu: "08:50 - 09:40", pelajaran: "Bimbingan Bahtsu" },
        { waktu: "09:40 - 10:15", pelajaran: "Istirahat" },
        { waktu: "10:15 - 11:10", pelajaran: "Fiqih" },
        { waktu: "11:10 - 12:00", pelajaran: "Fiqih" },
    ],
    Jumat: [
        { waktu: "08:00 - 09:00", pelajaran: "Bimbingan Bahtsu" },
        { waktu: "09:00 - 10:00", pelajaran: "Manthiq" },
        { waktu: "10:00 - 11:00", pelajaran: "Ushul Fiqih" },
    ],
    Sabtu: [
        { waktu: "08:00 - 08:50", pelajaran: "Aqidah" },
        { waktu: "10:15 - 11:10", pelajaran: "Qowaid Fiqih" },
        { waktu: "11:10 - 12:00", pelajaran: "Qowaid Fiqih" },
    ],
};

function printJadwal() {
    for (const hari in jadwal) {
        console.log(`
h2 .text-xl { "${hari}" }
table .table {
    thead {
        tr {
            th {}
            th { "Pelajaran" }
            th { "Waktu" }
        }
    }
    tbody {
`)
        if (jadwal[hari] && jadwal[hari].length > 0) {
            const items =
                jadwal[hari].map((item, index) => `
tr {
    th { "${index + 1}" }
    th { "${item.pelajaran}" }
    th { "${item.waktu}" }
}
`);
            // console.log(items.join('div .divider {}'));
            console.log(items.join(""));
            console.log("\n}\n}")
        } else {
            console.log('p .no-jadwal { "tidak ada jadwal untuk hari ini</p>" }');
        }
    }
}

printJadwal();
