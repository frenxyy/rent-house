import img1 from '/public/assets/Villa1.jpg'
import img2 from '/public/assets/Villa2.jpg'
import img3 from '/public/assets/Villa3.jpg'
import img4 from '/public/assets/Villa4.jpg'
import img5 from '/public/assets/Villa5.jpg'
export const dataProduct = [
    {
        id: '1',
        img: img1,
        title: 'Villa Sunset Bliss',
        price: '$544',
        desksingkat: 'Villa mewah dengan pemandangan matahari terbenam yang menakjubkan.',
        desk: 'Villa Sunset Bliss adalah tempat impian bagi mereka yang mencari ketenangan dan keindahan alam. Dengan desain yang elegan dan fasilitas yang lengkap, villa ini menawarkan pengalaman liburan yang tak terlupakan.',
    },
    {
        id: '2',
        img: img2,
        title: 'Apartemen Urban Skyline',
        price: '$544',
        desksingkat: 'Apartemen modern di tengah pusat kota dengan pemandangan kota yang memukau.',
        desk: 'Apartemen Urban Skyline menawarkan gaya hidup perkotaan yang nyaman dan bergaya. Dengan fasilitas modern dan lokasi yang strategis, apartemen ini adalah pilihan ideal bagi para profesional muda dan keluarga urban.',
    },
    {
        id: '3',
        img: img3,
        title: 'Rumah Taman Hijau',
        price: '$544',
        desksingkat: 'Rumah bergaya minimalis dengan taman hijau yang luas.',
        desk: 'Rumah Taman Hijau adalah tempat tinggal yang ideal bagi pecinta alam dan penggemar keindahan. Dengan desain yang minimalis namun fungsional, rumah ini menyediakan ruang terbuka yang nyaman untuk bersantai dan bermain.',
    },
    {
        id: '4',
        img: img4,
        title: 'Villa Riviera Oasis',
        price: '$544',
        desksingkat: 'Villa mewah di tepi sungai dengan pemandangan sungai yang menenangkan.',
        desk: 'Villa Riviera Oasis adalah tempat sempurna untuk melarikan diri dari kehidupan sehari-hari dan menikmati ketenangan alam. Dengan pemandangan sungai yang menakjubkan dan fasilitas yang lengkap, villa ini adalah surga pribadi yang menunggu untuk dieksplorasi.',
    },
    {
        id: '5',
        img: img5,
        title: 'Apartemen Sky High',
        price: '$544',
        desksingkat: 'Apartemen bergaya modern dengan pemandangan langit yang memukau.',
        desk: 'Apartemen Sky High menawarkan gaya hidup mewah di tengah keramaian kota. Dengan desain yang futuristik dan fasilitas yang lengkap, apartemen ini adalah pilihan sempurna bagi mereka yang mencari kenyamanan dan keanggunan di tengah kota.',
    },
];

export const getProductById = (id) => {
    return dataProduct.find(product => product.id === id);
}

export const FaqItem = [
    {
        id: '1',
        pertanyan: 'Bagaimana cara menemukan rumah yang cocok untuk disewa?',
        jawaban: 'Anda bisa mencari rumah yang cocok untuk disewa melalui agen real estate, platform daring seperti situs web atau aplikasi penyewaan properti, atau melalui jaringan sosial dan rekomendasi dari teman atau keluarga. Pastikan untuk mempertimbangkan lokasi, fasilitas, harga sewa, dan kondisi sewa sebelum membuat keputusan.',
    },
    {
        id: '2',
        pertanyan: 'Apa saja persyaratan umum untuk menyewa rumah?',
        jawaban: 'Persyaratan umum untuk menyewa rumah biasanya mencakup identifikasi diri, bukti pendapatan, dan kadang-kadang referensi dari penyewa sebelumnya. Persyaratan ini dapat bervariasi tergantung pada pemilik properti dan peraturan setempat.',
    },
    {
        id: '3',
        pertanyan: 'Apa yang harus diperhatikan saat menandatangani kontrak sewa?',
        jawaban: 'Sebelum menandatangani kontrak sewa, penting untuk membaca dan memahami setiap klausul dalam kontrak. Pastikan untuk meninjau syarat-syarat pembayaran, durasi sewa, pembatalan, dan kondisi-kondisi lainnya. Jika Anda memiliki pertanyaan atau kebingungan, jangan ragu untuk berkonsultasi dengan pengacara atau agen real estate.',
    },
    {
        id: '4',
        pertanyan: 'Bagaimana cara menyelesaikan sengketa sewa dengan pemilik properti?',
        jawaban: 'Jika Anda menghadapi sengketa sewa dengan pemilik properti, langkah pertama yang harus diambil adalah mencoba menyelesaikannya secara damai melalui komunikasi langsung. Jika tidak berhasil, Anda dapat mencari bantuan dari lembaga penyelesaian sengketa, seperti mediator atau pengadilan sewa.',
    },
    {
        id: '5',
        pertanyan: 'Apa yang harus saya lakukan jika ada masalah dengan rumah yang saya sewa?',
        jawaban: 'Jika Anda mengalami masalah dengan rumah yang Anda sewa, seperti kerusakan atau masalah keamanan, segera hubungi pemilik properti atau agen real estate yang bertanggung jawab. Mereka biasanya memiliki kewajiban untuk memperbaiki masalah tersebut sesuai dengan kontrak sewa dan peraturan setempat.',
    },
    {
        id: '6',
        pertanyan: 'Bagaimana cara membatalkan kontrak sewa sebelum masa sewa berakhir?',
        jawaban: 'Membatalkan kontrak sewa sebelum masa sewa berakhir dapat sulit dan bergantung pada klausul pembatalan yang tercantum dalam kontrak. Biasanya, pembatalan sewa sebelum masa sewa berakhir dapat mengakibatkan denda atau kehilangan deposit. Pastikan untuk membaca dan memahami syarat-syarat pembatalan sebelum menandatangani kontrak.',
    },
];
