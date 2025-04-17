/**
 * Objek yang menyimpan jadwal pelajaran untuk setiap hari dalam seminggu.
    * Kunci adalah nama hari dalam bahasa Indonesia, dan nilai adalah array
    * dari objek yang berisi waktu dan nama pelajaran.
 * @type {Object.<string, Array<{waktu: string, pelajaran: string}>>}
 */
const jadwal = {
    Senin: [
        { waktu: "08:00 - 08:50", pelajaran: "Aqidah"           },
        { waktu: "08:50 - 09:40", pelajaran: "Bimbingan Bahtsu" },
        { waktu: "09:40 - 10:15", pelajaran: "Istirahat"        },
        { waktu: "10:15 - 11:10", pelajaran: "Bimbingan Bahtsu" },
        { waktu: "11:10 - 12:00", pelajaran: "Bimbingan Bahtsu" },
        { waktu: "14:00 - 15:00", pelajaran: "Nahwu"            },
        { waktu: "15:00 - 16:00", pelajaran: "Balaghoh"         },
    ],
    Selasa: [
        { waktu: "08:00 - 08:50", pelajaran: "Ushul Fiqih"      },
        { waktu: "08:50 - 09:40", pelajaran: "Ulumul Qur'an"    },
        { waktu: "09:40 - 10:15", pelajaran: "Istirahat"        },
        { waktu: "10:15 - 11:10", pelajaran: "Bimbingan Bahtsu" },
        { waktu: "11:10 - 12:00", pelajaran: "Bimbingan Bahtsu" },
    ],
    Rabu: [
        { waktu: "08:00 - 08:50", pelajaran: "Shorof"           },
        { waktu: "08:50 - 09:40", pelajaran: "Manthiq"          },
    ],
    Kamis: [
        { waktu: "08:00 - 08:50", pelajaran: "Bimbingan Bahtsu" },
        { waktu: "08:50 - 09:40", pelajaran: "Bimbingan Bahtsu" },
        { waktu: "09:40 - 10:15", pelajaran: "Istirahat"        },
        { waktu: "10:15 - 11:10", pelajaran: "Fiqih"            },
        { waktu: "11:10 - 12:00", pelajaran: "Fiqih"            },
    ],
    Jumat: [
        { waktu: "08:00 - 09:00", pelajaran: "Bimbingan Bahtsu" },
        { waktu: "09:00 - 10:00", pelajaran: "Manthiq"          },
        { waktu: "10:00 - 11:00", pelajaran: "Ushul Fiqih"      },
    ],
    Sabtu: [
        { waktu: "08:00 - 08:50", pelajaran: "Aqidah"           },
        { waktu: "10:15 - 11:10", pelajaran: "Qowaid Fiqih"     },
        { waktu: "11:10 - 12:00", pelajaran: "Qowaid Fiqih"     },
    ],
};

/**
 * Elemen DOM yang digunakan sebagai kontainer untuk menampilkan jadwal.
 * @type {HTMLElement}
 */
const container = document.getElementById("jadwalContainer");

/**
 * Menampilkan jadwal pelajaran untuk hari tertentu di dalam elemen kontainer.
    * Jika tidak ada jadwal untuk hari tersebut, menampilkan pesan bahwa tidak
    * ada jadwal.
 * @param {string} hari - Nama hari dalam bahasa Indonesia (misalnya, "Senin").
 */
function tampilkanJadwal(hari) {
    container.innerHTML = "";

    if (jadwal[hari] && jadwal[hari].length > 0) {
        const items = jadwal[hari].map(
            (item) => `
                        <div class="jadwal-item card bg-base-300 h-20">
                                <h3>${item.pelajaran}</h3>
                                <p> ${item.waktu    }</p>
                        </div>
                      `,
        );
        container.innerHTML = items.join('<div class="divider"></div>');
    } else {
        container.innerHTML =
            '<p class="no-jadwal">Tidak ada jadwal untuk hari ini</p>';
    }
}

/**
 * Nama hari saat ini dalam format bahasa Indonesia (misalnya, "Senin").
 * @type {string}
 */
const hariIni = new Date()
    .toLocaleDateString("id-ID", { weekday: "long" });

// Tampilkan jadwal untuk hari ini saat halaman dimuat
tampilkanJadwal(hariIni);

/**
 * Koleksi tombol navigasi untuk memilih hari.
 * @type {NodeListOf<HTMLButtonElement>}
 */
const buttons =
    document.querySelectorAll(".hari-nav button");

// Tambahkan kelas aktif pada tombol hari ini dan atur event listener untuk
// navigasi
buttons.forEach((button) => {
    if (button.dataset.hari === hariIni) {
        button.classList.add("btn-neutral");
    }
    /**
     * Menangani klik pada tombol hari untuk menampilkan jadwal hari yang dipilih
     * dan memperbarui status aktif tombol.
     */
    button.addEventListener("click", function () {
        buttons.forEach((btn) => btn.classList.remove("btn-neutral"));
        this.classList.add("btn-neutral");
        tampilkanJadwal(this.dataset.hari);
    });
});
