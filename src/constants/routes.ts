// <Routes>
//   <Route index element={<Home />} />
//   <Route path="/company" element={<Company />} />
//   <Route path="/faqs" element={<FAQs />} />
//   <Route path="/contact-us" element={<ContactUs />} />
//   <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//   <Route path="/terms-of-service" element={<TermsOfService />} />
// </Routes>;
export const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/faqs",
    name: "FAQs ",
  },
  {
    path: "/company",
    name: "Company ",
  },

  {
    path: "/contact-us",
    name: "ContactUs",
  },
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
  },
  {
    path: "/terms-of-service",
    name: "Terms Of Service",
  },
];
