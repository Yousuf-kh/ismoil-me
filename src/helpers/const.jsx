import { Image, Text } from "@chakra-ui/react";

export const navLinks = [
  { text: "Men haqimda", page: "/about" },
  { text: "Portfolio", page: "/about" },
  { text: "Dizayn xizmatlari", page: "/services" },
  { text: "Onlayn-kurslar", page: "/kurses" },
  { text: "Kontakt", page: "/kontakt" },
];

export const portfolioFirst = [
  { image: <Image src="/images/1.jpg" borderRadius={"10px"} /> },
  { image: <Image src="/images/2.jpg" borderRadius={"10px"} /> },
  { image: <Image src="/images/3.jpg" borderRadius={"10px"} /> },
  { image: <Image src="/images/4.jpg" borderRadius={"10px"} /> },
  { image: <Image src="/images/5.jpg" borderRadius={"10px"} /> },
  { image: <Image src="/images/6.jpg" borderRadius={"10px"} /> },
];

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

export const responsive2 = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const kurses = [
  {
    num: "01",
    title: "Muallif va kuratorlarning yordami",
    text: "Siz Adobe Photoshop, Adobe Illustrator va Corel Draw bilan ishlash bo'yicha qo'llanmalar va hayotiy tajribalarga ega bo'lasiz.",
  },
  {
    num: "02",
    title: "Portfolio",
    text: "Kursni tugatganingizdan so'ng, sizning qo'lingizda portfolio uchun bir nechta tayyor ishlar bo'ladi.",
  },
  {
    num: "03",
    title: "Vaqtlar chegaralanmagan",
    text: "Kurs sizni to’laligicha, hech qanday cheklovlar va vaqt cheklovlarisiz taqdim etamiz.",
  },
  {
    num: "04",
    title: "Telegramda yopiq chat",
    text: "Telegram chatimizda siz istagan savollaringizni kuratorlarga yoki menga berishingiz mumkin.",
  },
];

export const whois = [
  { text: <Text>Dizayn sohasiga yangi kirib kelganlar uchun</Text> },
  {
    text: (
      <Text>
        Marketologlar, muharrirlar va <br /> SMM mutaxassislari uchun
      </Text>
    ),
  },
  { text: <Text>Ijodkorlik hayot tarzi bo'lgan har bir kishi uchun</Text> },
];

export const textAbout = [
  "15 ta amaliy darslar",
  "Kurator va uyga vazifalar",
  "Kusrni tamomlaganingiz haqida sertifikat",
  "Vaqt borasida hech qanday chegaralarsiz",
];

export const portfolioNumbers = [
  { heading: "3", text: "Tugallangan dasturlar" },
  { heading: "3", text: "Qoniqarli talabalar" },
  { heading: "300", text: "Tugallangan loyihalar" },
  { heading: "3", text: "Yillik tajriba" },
];

export const portfolioImages = [
  { image: <Image src="/images/in-brain-logo.png" /> },
  { image: <Image src="/images/c-1.png" /> },
  { image: <Image src="/images/c-3.png" /> },
];

export const company = [
  { image: <Image src="/images/c-1.png" /> },
  { image: <Image src="/images/c-2.png" /> },
  { image: <Image src="/images/c-3.png" /> },
  { image: <Image src="/images/c-4.png" /> },
  { image: <Image src="/images/c-5.png" /> },
  { image: <Image src="/images/c-6.png" /> },
  { image: <Image src="/images/c-7.png" /> },
  { image: <Image src="/images/c-8.png" /> },
  { image: <Image src="/images/c-9.png" /> },
  { image: <Image src="/images/c-10.png" /> },
  { image: <Image src="/images/c-11.png" /> },
  { image: <Image src="/images/c-12.png" /> },
  { image: <Image src="/images/c2-1.png" /> },
  { image: <Image src="/images/c2-2.png" /> },
  { image: <Image src="/images/c2-3.png" /> },
  { image: <Image src="/images/c2-4.png" /> },
  { image: <Image src="/images/c2-5.png" /> },
  { image: <Image src="/images/c2-6.png" /> },
  { image: <Image src="/images/c2-7.png" /> },
  { image: <Image src="/images/c2-8.png" /> },
  { image: <Image src="/images/c2-9.png" /> },
  { image: <Image src="/images/c2-10.png" /> },
];

export const caruselImage = [
  {
    text: "@mirjalolov_komron amazing concept. It really brings me joy 💜 Bring a sense of play your software and consider how it impacts the humans using it. Best way to build.",
    image: <Image borderRadius={"100%"} src="/images/1.jpg" />,
    author: "Komron Mirjalolov",
    job: "Dizayner",
  },
  {
    text: "@mirjalolov_komron amazing concept. It really brings me joy 💜 Bring a sense of play your software and consider how it impacts the humans using it. Best way to build.",
    image: <Image borderRadius={"100%"} src="/images/1.jpg" />,
    author: "Komron Mirjalolov",
    job: "Dizayner",
  },
  {
    text: "@mirjalolov_komron amazing concept. It really brings me joy 💜 Bring a sense of play your software and consider how it impacts the humans using it. Best way to build.",
    image: <Image borderRadius={"100%"} src="/images/1.jpg" />,
    author: "Komron Mirjalolov",
    job: "Dizayner",
  },
];

export const xizmatlar = [
  {
    bg: "url(/images/dizayn-1.png)",
    heading: "Reklama postlari SMM uchun",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    bg: "url(/images/dizayn-3.png)",
    heading: "Logotip ishlab chiqish",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export const courses = [
  { image: "/images/kurs-1.png", narx: "50$" },
  { image: "/images/kurs-2.png", narx: "100$" },
];

export const kurslarRasm = [
  {
    img: "/images/kurslar-rasm.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    title: "Darslik nomi",
  },
  {
    img: "/images/kurslar-rasm.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    title: "Darslik nomi",
  },
  {
    img: "/images/kurslar-rasm.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    title: "Darslik nomi",
  },
  {
    img: "/images/kurslar-rasm.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    title: "Darslik nomi",
  },
  {
    img: "/images/kurslar-rasm.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    title: "Darslik nomi",
  },
  {
    img: "/images/kurslar-rasm.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    title: "Darslik nomi",
  },
  {
    img: "/images/kurslar-rasm.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    title: "Darslik nomi",
  },
  {
    img: "/images/kurslar-rasm.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    title: "Darslik nomi",
  },
  {
    img: "/images/kurslar-rasm.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    title: "Darslik nomi",
  },
  {
    img: "/images/kurslar-rasm.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    title: "Darslik nomi",
  },
  {
    img: "/images/kurslar-rasm.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    title: "Darslik nomi",
  },
];
