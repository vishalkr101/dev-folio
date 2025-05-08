import React, { useEffect, useRef } from "react";
import DecryptedText from "../../Components/StyledComponents/DecryptText";
import dev from "../../assets/devSpecs.png";
import innovance from "../../assets/innovance.png";
import enira from "../../assets/enira.png";
import SyscoLogo from "../../assets/Sysco_Port_cover.jpg";
import digitalPhotography from "../../assets/digitalPhotography.jpg";
import Squares from "../../Components/StyledComponents/DiogonalBoxes";
import GradientText from "../../Components/StyledComponents/GradientText";
import TiltedCard from "../../Components/StyledComponents/TiltedCard";
import TrueFocus from "../../Components/StyledComponents/TrueFocus";
import RotatingText from "../../Components/StyledComponents/RotatingText";
import ContactForm from "../../Components/ContactForm";
import Orb from "../../Components/StyledComponents/Orb";
import { useLocation } from "react-router-dom";

const Home = () => {
  const cardDetails = [
    { image: innovance, url: "https://www.inovance.eu/home" },
    { image: enira, url: "https://enira.co.in/" },
    { image: digitalPhotography, url: "https://www.theimpressio.com/" },
    { image: SyscoLogo, url: "https://shop.sysco.com" },
  ]; // Add more images as needed
  const handleNavigate = (url) => () => {
    window.open(url, "_blank"); // Open the URL in a new tab
  };

  const contactRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact") {
      setTimeout(() => {
        const offset = -50;
        const y =
          contactRef.current.getBoundingClientRect().top +
          window.pageYOffset + offset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }, 100);
    }
  }, [location]);
  return (
    <>
      <div className="relative">
        {/* Background Squares with lower z-index */}
        <div className="absolute inset-0 -z-10">
          <Squares
            speed={0.5}
            squareSize={40}
            direction="diagonal"
            borderColor="#fff"
            hoverFillColor="#222"
          />
        </div>

        {/* Foreground Content */}
        <div className="home-container flex gap-5 relative z-10">
          <div
            style={{ marginTop: "4rem", marginLeft: "14vw" }}
            className="text-[2rem] md:text-[3rem] w-[80%] lg:w-[40%]"
          >
            <DecryptedText
              text={
                "Hola! I'm Vishal \nFull Stack Developer\nI code cool stuff for web \nFast, fun, and bug-free \n(mostly 😄)."
              }
              animateOn="view"
              revealDirection="center"
              speed={100}
              maxIterations={20}
            />
          </div>
          <img
            src={dev}
            alt="dev"
            className="lg:w-[30%] hidden lg:block h-[32vw]"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-12 text-xl md:text-4xl">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder
          className="custom-class p-6"
        >
          My past Projects!
        </GradientText>
      </div>
      <div className="flex justify-center items-center mt-20 gap-[5vw] flex-wrap">
        {cardDetails.map((card, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={handleNavigate(card.url)}
          >
            <TiltedCard
              imageSrc={card.image}
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={20}
              scaleOnHover={1}
              showMobileWarning={false}
              displayOverlayContent={true}
            />
          </div>
        ))}
      </div>
      <div className="mt-20">
        <TrueFocus
          sentence="Our Focus"
          manualMode={false}
          blurAmount={5}
          borderColor="#00D8FF"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>
      <div className="flex justify-between items-center text-xl md:text-5xl p-[5vw]">
        <div className="font-semibold italic">
          Launch. Revamp. Growww!{" "}
          <div className="not-italic text-xl md:text-3xl mt-[1vw] opacity-70 font-thin">
            Whether you're just getting started
            <br /> or your website needs a facelift <br />
            we build fast, fun, and future-ready websites.
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <RotatingText
            texts={[
              "Frontend Development",
              "Backend Development",
              "Full Stack Development",
              "CMS Integration",
              "Website Redesign",
            ]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
      </div>
      <div id="contact-section" ref={contactRef}>
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder
          className="custom-class p-6 text-2xl"
        >
          Let's Collaborate!
        </GradientText>
        
        <div className="relative w-full h-[600px]" >
          <div className="absolute inset-0 z-0">
            <Orb
              hue={0}
              forceHoverState={false}
            />
          </div>
          <div className="flex justify-center items-center relative z-10 flex-wrap">
            <h1 className="md:text-6xl text-xl mt-14">Reach Out to us For All your digital needs</h1>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
