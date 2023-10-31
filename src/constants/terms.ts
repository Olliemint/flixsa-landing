
interface Terms {
  id: number;
  title: string;
  description?: string;
  list?: {
    sub_title: string;
    sub_description: string;
  }[];
}


export const terms: Terms[] = [
  {
    id: 1,
    title: "Use of the App",
    list: [
      {
        sub_title: "Account Creation:",
        sub_description:
          "You may be required to create an account to access certain features of the app. You are responsible for maintaining the confidentiality of your account information and agree to be responsible for all activities that occur under your account.",
      },
      {
        sub_title: "User Conduct:",
        sub_description:
          "You agree not to use the app for any unlawful or prohibited purpose. You must not engage in any activity that interferes with the app's operation or compromises its security.",
      },
    ],
  },
  {
    id: 2,
    title: "Bookings and Reservations",
    list: [
      {
        sub_title: "Movie Bookings:",
        sub_description:
          " You can use the app to book movie tickets and seats at participating theaters. All bookings are subject to availability.",
      },
      {
        sub_title: "Payment:",
        sub_description:
          "You agree to pay the specified booking fee for each transaction. Payment methods accepted will be outlined within the app.",
      },
      {
        sub_title: "Cancellations and Refunds:",
        sub_description:
          "Cancellation policies and refund eligibility vary depending on the theater and movie. Please review the theater's policies before booking.",
      },
    ],
  },
  {
    id: 3,
    title: "Intellectual Property",
    description:
      "All content and materials provided through Flixsa, including text, graphics, logos, images, and software, are the property of Flixsa or its licensors and are protected by intellectual property laws. ",
  },
  {
    id: 4,
    title: "Limitation of Liability",
    list: [
      {
        sub_title: "Use at Your Own Risk: ",
        sub_description:
          "Your use of Flixsa is at your own risk. The app is provided (as is) and (as available) without warranties of any kind.",
      },
      {
        sub_title: "No Liability for Third-Party Services:",
        sub_description:
          " Flixsa may provide links or access to third-party services. We are not responsible for the content or services provided by these third parties.",
      },
    ],
  },
  {
    id: 5,
    title: "Limitation of Liability",
    description:
      "You agree to indemnify and hold Flixsa, its affiliates, officers, directors, and employees harmless from any claims, damages, or losses arising from your use of the app or violation of these Terms.",
  },
  {
    id: 6,
    title: "Changes to the Terms",
    description:
      "We may update these Terms from time to time. We will notify you of any material changes by posting a notice within the app or by sending you an email. Your continued use of the app after such changes indicates your acceptance of the updated Terms.",
  },
  {
    id: 7,
    title: "Termination",
    description:
      "We reserve the right to suspend or terminate your access to [Movie Booking App Name] at any time and for any reason, without notice.",
  },
  {
    id: 8,
    title: "Contact Us",
    description:
      "If you have any questions or concerns about our Privacy Policy or practices, please contact us at info@flixsa.com. By using Flixsa, you agree to the terms outlined in this Privacy Policy.",
  },
];