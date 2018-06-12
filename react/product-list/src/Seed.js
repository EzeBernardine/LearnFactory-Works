import avater1 from "./Images/akpos2.jpg";
import avater2 from "./Images/car3.jpg";
import avater3 from"./Images/car2.jpeg";
import avater8 from "./Images/map-of-nig.jpeg";

import avater4 from "./Images/art.png";
import avater5 from"emoji.jpeg";
import avater6 from "./Images/emojiupdate20179-580x358.png";
import avater7 from "./Images/map-of-nig.jpeg";

const generateVoteCount = ()=>{
    return Math.floor(Math.random()* 50 + 15)
}

const Seed ={
    products: [
        {
            id:1,
            title:"yellow pall",
            description: "On demand sand castle construction expertise.",
            url: "#",
            votes: generalVoteCount(),
            submitAvaterUrl1:avaterDaniel,
            productImagesUrl1: imageAqua,
        },
        {
            id:2,
            title:"Supermaturity: The fantasy Congress League",
            description: "Earn pointswhen you favourite politicians pass legislation..",
            url: "#",
            votes: generalVoteCount(),
            submitAvaterUrl1:avaterKrisky,
            productImagesUrl1: imageRose,
        },
        {
            id:3,
            title:"Tinfoild",
            description: "We already have your measurements and address.",
            url: "#",
            votes: generalVoteCount(),
            submitAvaterUrl1:avaterVeronika,
            productImagesUrl1: imageSteel,
        },
        {
            id:4,
            title:"Haught or Naught",
            description: "High minded or absent minded? You decide.",
            url: "#",
            votes: generalVoteCount(),
            submitAvaterUrl1:avaterStevie,
            productImagesUrl1: imageYellow,
        },
        {
            id:5,
            title:"Game of thrones",
            description: "High minded or absent minded? You decide.",
            url: "#",
            votes: generalVoteCount(),
            submitAvaterUrl1:avaterStevie,
            productImagesUrl1: imageYellow,
        },
    ]
}

