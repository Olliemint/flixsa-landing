interface RouteStyles {
  route: string;
  customStyles: {
    websvgs: {
      svg_one: string;
      svg_two: string;
    };
    mobilesvgs: {
      svg_one: string;
      svg_two: string;
    };
  };
  HerocustomStyles: {
    websvgs: {
      svg: string;
    
    };
    mobilesvgs: {
      svg: string;
     
    };
  };
}

export const routeStyles: RouteStyles[] = [
  {
    route: "/",
    customStyles: {
      websvgs: {
        svg_one: "top-[15%]",
        svg_two: "top-[16%]",
      },
      mobilesvgs: {
        svg_one: "top-[11.8%]",
        svg_two: "",
      },
    },
    HerocustomStyles: {
      websvgs: {
        svg: "top-[12.2%]",
      },
      mobilesvgs: {
        svg: "top-[9%]",
      },
    },
  },
  {
    route: "/company",
    customStyles: {
      websvgs: {
        svg_one: "top-[22%]",
        svg_two: "top-[25%]",
      },
      mobilesvgs: {
        svg_one: "top-[21%]",
        svg_two: "",
      },
    },
    HerocustomStyles: {
      websvgs: {
        svg: "top-[22%]",
      },
      mobilesvgs: {
        svg: "top-[13.5%]",
      },
    },
  },

  {
    route: "/faqs",
    customStyles: {
      websvgs: {
        svg_one: "top-[46%]",
        svg_two: "top-[50%]",
      },
      mobilesvgs: {
        svg_one: "top-[50%]",
        svg_two: "",
      },
    },
    HerocustomStyles: {
      websvgs: {
        svg: "top-[38%]",
      },
      mobilesvgs: {
        svg: "top-[37.5%]",
      },
    },
  },

  {
    route: "/contact-us",
    customStyles: {
      websvgs: {
        svg_one: "top-[46%]",
        svg_two: "top-[50%]",
      },
      mobilesvgs: {
        svg_one: "top-[45.2%]",
        svg_two: "",
      },
    },
    HerocustomStyles: {
      websvgs: {
        svg: "top-[39.2%]",
      },
      mobilesvgs: {
        svg: "top-[29%]",
      },
    },
  },

  {
    route: "/privacy-policy",
    customStyles: {
      websvgs: {
        svg_one: "top-[40%]",
        svg_two: "top-[43%]",
      },
      mobilesvgs: {
        svg_one: "top-[30%]",
        svg_two: "",
      },
    },
    HerocustomStyles: {
      websvgs: {
        svg: "top-[15%]",
      },
      mobilesvgs: {
        svg: "top-[22%]",
      },
    },
  },
  {
    route: "/terms-of-service",
    customStyles: {
      websvgs: {
        svg_one: "top-[35%]",
        svg_two: "top-[38.3%]",
      },
      mobilesvgs: {
        svg_one: "top-[30%]",
        svg_two: "",
      },
    },
    HerocustomStyles: {
      websvgs: {
        svg: "top-[15%]",
      },
      mobilesvgs: {
        svg: "top-[21.5%]",
      },
    },
  },
];
