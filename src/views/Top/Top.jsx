import React from "react";
import PropTypes from "prop-types";

// import { Button } from "react-bootstrap";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import Particles from "react-tsparticles";
import Background from "../../../content/assets/images/background.png";
import BackgroundSmall from "../../../content/assets/images/backgroundsmall.png";

const isBrowser = typeof window !== "undefined";

const Top = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { jumpToAnchor, jumpToAnchorText } = frontmatter;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scrollToSection = useSmoothScrollTo(jumpToAnchor);
  let backgroundImage = "";

  if (isBrowser) {
    backgroundImage = `url(${window.screen.width > 700 ? Background : BackgroundSmall})`;
  }

  // let extraInfoPart;
  // if (jumpToAnchor && jumpToAnchorText) {
  //   extraInfoPart = (
  //     <Button size="xl" variant="primary" className="text-uppercase" onClick={scrollToSection}>
  //       {jumpToAnchorText}
  //     </Button>
  //   );
  // }

  return (
    <Particles
      height="100vh"
      id="tsparticles"
      options={{
        motion: {
          disable: true,
          reduce: true,
        },
        fullScreen: { enable: false },
        background: {
          image: backgroundImage,
          position: "center",
          color: {
            value: "#000000",
          },
          size: "cover",
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#f0f0f0",
          },
          links: {
            color: "#ffffff",
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          reduceDuplicates: true,
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

Top.propTypes = {
  frontmatter: PropTypes.object,
};

Top.defaultProps = {
  frontmatter: null,
};

export default Top;
