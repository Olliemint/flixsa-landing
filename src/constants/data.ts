import DISCOVER from "../assets/iimages/discover.png";
import SIGNUP from "../assets/iimages/signup.png";
import SHOWING from "../assets/iimages/showing.png";
import CALENDER from "../assets/iimages/Calendar.png";
import TICKET from "../assets/iimages/ticket.png";
import INSTAGRAM from "../assets/iimages/skill-icons_instagram.png";
import TWITTER from "../assets/iimages/devicon_twitter.png";
import LINKEDIN from "../assets/iimages/logos_linkedin-icon.png";


export const groupLinks: ILinksGroup[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Company",
    path: "/company",
  },
  {
    name: "FAQs",
    path: "/faqs",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];

export interface ILinksGroup {
  name: string;
  path: string;
}


 
interface ISocials {
  id: number;
  title: string;
  image?: string;
  description: string;
}

export interface IFaqs { 
  id: number;
  title: string;
  description: string;
}


interface Testimonial {
  id: number;
  name: string;
  occupation: string;
  imageSrc: string;
  quote: string;
}

export const services = {
  one: [
    {
      id: 1,
      title: "SIGN UP",
      image: SIGNUP,
      description:
        "Install the App and Sign up with your Full name, Email or Phone number. ",
    },
    {
      id: 2,
      title: "DISCOVER MOVIES",
      image: DISCOVER,
      description:
        "Discover varieties of Movies Now showing or Coming Soon, Watch trailers and Book.",
    },
    {
      id: 3,
      title: "CINEMA SHOWING ",
      image: SHOWING,
      description:
        "Select from a wide varieties of cinema showing that movie around your city.",
    },
  ],
  two: [
    {
      id: 1,
      title: "PICK A DATE & TIME",
      image: CALENDER,
      description:
        "Pick an available showtime and date set by the cinema for that movie.",
    },
    {
      id: 2,
      title: "GET TICKET",
      image: TICKET,
      description:
        "Select the number of Tickets and choose to add food & drinks.",
    },
    {
      id: 3,
      title: "FOOD & DRINKS",
      image: SHOWING,
      description:
        "Pick from a wide varieties of food & drinks offered by the cinema.",
    },
  ],
};

export const socials:ISocials[] = [
  {
    id: 1,
    title: "Instagram",
    image: INSTAGRAM,
    description:
      "Follow and like on instagram, be a great part of our insta community and stay updated on guides, news & updates",
  },
  {
    id: 2,
    title: "Twitter",
    image: TWITTER,
    description:
      "Our updates on twitter are engaging, you can be a part of our growing community on twitter for instant updates",
  },
  {
    id: 3,
    title: "LinkedIn",
    image: LINKEDIN,
    description:
      "Connect with us on LinkedIn, our community is filled with updates, guides and news of Flixsa ",
  },
];

export const core_values: ISocials[] = [
  {
    id: 1,
    title: "USER-CENTRICITY",
    image:
      "https://res.cloudinary.com/seeders/image/upload/v1697806153/1_i6l4if.png",
    description:
      "We are dedicated to understanding the needs, preferences, and aspirations of our users. Their satisfaction and enjoyment are our top priorities. We continuously strive to improve our app and services to meet and exceed user expectations.",
  },
  {
    id: 2,

    title: "INNOVATION & EXCELLENCE",
    image:
      "https://res.cloudinary.com/seeders/image/upload/v1697806153/2_lfbwrg.png",
    description:
      "We foster an environment where innovative ideas are valued, and we actively seek better ways to provide a cutting-edge movie experience. Excellence is our standard in all aspects of our work, from user interface design to the quality of content recommendations.",
  },
  {
    id: 3,
    title: "FUN & ENTERTAINMENT",
    image:
      "https://res.cloudinary.com/seeders/image/upload/v1697806153/3_ow8fqe.png",
    description:
      "We understand that movies are a source of entertainment, relaxation, and inspiration. We aim to make your movie-watching experience fun, engaging, and memorable.",
  },
];


export const faqs:IFaqs[] = [
  {
    id: 1,
    title: "What is Flixsa?",
    description:
      "Flixsa is a platform that provides a smooth & seamless means of booking movies with a wide variety of cinemas closest in your city. This allow cinemas to set show dates and time while providing customers with an easy platform to order tickets.",
  },
  {
    id: 2,
    title: "How do i book a movie ticket?",
    description:
      "To book a movie ticket, open the app, select your preferred movie, theatre & showtime, select the number of tickets, and proceed to payment.",
  },
  {
    id: 3,
    title: "What payment method can i use?",
    description:
      "We accept various payment methods, including credit/debit cards, in app wallets, bank transfers, USSD transfers and Qr code payment methods.",
  },
  {
    id: 4,
    title: "What is Flixsa Wallet?",
    description:
      "Flixsa wallet is a secure feature on the app where you can put in money for later use. The money in the wallet can be used to make payments for tickets booked on the app.",
  },
  {
    id: 5,
    title: "How can i get a refund?",
    description:
      "Refund policies vary, so check the app's terms and conditions. Typically, refunds are possible if you cancel within the allowed time frame or if the show is canceled by the theater.",
  },
  {
    id: 6,
    title: "Can i book for a group?",
    description:
      "Yes, we allow multiple bookings, and they may offer special group discounts. Check with the app for details on group booking options.",
  },
];


export const testimonials: Testimonial[] = [
  {
    id: 1,

    name: "Oliver Maiyo",
    occupation: "Student",
    imageSrc:
      "https://res.cloudinary.com/seeders/image/upload/v1697571539/Rectangle_15_yhwvyb.png",
    quote:
      "As a frequent moviegoer, Flixsa is a game-changer. I can't imagine booking tickets any other way now. The app's convenience and the ability to select my preferred seats in advance are fantastic. Plus, their loyalty rewards make every visit even more rewarding.",
  },
  {
    id: 2,

    name: "Emily Johnson",
    occupation: "Engineer",
    imageSrc:
      "https://cdn.pixabay.com/photo/2023/05/20/16/35/dog-8006807_640.jpg",
    quote:
      "I've been using Flixsa for a while now, and it has simplified my movie ticket booking. The user-friendly interface and real-time seat selection are top-notch. Flixsa's service is unbeatable.",
  },
  {
    id: 3,

    name: "David Brown",
    occupation: "Architect",
    imageSrc:
      "https://cdn.pixabay.com/photo/2023/10/16/10/51/fox-8318961_640.png",
    quote:
      "Flixsa has made movie nights a breeze. The ability to choose seats in advance has eliminated the hassle of arriving early to secure good seats. I highly recommend Flixsa to all movie enthusiasts.",
  },
  {
    id: 4,

    name: "Linda Smith",
    occupation: "Teacher",
    imageSrc:
      "https://cdn.pixabay.com/photo/2023/09/16/17/13/cat-8257177_640.jpg",
    quote:
      "Flixsa's loyalty program is a fantastic bonus. With each ticket purchase, I earn rewards that I can redeem for future movie outings. It's a win-win. Flixsa has truly revolutionized how I experience movies.",
  },
];

