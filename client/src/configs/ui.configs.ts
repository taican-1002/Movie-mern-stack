interface UIConfigs {
  style: any;
  size: any;
}

interface Style {
  gradientBgImage: object;
  horizontalGradientBgImage: object;
  typoLines: object;
  mainContent: object;
}

interface TypoLines {
  textAlign: string;
  display: string;
  overflow: string;
  WebkitBoxOrient: string;
  WebkitLineClamp: number;
}

interface MainContent {
  maxWidth: string;
  margin: string;
  padding: number;
}

interface BackgroundImage {
  position: string;
  backgroundSize: string;
  backgroundPosition: string;
  backgroundColor: string;
  backgroundImage: string;
}

interface Size {
  sidebarWith: string;
  contentMaxWidth: string;
}

const uiConfigs: UIConfigs = {
  style: {
    gradientBgImage: {
      dark: {
        backgroundImage:
          "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))" as string,
      },
      light: {
        backgroundImage:
          "linear-gradient(to top, rgba(245,245,245,1), rgba(0,0,0,0))" as string,
      },
    },
    horizontalGradientBgImage: {
      dark: {
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))" as string,
      },
      light: {
        backgroundImage:
          "linear-gradient(to right, rgba(245,245,245,1), rgba(0,0,0,0))" as string,
      },
    },
    typoLines: (lines: number, textAlign: string): TypoLines => ({
      textAlign: textAlign || "justify",
      display: "-webkit-box",
      overflow: "hidden",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: lines,
    }),
    mainContent: {
      maxWidth: "1366px",
      margin: "auto",
      padding: 2,
    } as MainContent,
    backgroundImage: (imgPath: string): BackgroundImage => ({
      position: "relative",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "darkgrey",
      backgroundImage: `url(${imgPath})`,
    }),
  } as Style,
  size: {
    sidebarWith: "300px",
    contentMaxWidth: "1366px",
  } as Size,
};

export default uiConfigs;
