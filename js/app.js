document.addEventListener("alpine:init", () => {
  Alpine.data("film", () => ({
    hari: "today",
    isPopupVisible: false, // Inisialisasi variabel popup
    selectedItem: null, // Inisialisasi variabel selectedItem

    items: [
      {
        id: 1,
        img: "film/siksakubur.jpg",
        name: "Siksa Kubur",
        jam: "10.00",
        sinopsis: "Film horor tentang pembalasan dendam dari kubur.",
        tanggal: "today",
        year: "2024",
        rating: "7,1/10",
        link: "https://youtu.be/DN7J1E8GTFI?si=LscRIAqTtTAACHoC",
      },
      {
        id: 2,
        img: "film/13bom.jpg",
        name: "13 Bom Di Jakarta",
        jam: "12.00",
        sinopsis:
          "Aksi terorisme yang terjadi di Jakarta dan usaha penanggulangannya.",
        tanggal: "today",
        year: "2023",
        rating: "6,5/10",
        link: "https://youtu.be/uXJHPMKLgiI?si=FSdV0njfC5bEfUHq",
      },
      {
        id: 3,
        img: "film/gampangcuan.jpg",
        name: "Gampang Cuan",
        jam: "14.00",
        sinopsis:
          "Kisah seorang pengusaha muda yang mencoba peruntungannya dalam dunia bisnis.",
        tanggal: "today",
        year: "2023",
        rating: "7,2/10",
        link: "https://youtu.be/3XpIr4LQ_hc?si=6C6NORgYBIfbK--y",
      },
      {
        id: 4,
        img: "film/kangmak.jpg",
        name: "Kang Mak",
        jam: "16.00",
        sinopsis:
          "Komedi tentang seorang pria tua yang selalu bikin masalah di kampungnya.",
        tanggal: "today",
        year: "2024",
        rating: "7,3/10",
        link: "https://youtu.be/T8m-IZhCi7M?si=-1zX2J5-FWF9UVKN",
      },
      {
        id: 5,
        img: "film/miracleincellno7.jpg",
        name: "Miracle In Cell No 7",
        jam: "18.00",
        sinopsis:
          "Cerita mengharukan tentang seorang ayah yang dituduh salah dan dipenjara.",
        tanggal: "today",
        year: "2022",
        rating: "7,7/10",
        link: "https://youtu.be/0uf6QUacVgs?si=hUH1VuSpFwxdX7up",
      },
    ],

    itemsBesok: [
      {
        id: 6,
        img: "film/agaklaen.jpg",
        name: "Agak Laen",
        jam: "10.00",
        sinopsis:
          "Mengisahkan sekelompok teman dengan latar belakang berbeda yang menghadapi situasi hidup tak terduga, mulai dari masalah pribadi hingga konflik keluarga. Dibalut dengan komedi hangat, film ini mengeksplorasi dinamika persahabatan dan dukungan antar karakter.",
        tanggal: "tomorrow",
        year: "2024",
        rating: "7,6/10",
      },
      {
        id: 7,
        img: "film/pemandijenazah.jpg",
        name: "Pemandi Jenazah",
        jam: "12.00",
        sinopsis:
          "Mengisahkan Riana, seorang pemandi jenazah yang menghadapi kejadian supernatural setelah salah satu jenazah kembali hidup. Dia harus melindungi diri dan keluarganya dari teror roh-roh yang tidak tenang.",
        tanggal: "tomorrow",
        year: "2024",
        rating: "6,3/10",
      },
      {
        id: 8,
        img: "film/mencuriraden.jpg",
        name: "Mencuri Raden",
        jam: "14.00",
        sinopsis:
          "Film aksi dan komedi tentang sekelompok pencuri yang merencanakan pencurian lukisan berharga karya Raden Saleh. Mereka menghadapi berbagai tantangan dan komplikasi dalam misi mereka.",
        tanggal: "tomorrow",
        year: "2022",
        rating: "7,3/10",
      },
      {
        id: 9,
        img: "film/badarawuhi.jpg",
        name: "Badarawuhi",
        jam: "16.00",
        sinopsis:
          "Sekelompok mahasiswa menyelidiki legenda Badarawuhi di desa terpencil dan menghadapi teror dari makhluk halus. Mereka harus berjuang untuk bertahan hidup sambil mengungkap misteri di balik legenda tersebut.",
        tanggal: "tomorrow",
        year: "2024",
        rating: "5,8/10",
      },
      {
        id: 10,
        img: "film/jurnalrisa.jpg",
        name: "Jurnalrisa",
        jam: "18.00",
        sinopsis:
          "Risa, gadis dengan kemampuan melihat makhluk halus, menemukan buku harian yang mengungkap kejadian supernatural di rumah barunya. Dia berusaha menyelamatkan dirinya dan keluarganya dari roh-roh yang mengganggu.",
        tanggal: "tomorrow",
        year: "2024",
        rating: "6,1/10",
      },
    ],

    setHari(hari) {
      this.hari = hari;
    },

    get filteredItems() {
      if (this.hari === "today") {
        return this.items;
      } else if (this.hari === "tomorrow") {
        return this.itemsBesok;
      }
      return [];
    },

    navigateToDetail(name) {
      window.location.href = "detail.htmlname=${encodeURIComponent(name)}";
    },

    showPopup(item) {
      this.selectedItem = item;
      this.isPopupVisible = true;
    },

    closePopup() {
      this.isPopupVisible = false;
    },
  }));
});
