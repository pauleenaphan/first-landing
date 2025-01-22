import firstLandingCover from "../assets/mainpage/cover.png";
import beeLiftCover  from "../assets/beeLift/cover.png";
import cozySproutCover from "../assets/cozySprout/cover.png";
import turboCover from "../assets/turboPrecision/cover.png";

export const landingPagesData = [
    {
        name: "First Landing",
        description: "First Landing is the primary landing page that acts as a central hub, offering seamless access to all other landing pages.",
        tools: ["React", "CSS"],
        date: "12/9/2024",
        img: firstLandingCover,
        navigate: "/",
    },
    {
        name: "BeeLift",
        description: "BeeLift is a ride-sharing landing page designed as a clone of Uber, offering a similar user experience and functionality.",
        tools: ["React", "Tailwind CSS"],
        date: "12/30/2024",
        img: beeLiftCover,
        navigate: "/beeLift"
    },
    {
        name: "CozySprouts",
        description: "CozySprouts is a company dedicated to promoting and selling a variety of healthy, vibrant green plants for enhancing indoor spaces.",
        tools: ["HTML", "Tailwind CSS"],
        date: "1/10/2025",
        img: cozySproutCover,
        navigate: "https://pauleenaphan.github.io/cozySprout/"
    },
    {
        name: "TurboPrecision",
        description: "Turboprecisions is a company that provides high-quality machining services. Contact us today to get a personalized quote!",
        tools: ["React", "CSS"],
        date: "1/21/2025",
        img: turboCover,
        navigate: "https://turboprecisionmachining.com/"
    }
];