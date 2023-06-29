import { Image } from "@chakra-ui/react";

export const navLinks = [
  "Men haqimda",
  "Portfolio",
  "Dizayn xizmatlari",
  "Onlayn-kurslar",
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
