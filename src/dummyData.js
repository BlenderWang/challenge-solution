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
            location: "Stockholm, Sweden",
        },
        {
            id: uuid(),
            src: "/images/search-results--filters-profile-pic@2x.png",
            name: "HANNAH SKEPPSTAD",
            excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor. I’ve worked with many professional film teams.`,
            tags: ["3D Animation, ", "VFX Engineer, ", "Sound Editor +2"],
            skills: 471,
            location: "New York, USA",
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
    categories: [
        {
            id: uuid(),
            name: "#3Danimation",
            definition:
                "#3D animation is at the heart of games and virtual reality, but it may also be used in presentation graphics to add flair to the visuals. ",
        },
        {
            id: uuid(),
            name: "#Visualeffects",
            definition:
                "#VFXengineers are beings who create illusions or visual tricks used in the film, television, theatre, video game and similar  industries to simulate the imagined events in a story or virtual world.",
        },
        {
            id: uuid(),
            name: "#MotionCaptureArtist",
            definition:
                "#Motion Capture (sometimes referred as mo-cap or mocap, for short) is the process of recording the movement of objects or people. ",
        },
        {
            id: uuid(),
            name: "#SFXcoordinator",
            definition:
                "#SFXcoordinator or Special Effects Supervisor is an individual who works on a commercial, theater, television or film set creating special effects. The supervisor generally is the department head who defers to the film's director and/or producers, and who is in charge of the entire special effects team.",
        },
        {
            id: uuid(),
            name: "#CGIartist",
            definition:
                "#CGIArtists (also known as computer graphics artists) create 2D and 3D assets used in developing video games and digitally animated films. A CG artist's work usually revolves around finding balance between artistic sensibilities and technical limitations while working within a development team.",
        },
    ],
    locations: ["All Cities", "Stockholm", "Berlin", "New York"],
};

export default dummyData;
