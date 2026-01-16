import team1 from "../assets/img/team/team-img-1.png";
import team2 from "../assets/img/team/team-img-2.png"
import team3 from "../assets/img/team/team-img-3.png"

import member1 from '../assets/img/team/team-2-img1.png';
import member2 from '../assets/img/team/team-2-img2.png';
import member3 from '../assets/img/team/team-2-img3.png';
import member4 from '../assets/img/team/team-2-img4.png';

export const teams = [
    {
        id: 1,
        image: team1,
        name: "Dianne Russell",
        designation: "Lorem ipsum dolor sit",
        socialLinks: {
            facebook: "#",
            pinterest: "#",
            linkedin: "#",
            instagram: "#"
        }
    },
    {
        id: 2,
        image: team2,
        name: "Floyd Miles",
        designation: "Lorem ipsum dolor sit",
        socialLinks: {
            facebook: "#",
            pinterest: "#",
            linkedin: "#",
            instagram: "#"
        },
        active: true
    },
    {
        id: 3,
        image: team3,
        name: "Kathryn Murphy",
        designation: "Lorem ipsum dolor sit",
        socialLinks: {
            facebook: "#",
            pinterest: "#",
            linkedin: "#",
            instagram: "#"
        }
    },
]

export const teamMembers = [
    {
        id: 1,
        name: "Marvin McKinney",
        designation: "Web Designer",
        image: member1,
        socials: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" }
    },
    {
        id: 2,
        name: "Ethan Carter",
        designation: "Senior UX/UI Designer",
        image: member2,
        socials: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" }
    },
    {
        id: 3,
        name: "James Sullivan",
        designation: "Frontend Developer",
        image: member3,
        socials: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" }
    },
    {
        id: 4,
        name: "Daniel Foster",
        designation: "Graphic Designer",
        image: member4,
        socials: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" }
    }
];