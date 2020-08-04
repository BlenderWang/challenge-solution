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
        {
            id: uuid(),
            src: `https://source.unsplash.com/user/erondu`,
            name: "SINCLAIR BENETTE",
            excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor. I’ve worked with many professional film teams.`,
            tags: ["VFX Engineer, ", "3D Animation, ", "Editor +2"],
            skills: Math.floor(Math.random() * 1000),
            location: "New York, USA",
        },
        {
            id: uuid(),
            src: "https://source.unsplash.com/random",
            name: "LISA BRET",
            excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor. I’ve worked with many professional film teams.`,
            tags: ["Motion Capture Artist, ", "Photographer"],
            skills: Math.floor(Math.random() * 1000),
            location: "New York, USA",
        },
        {
            id: uuid(),
            src:
                "https://res.cloudinary.com/shirlzzz9/image/upload/v1550687976/Misc/cover002.jpg",
            name: "ERVIN HOWELL",
            excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor. I’ve worked with many professional film teams.`,
            tags: ["3D Animation, ", "VFX Engineer, ", "Sound Editor +2"],
            skills: Math.floor(Math.random() * 1000),
            location: "New York, USA",
        },
        {
            id: uuid(),
            src:
                "https://res.cloudinary.com/shirlzzz9/image/upload/v1591357726/medium_riceball_77db271242.png",
            name: "CLEMENTIE BAUCH",
            excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor. I’ve worked with many professional film teams.`,
            skills: Math.floor(Math.random() * 1000),
        },
    ],
    searches: [
        "#3Danimation",
        "#Visualeffects",
        "#MotionCaptureArtist",
        "#SFXcoordinator",
        "CGIartist",
    ],
    locations: ["All Cities", "Stockholm", "Berlin", "New York"],
};

export default dummyData;
