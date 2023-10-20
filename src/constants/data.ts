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
    path: "/FAQs",
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


export const faqs: String[] = [
  "What is Flixsa?",
  "How do i book a movie ticket?",
  "What payment method can i use?",
  "What is Flixsa Wallet?",
  "How can i get a refund?",
  "Can i book for a group?",
];



