import { v1 as uuid } from "uuid";

function getRandomCategories() {
    const categories = [
        "3Danimation",
        "Visualeffects",
        "MotionCaptureArtist",
        "SFXcoordinator",
        "CGIartist",
    ];
    return categories
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .join(", ");
}

function getRandomCity(max) {
    const locations = ["Stockholm, Sweden", "Berlin, Germany", "New York, USA"];
    const idx = Math.floor(Math.random() * Math.floor(max));
    return locations[idx];
}

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
            location: getRandomCity(3),
        },
        {
            id: uuid(),
            src: "/images/search-results--filters-profile-pic1@2x.png",
            name: "ANNE KEELER",
            excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor. I’ve worked with many professional film teams.`,
            tags: ["Motion Capture Artist, ", "Photographer"],
            skills: 722,
            location: getRandomCity(3),
        },
        {
            id: uuid(),
            src: "/images/search-results--filters-profile-pic@2x.png",
            name: "HANNAH SKEPPSTAD",
            excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor. I’ve worked with many professional film teams.`,
            tags: ["3D Animation, ", "VFX Engineer, ", "Sound Editor +2"],
            skills: 471,
            location: getRandomCity(3),
        },
        {
            id: uuid(),
            src: `https://source.unsplash.com/user/erondu`,
            name: "SINCLAIR BENETTE",
            excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor. I’ve worked with many professional film teams.`,
            tags: getRandomCategories(3),
            skills: Math.floor(Math.random() * 1000),
            location: getRandomCity(3),
        },
        {
            id: uuid(),
            src: "https://source.unsplash.com/random",
            name: "LISA BRET",
            excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor. I’ve worked with many professional film teams.`,
            tags: getRandomCategories(3),
            skills: Math.floor(Math.random() * 1000),
            location: getRandomCity(3),
        },
        {
            id: uuid(),
            src:
                "https://res.cloudinary.com/shirlzzz9/image/upload/v1543779272/Grid_Img_Gallery/4.jpg",
            name: "ERVIN HOWELL",
            excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor. I’ve worked with many professional film teams.`,
            tags: getRandomCategories(3),
            skills: Math.floor(Math.random() * 1000),
            location: getRandomCity(3),
        },
        {
            id: uuid(),
            src:
                "https://res.cloudinary.com/shirlzzz9/image/upload/v1591357726/medium_riceball_77db271242.png",
            name: "CLEMENTIE BAUCH",
            excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor. I’ve worked with many professional film teams.`,
            tags: getRandomCategories(3),
            skills: Math.floor(Math.random() * 1000),
            location: getRandomCity(3),
        },
        {
            id: uuid(),
            src: "/images/search-results--filters-profile-pic@2x.png",
            name: "PATRICIA LEBRACK",
            excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor. I’ve worked with many professional film teams.`,
            tags: getRandomCategories(3),
            skills: Math.floor(Math.random() * 1000),
            location: getRandomCity(3),
        },
        {
            id: uuid(),
            src: `/images/search-results--filters-profile-pic1@2x.png`,
            name: "CHELSEA DIETRICH",
            excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor. I’ve worked with many professional film teams.`,
            tags: getRandomCategories(3),
            skills: Math.floor(Math.random() * 1000),
            location: getRandomCity(3),
        },
        {
            id: uuid(),
            src: "https://source.unsplash.com/random",
            name: "DENNIS SCHULIST",
            excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor. I’ve worked with many professional film teams.`,
            tags: getRandomCategories(3),
            skills: Math.floor(Math.random() * 1000),
            location: getRandomCity(3),
        },
        {
            id: uuid(),
            src:
                "https://res.cloudinary.com/shirlzzz9/image/upload/v1589447881/thumbnail_iphone_test_denoised_b047e99085.png",
            name: "CLEMENTIE DUBUQUE",
            excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor. I’ve worked with many professional film teams.`,
            tags: getRandomCategories(3),
            skills: Math.floor(Math.random() * 1000),
            location: getRandomCity(3),
        },
        {
            id: uuid(),
            src: "/images/search-results--filters-profile-pic2@2x.png",
            name: "GLENNA REICHERT",
            excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor. I’ve worked with many professional film teams.`,
            tags: getRandomCategories(3),
            skills: Math.floor(Math.random() * 1000),
            location: getRandomCity(3),
        },
        {
            id: uuid(),
            src: `https://source.unsplash.com/user/erondu`,
            name: "NICOLAS RUNOLFSDOTTIR",
            excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor. I’ve worked with many professional film teams.`,
            tags: getRandomCategories(3),
            skills: Math.floor(Math.random() * 1000),
            location: getRandomCity(3),
        },
        {
            id: uuid(),
            src: "https://source.unsplash.com/random",
            name: "KURTIS WEISSSNAT",
            excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor. I’ve worked with many professional film teams.`,
            tags: getRandomCategories(3),
            skills: Math.floor(Math.random() * 1000),
            location: getRandomCity(3),
        },
    ],
    searches: [
        "#3Danimation",
        "#Visualeffects",
        "#MotionCaptureArtist",
        "#SFXcoordinator",
        "#CGIartist",
    ],
    locations: ["All Cities", "Stockholm", "Berlin", "New York"],
};

export default dummyData;
