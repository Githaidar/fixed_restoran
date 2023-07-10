// import icons
import {
    FaYoutube,
    FaFacebookF,
    FaInstagram,
    FaPinterestP,
    FaDiscord,
} from 'react-icons/fa';
// import images
import AboutImg from '../src/assets/img/about/3x3__2_-removebg-preview.png';
import ModelWhiteImg from '../src/assets/img/model-white.png';
import ModelBlackImg from '../src/assets/img/model-black.png';
import MenuImg1 from '../src/assets/img/menu/asinan-bogor.png';
import MenuImg2 from '../src/assets/img/menu/toge-goreng.png';
import MenuImg3 from '../src/assets/img/menu/lapis-talas.png';
import MenuImg4 from '../src/assets/img/menu/doclang.png';
import SignatureImg from '../src/assets/img/team/signature.png';
import ChefImg from '../src/assets/img/team/panapn(3.37 × 5 inci).png';
import Avatar1 from '../src/assets/img/testimonial/avatar1.png';
import Avatar2 from '../src/assets/img/testimonial/avatar2.png';
import Avatar3 from '../src/assets/img/testimonial/avatar3.png';

export const navData = [
    { href: '/', name: 'home' },
    // { href: '/', name: 'about' },
    { href: '/menu', name: 'menu' },
    { href: '/ourteam', name: 'team' },
    { href: '/booking', name: 'testimonials' },
    // { href: '/', name: 'book a table' },
    // { href: '/', name: 'contact' },
];

export const heroData = {
    pretitle: 'Nothing brings together like',
    title: 'KulinerBogor.com',
    subtitle: 'This restaurant is the best place to enjoy typical Bogor dishes. It feels so authentic and makes anyone remember childhood memories. ',
    btnText: 'Find out more',
};

export const socialData = [
    { href: 'https://youtu.be/IuGvIxKiN18', icon: < FaYoutube / > },
    { href: 'https://www.facebook.com/kulinerbogorenak?mibextid=ZbWKwL', icon: < FaFacebookF / > },
    { href: 'https://instagram.com/kuliner_bgr?igshid=MzRlODBiNWFlZA==', icon: < FaInstagram / > },
    { href: 'https://pin.it/27eVDH3', icon: < FaPinterestP / > },
    { href: 'https://discord.gg/fMS9rZEd', icon: < FaDiscord / > },
];

export const aboutData = {
    pretitle: 'our story',
    title: 'who we are',
    subtitle: 'Restoran kami adalah hasil dari cinta dan kebanggaan kami terhadap kuliner khas Bogor. Dengan pengetahuan yang luas tentang kuliner khas Bogor dan pengalaman kuliner yang beragam, kami memutuskan untuk membentuk restoran ini. Selama perjalanan kami, kami berkolaborasi dengan petani lokal, pedagang grosir, dan budayawan untuk memastikan bahwa hidangan yang kami sajikan mempertahankan keaslian dan kualitasnya yang tak tertandingi. Dedikasi kami adalah untuk memberikan pengalaman kuliner yang otentik, dengan sentuhan inovatif yang cerdas untuk memenuhi selera dan harapan pelanggan kami.',
    btnText: 'find out more',
    image: AboutImg,
};

export const menuData = {
    title: 'Menu terbaik di alam semesta',
    subtitle: 'Lihat semua menu dibawah ini',
    modelImg: ModelWhiteImg,
    btnText: 'view complete menu',
    menuItems: [{
            image: MenuImg1,
            name: 'Asinan Bogor',
            price: 'Rp. 15.000',
            description: 'Jenis sayur dan buah dengan bumbu asam segar',
        },
        {
            image: MenuImg2,
            name: 'Toge Goreng',
            price: 'Rp. 10.000',
            description: 'Tauge di goreng dengan bumbu.',
        },
        {
            image: MenuImg3,
            name: 'Lapis Talas',
            price: 'Rp. 37.000',
            description: 'Singkong diolah menjadi lapisan adonan kukus',
        },
        {
            image: MenuImg4,
            name: 'Doclang',
            price: 'Rp. 20.000',
            description: 'Potongan kecil daging sapi, diolah dengan bumbu khusus.',
        },
    ],
};

