import firstLandingCover from "../assets/mainpage/cover.png";
import beeLiftCover  from "../assets/beeLift/cover.png";
import cozySproutCover from "../assets/cozySprout/cover.png";

export const landingPagesData = [
    {
        name: "First Landing",
        description: "First landing page that acts as a hub for all landing pages",
        tools: ["React", "CSS"],
        date: "12/9/2024",
        img: firstLandingCover,
        navigate: "/",
    },
    {
        name: "BeeLift",
        description: "BeeLift is a ride-sharing landing page that is a Uber clone.",
        tools: ["React", "Tailwind CSS"],
        date: "12/30/2024",
        img: beeLiftCover,
        navigate: "/beeLift"
    },
    {
        name: "cozySprouts",
        description: "CozySprouts is a company that promotes and sells healthy green plants",
        tools: ["HTML, Tailwind CSS"],
        date: "1/10/2025",
        img: cozySproutCover,
        navigate: "/"
    }
];