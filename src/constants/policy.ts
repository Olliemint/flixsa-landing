interface Policy {
  id: number;
  title: string;
  description?: string;
  list?: {
    sub_title: string;
    sub_description: string;
  }[];
  points?: string[];
}

export const policies: Policy[] = [
  {
    id: 1,
    title: "Information We Collect",
    description:
      "We may collect the following types of information when you use Flixsa:",
    list: [
      {
        sub_title: "Personal Information:",
        sub_description:
          "Personal Information: This includes your name, email address, phone number, and other relevant details required for account registration and booking.",
      },
      {
        sub_title: "Booking Details:",
        sub_description:
          "Information related to the movies you book, showtimes, seat preferences, and payment details.",
      },
      {
        sub_title: "Device Information:",
        sub_description:
          "We may collect information about the device you use to access the app, including device type, operating system, and unique device identifiers.",
      },
      {
        sub_title: "Location Information:",
        sub_description:
          "We may collect your device's precise location to provide you with accurate showtimes and theatre information.",
      },
    ],
  },
  {
    id: 2,
    title: "How We Use Your Information",
    description:
      "We use the collected information for various purposes, including but not limited to:",
    points: [
      "Facilitating movie bookings and managing reservations.",
      "Providing personalized movie recommendations and offers.",
      "Improving our app's functionality and user experience.",
      "Sending relevant notifications and updates.",
      "Analyzing app usage to enhance our services.",
    ],
  },
  {
    id: 3,
    title: "Data Security",
    description:
      "We take security seriously and implement reasonable measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of data transmission over the internet is completely secure, and we cannot guarantee absolute security.",
  },
  {
    id: 4,
    title: "Disclosure of Your Information",
    description:
      "We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted partners and service providers who assist us in operating our app and delivering services to you. We may also disclose information when required by law or to protect our rights, privacy, safety, or property.",
  },
  {
    id: 5,
    title: "Your Choices",
    description:
      "You have the right to access, correct, update, or delete your personal information. You can manage your preferences for notifications and promotional communications within the app settings.",
  },
  {
    id: 6,
    title: "Children’s Privacy",
    description:
      "Our app is not intended for use by individuals under the age of 16. We do not knowingly collect personal information from children without parental consent. If you believe we have collected information from a child, please contact us immediately.",
  },
  {
    id: 7,
    title: "Updates to this Privacy Policy",
    description:
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting a prominent notice within the app or by sending you an email.",
  },
  {
    id: 8,
    title: "Contact Us",
    description:
      "If you have any questions or concerns about our Privacy Policy or practices, please contact us at info@flixsa.com. By using Flixsa, you agree to the terms outlined in this Privacy Policy.",
  },
];