export const teamData = {
    pretitle: 'our team',
    title: 'meet our creator',
    sub1: ' Kami adalah pendiri web restoran ini dan dengan bangga mempersembahkan kepada Anda kekayaan kuliner Bogor. Kami menganggap suatu kehormatan untuk menyajikan hidangan tradisional yang kaya akan cita rasa dan warisan budaya.',
    sub2: 'Dengan menggunakan bahan-bahan segar dan resep turun temurun, kami berusaha menjaga keaslian dan kelezatan masakan khas Bogor di setiap masakan yang kami sajikan. Kami mengundang Anda untuk merasakan kehangatan dan kelezatan kuliner Bogor melalui setiap gigitan di restoran kami.',
    name: 'haidar aditya baran & hilmiyatul asna',
    occupation: 'legenda kreator',
    signatureImg: SignatureImg,
    chefImg: ChefImg,
};

export const testimonialData = {
    title: "Apa yang orang katakan kepada kami",
    subtitle: '29 pelanggan setia',
    modelImg: ModelWhiteImg,
    slider: [{
            message: '"Harga dan tempat mudah dijangkau, pelayannya ramah dan cepat, suasana tradisional bisa dirasakan."',
            image: Avatar1,
            name: 'Andi',
            occupation: 'Mahasiswa',
        },
        {
            message: '"Sangat puas dengan pengalaman kuliner di restoran ini. Makanan tradisional Bogor yang disajikan benar-benar otentik dan lezat."',
            image: Avatar2,
            name: 'Rizki',
            occupation: 'Artis',
        },
        {
            message: '"Setiap kali saya mengunjungi Bogor, restoran ini adalah tujuan yang harus saya kunjungi. Tidak ada yang bisa mengalahkan kenikmatan masakan khas Bogor yang mereka sajikan. Makanan di restoran ini merupakan perpaduan sempurna antara tradisi dan inovasi. Saya sangat terkesan dengan keunikan setiap hidangan."',
            image: Avatar3,
            name: 'Istri Haidar',
            occupation: 'Tokoh Masyarakat',
        },
    ],
};

export const reservationData = {
    title: 'Formulir Pemesanan',
    subtitle: 'Hubungi (021) 256-3689 dari pukul 03.00 - 23.00 setiap hari, atau pesan online dengan OpenTable. Reservasi diperlukan untuk rombongan 6 orang atau lebih.',
    modelImg: ModelBlackImg,
    btnText: 'Buat Reservasi',
};

export const newsletterData = {
    title: 'Mari bergabung dengan kami',
    subtitle: 'Dapatkan berita & pembaruan terbaru di kotak masuk Anda.',
    placeholder: 'Berlangganan sekarang',
    btnText: 'join sekarang',
};

export const footerData = {
    contact: {
        title: 'lokasi',
        address: 'Jalan Raya Pajajaran, Baranangsiang, Kota Bogor, Jawa Barat.',
        phone: '(021)256-3689',
    },
    hours: {
        title: 'jam kerja',
        program: [{
                days: 'senin - jumat',
                hours: '09:00 AM - 10:00 PM',
            },
            {
                days: 'sabtu - minggu',
                hours: '09:00 AM - 11:00 PM',
            },
        ],
    },
    social: {
        title: 'social network',
        icons: [
            { href: '/', icon: < FaYoutube / > },
            { href: '/', icon: < FaFacebookF / > },
            { href: '/', icon: < FaInstagram / > },
            { href: '/', icon: < FaPinterestP / > },
            { href: '/', icon: < FaDiscord / > },
        ],
    },
};