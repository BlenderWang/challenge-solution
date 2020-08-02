import { v1 as uuid } from "uuid";

const dummyData = {
    details: [
        {
            id: uuid(),
            src: `/images/search-results--filters-profile-pic2@2x.png`,
            name: "JAMES HOWLETT",
            excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor. I’ve worked with many professional film teams.`,
            tags: ["VFX Engineer, ", "3D Animation, ", "Editor +2"],
            skills: 667,
            location: "Berlin, Germany",
        },
        {
            id: uuid(),
            src: "/images/search-results--filters-profile-pic1@2x.png",
            name: "ANNE KEELER",
            excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor. I’ve worked with many professional film teams.`,
            tags: ["Motion Capture Artist, ", "Photographer"],
            skills: 722,
            location: "Berlin, Germany",
        },
        {
            id: uuid(),
            src: "/images/search-results--filters-profile-pic@2x.png",
            name: "HANNAH SKEPPSTAD",
            excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor. I’ve worked with many professional film teams.`,
            tags: ["3D Animation, ", "VFX Engineer, ", "Sound Editor +2"],
            skills: 471,
            location: "Berlin, Germany",
        },
    ],
    searches: [
        "#3Danimation",
        "#Visualeffects",
        "#MotionCaptureArtist",
        "#SFXcoordinator",
        "CGIartist",
    ],
    locations: ["All Cities", "Stocks", "Berlin", "New York"],
};

export default dummyData;
