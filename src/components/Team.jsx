import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from './SectionTitle';
import { gsap } from "gsap";
import { teams } from '../data/team';
import { Link } from 'react-router';

const Team = () => {
    const [activeTeam, setActiveTeam] = useState(
        teams.find((team) => team.isActive)?.name || teams[0].name
    );

    const teamItemsRef = useRef([]);
    const hoverImagesRef = useRef([]);

    useEffect(() => {
        const handleMouseMove = (event, index) => {
            const item = teamItemsRef.current[index];
            const img = hoverImagesRef.current[index];
            if (!item || !img) return;

            const rect = item.getBoundingClientRect();
            
            // মাউসের পজিশন অনুযায়ী রিলেটিভ মুভমেন্ট (ডান পাশ থেকে ক্যালকুলেশন)
            const xPos = event.clientX - rect.left - (rect.width * 0.8); // ডান দিকে ফোকাস রাখা হয়েছে
            const yPos = event.clientY - rect.top - rect.height / 2;

            gsap.to(img, {
                x: xPos * 0.2, 
                y: yPos * 0.2,
                duration: 0.5,
                ease: "power2.out",
                overwrite: "auto"
            });
        };

        const handleMouseLeave = (index) => {
            const img = hoverImagesRef.current[index];
            if (img) {
                gsap.to(img, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        };

        if (window.innerWidth > 767) {
            teams.forEach((team) => {
                const item = teamItemsRef.current[team.id];
                if (item) {
                    const moveFn = (e) => handleMouseMove(e, team.id);
                    const leaveFn = () => handleMouseLeave(team.id);

                    item.addEventListener("mousemove", moveFn);
                    item.addEventListener("mouseleave", leaveFn);

                    return () => {
                        item.removeEventListener("mousemove", moveFn);
                        item.removeEventListener("mouseleave", leaveFn);
                    };
                }
            });
        }
    }, []);

    return (
        <section className="ep-team-section py-120 overflow-hidden">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-7 mx-auto">
                        <SectionTitle title="Our Creative Members" subtitle="Technology that Moves You Forward" />
                    </div>
                </div>

                <div className="team-wrapper">
                    {teams.map((team) => (
                        <div 
                            key={team.id} 
                            className={`team-item border-bottom py-4 position-relative ${activeTeam === team.name ? "active-team" : ""}`}
                            ref={(el) => (teamItemsRef.current[team.id] = el)}
                            onMouseEnter={() => setActiveTeam(team.name)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="row align-items-center">
                                <div className="col-lg-5 col-md-6">
                                    <div className="team-name-info">
                                        <h4 className="name mb-1 font-bold text-2xl">{team.name}</h4>
                                        <p className="designation mb-0 text-muted">{team.designation}</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="social-icon-box">
                                        <ul className="list-unstyled d-flex gap-3 mb-0">
                                            {Object.entries(team.socialLinks).map(([platform, link]) => (
                                                <li key={platform}>
                                                    <a href={link} className="text-dark text-center"><i className={`fab fa-${platform}`}></i></a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                
                                {/* Image Container - Fixed to Right Side */}
                                <div 
                                    ref={(el) => (hoverImagesRef.current[team.id] = el)} 
                                    className={`hover-image position-absolute ${activeTeam === team.name ? "opacity-100 visible" : "opacity-0 invisible"}`}
                                    style={{ 
                                        right: '10%', // ডান পাশ থেকে দূরত্ব
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        width: '200px',
                                        height: '240px',
                                        zIndex: 5,
                                        pointerEvents: 'none',
                                        transition: 'opacity 0.4s ease, visibility 0.4s ease'
                                    }}
                                >
                                    <img 
                                        src={team.image} 
                                        alt={team.name} 
                                        className="w-100 h-100 object-cover rounded-20 shadow-lg" 
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5">
                    <Link to="contact" className="btn btn-outline-dark rounded-pill px-4 py-2">Contact Us</Link>
                </div>
            </div>
        </section>
    );
};

export default Team;