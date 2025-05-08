import {
  faCss3,
  faGithub,
  faJs,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import Particles from "../../Components/StyledComponents/Particles";
import {
  faBox,
  faDatabase,
  faFileAlt,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import GradientText from "../../Components/StyledComponents/GradientText";
import collabImg from "../../assets/collabImg.png";
import ShinyText from "../../Components/StyledComponents/ShinyText";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-container relative gap-[2vw] overflow-hidden">
      <div className="absolute z-0">
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      </div>

      {/* Foreground content */}
      <div className="text-xl md:text-5xl mt-[2vw]">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          className="custom-class"
        >
          My Professional Experience
        </GradientText>
      </div>
      <p className="text-xl md:text-2xl font-light p-[2vw] pl-[4vw] pr-[4vw] rounded text-center leading-[1.3] tracking-[0.1em] ">
        I’m a Full Stack Developer with expertise in building responsive,
        scalable, and user-friendly web applications using modern technologies.
        I specialize in crafting full-stack solutions. I have delivered multiple
        projects across domains like e-commerce, SaaS, and business automation.
      </p>
      <div className="text-xl md:text-5xl mt-[2vw]">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          className="custom-class"
        >
          Tools & Technologies
        </GradientText>
      </div>
      <p className="text-xl md:text-2xl font-light p-[2vw] pl-[4vw] pr-[4vw] rounded text-center leading-[1.3] tracking-[0.1em] ">
        Using a combination of cutting-edge technologies and reliable
        open-source software I build user-focused, performant web apps
        compatible for smartphones, tablets, and desktops.
      </p>
      <div className="flex justify-center items-center gap-[3vw] text-xl md:text-4xl p-[2vw] flex-wrap">
        <div className="flex flex-col items-center">
          <FontAwesomeIcon
            icon={faReact}
            className="text-cyan-400 text:3xl md:text-8xl skill-icon"
          />
          <p className="text-white">React</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon
            icon={faNode}
            className="text-[#3c873a] text:3xl md:text-8xl skill-icon"
          />
          <p className="text-white">NodeJS</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon
            icon={faDatabase}
            className="text-gray-400 text:3xl md:text-8xl skill-icon"
          />
          <p className="text-white">Database</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon
            icon={faJs}
            className="text-yellow-300 text:3xl md:text-8xl skill-icon"
          />
          <p className="text-white">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon
            icon={faFileAlt}
            className="text-blue-500 text:3xl md:text-8xl skill-icon"
          />
          <p className="text-white">CMS</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon
            icon={faGithub}
            className="text:3xl md:text-8xl skill-icon"
          />
          <p className="text-white">Github</p>
        </div>
      </div>
      <div className="text-xl md:text-5xl mt-[2vw] text-center">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          className="custom-class"
        >
          Why Choose Me?
        </GradientText>
      </div>
      <div className="flex gap-[3vw] mt-8">
        <div className="w-1/2 pl-[6vw]">
          <p className="text-xl md:text-[2.60rem] font-light mt-8 italic">
            Design. Develop. Deploy. Done!
          </p>
          <div className="not-italic text-xl md:text-3xl mt-[2vw] opacity-70 font-thin">
            Have an idea? Great! Just convey what you need, and I’ll take care
            of the rest. From design to development to launching it live. No
            stress, no tech confusion — just a smooth and fun journey from start
            to finish!
          </div>
          <div className="p-2 text-white border border-gray-300 rounded-md cursor-pointer mt-[2vw] w-[8vw] text-center hover:bg-[#121020] hover:text-black transition duration-300 ease-in-out">
            <Link to="/#contact">
              <ShinyText
                text="Contact Me"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </Link>
          </div>
        </div>
        <div className="w-[40%]">
          <img src={collabImg} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
