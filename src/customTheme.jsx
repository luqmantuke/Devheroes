import { extendTheme } from "@chakra-ui/react"


const customTheme = extendTheme({
    fonts: {
        body: "Poppins, sans-serif",
        heading: "Poppins, sans-serif",
      },
      fontWeights: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
      fontSizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
      fontFaces: [
        {
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: 400,
          src: "url(/fonts/Poppins-Regular.ttf) format('truetype')",
          fontDisplay: "swap",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215, U+FEFF, U+FFFD",
        },
        {
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: 500,
          src: "url(/fonts/Poppins-Medium.ttf) format('truetype')",
          fontDisplay: "swap",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215, U+FEFF, U+FFFD",
        },
        {
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: 700,
          src: "url(/fonts/Poppins-Bold.ttf) format('truetype')",
          fontDisplay: "swap",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215, U+FEFF, U+FFFD",
        },
      ],
    colors: {
      brand: {
        purpleOne: "#f0f0f7",
        purpleTwo: "#605cba",
        purpleThree: "#5e5ebc",
        whiteColor: "#ffffff",
        purpleFour: "#343f52",
        blackOne: "#344051",
        blackTwo: "#6a7383",
        whiteTwo: "#fcfcfd",
        blueOne: "#4872d7",
        blueDark: "#343f52",
        whiteThree: "#a4aec633"

      },
    
    },
  });
  
  export default customTheme;