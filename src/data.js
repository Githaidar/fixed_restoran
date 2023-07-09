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
    subtitle: 'Our restaurant was born from our love and pride for Bogor culinary specialties. With diverse culinary experience and in-depth knowledge of Bogor culinary specialties, we decided to combine our expertise and form this restaurant. In our travels, we interact with local farmers, grocers and cultural observers to ensure that the dishes we serve maintain authenticity and unrivaled quality. We are dedicated to presenting an authentic culinary experience, providing a smart touch of innovation to meet the tastes and expectations of our customers.',
    btnText: 'find out more',
    image: AboutImg,
};

export const menuData = {
    title: 'delicious in all seasons',
    subtitle: 'see all the delicious food menu today',
    modelImg: ModelWhiteImg,
    btnText: 'view complete menu',
    menuItems: [{
            image: MenuImg1,
            name: 'Asinan Bogor',
            price: 'Rp. 15.000',
            description: 'Types of vegetables and fruits with fresh sour spices',
        },
        {
            image: MenuImg2,
            name: 'Toge Goreng',
            price: 'Rp. 10.000',
            description: 'Fried bean sprouts with spices.',
        },
        {
            image: MenuImg3,
            name: 'Lapis Talas',
            price: 'Rp. 37.000',
            description: 'Cassava is processed into layers of steamed dough',
        },
        {
            image: MenuImg4,
            name: 'Doclang',
            price: 'Rp. 20.000',
            description: 'Small pieces of beef, processed with special spices.',
        },
    ],
};

export const teamData = {
    pretitle: 'our team',
    title: 'meet our creator',
    sub1: ' We are the founders of this restaurant and we are proud to present to you the rich culinary delights of Bogor. We consider it an honor to present traditional dishes rich in taste and cultural heritage.',
    sub2: 'By using fresh ingredients and recipes passed down from generation to generation, we try to maintain the authenticity and delicacy of typical Bogor dishes in every dish we serve. We invite you to feel the warmth and culinary delights of Bogor through every bite in our restaurant.',
    name: 'haidar aditya baran & hilmiyatul asna',
    occupation: 'executive creator',
    signatureImg: SignatureImg,
    chefImg: ChefImg,
};

export const testimonialData = {
    title: "what client's say ",
    subtitle: '1500+ statisfied clients',
    modelImg: ModelWhiteImg,
    slider: [{
            message: '"Prices and places are easy to reach, the waiters are friendly and fast, you can feel the traditional atmosphere."',
            image: Avatar1,
            name: 'Jajang',
            occupation: 'Artist',
        },
        {
            message: '"Very satisfied with the culinary experience at this restaurant. The traditional Bogor food served is truly authentic and delicious."',
            image: Avatar2,
            name: 'Abdul',
            occupation: 'Musician',
        },
        {
            message: '"Every time I visit Bogor, this restaurant is a must-go destination for me. Nothing can beat the enjoyment of the typical Bogor dishes they serve. The food at this restaurant is a perfect blend of tradition and innovation. I was really impressed by the uniqueness of each dish."',
            image: Avatar3,
            name: 'Siti',
            occupation: 'Public Figure',
        },
    ],
};

export const reservationData = {
    title: 'booking form',
    subtitle: 'Call (021) 256-3689 from 3AM - 11PM daily, or book online with OpenTable.Reservations required for parties of 6 or more.',
    modelImg: ModelBlackImg,
    btnText: 'make a reservation',
};

export const newsletterData = {
    title: 'join our newsletter',
    subtitle: 'Get latest news & updates in your inbox.',
    placeholder: 'Subscribe our delicious dishes',
    btnText: 'subscribe now',
};

export const footerData = {
    contact: {
        title: 'contact location',
        address: 'Jalan Raya Pajajaran, Baranangsiang, Kota Bogor, Jawa Barat.',
        phone: '(021)256-3689',
    },
    hours: {
        title: 'working hours',
        program: [{
                days: 'monday - friday',
                hours: '09:00 AM - 10:00 PM',
            },
            {
                days: 'saturday - sunday',
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