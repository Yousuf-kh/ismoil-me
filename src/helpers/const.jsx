import { Image, Text } from "@chakra-ui/react";

export const navLinks = [
  { text: "Men haqimda", page: "/about" },
  { text: "Portfolio", page: "/about" },
  { text: "Dizayn xizmatlari", page: "/about" },
  { text: "Onlayn-kurslar", page: "/kurses" },
];

export const portfolioFirst = [
  { image: <Image src="../../images/1.jpg" borderRadius={"10px"} /> },
  { image: <Image src="../../images/2.jpg" borderRadius={"10px"} /> },
  { image: <Image src="../../images/3.jpg" borderRadius={"10px"} /> },
  { image: <Image src="../../images/4.jpg" borderRadius={"10px"} /> },
  { image: <Image src="../../images/5.jpg" borderRadius={"10px"} /> },
  { image: <Image src="../../images/6.jpg" borderRadius={"10px"} /> },
];

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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
  { imges: "../../images/in-brain-logo.png" },
  { imges: "../../images/newera.png" },
  { imges: "../../rapm.png" },
];
