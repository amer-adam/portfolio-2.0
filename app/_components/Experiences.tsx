'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef, useState, useCallback } from 'react';
import Image from 'next/image';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.experience-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    const handleMouseEnter = useCallback((index: number) => {
        setHoveredIndex(index);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredIndex(null);
    }, []);

    return (
        <section className="py-section" id="my-experience">
            <div className="container" ref={containerRef}>
                <SectionTitle title="My Experience" />

                <div className="grid gap-14">
                    {MY_EXPERIENCE.map((item, index) => (
                        <div key={item.title} className="experience-item">
                            {/* Header - always visible */}
                            <div className="flex items-start justify-between gap-4 flex-wrap">
                                <div>
                                    <p className="text-xl text-muted-foreground">
                                        {item.company}
                                    </p>
                                    <p className="text-5xl font-anton leading-none mt-3.5 mb-2.5 uppercase">
                                        {item.title}
                                    </p>
                                    <p className="text-lg text-muted-foreground">
                                        {item.duration}
                                    </p>
                                </div>

                                {/* Meet the Team button */}
                                {item.teamPhoto && (
                                    <button
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                        className={`
                                            group relative mt-2 px-5 py-2.5 rounded-full
                                            border transition-all duration-500 ease-out
                                            flex items-center gap-2.5 shrink-0
                                            ${hoveredIndex === index
                                                ? 'border-primary/60 bg-primary/10 shadow-[0_0_25px_rgba(0,255,120,0.15)]'
                                                : 'border-border hover:border-primary/40 bg-transparent'
                                            }
                                        `}
                                    >
                                        {/* Animated dot */}
                                        <span className={`
                                            w-2 h-2 rounded-full transition-all duration-500
                                            ${hoveredIndex === index
                                                ? 'bg-primary scale-125 shadow-[0_0_8px_rgba(0,255,120,0.6)]'
                                                : 'bg-muted-foreground group-hover:bg-primary/70'
                                            }
                                        `} />
                                        <span className={`
                                            text-sm font-medium tracking-wider uppercase transition-colors duration-500
                                            ${hoveredIndex === index
                                                ? 'text-primary'
                                                : 'text-muted-foreground group-hover:text-foreground'
                                            }
                                        `}>
                                            Meet the Team
                                        </span>
                                        {/* Arrow icon */}
                                        <svg
                                            className={`
                                                w-4 h-4 transition-all duration-500
                                                ${hoveredIndex === index
                                                    ? 'text-primary translate-x-0.5'
                                                    : 'text-muted-foreground group-hover:text-foreground'
                                                }
                                            `}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                )}
                            </div>

                            {/* Content area - transitions between bullet points and team photo */}
                            <div className="relative mt-6 overflow-hidden">
                                {/* Bullet points */}
                                <div
                                    className="transition-all duration-700 ease-in-out"
                                    style={{
                                        opacity: hoveredIndex === index ? 0 : 1,
                                        transform: hoveredIndex === index ? 'translateY(20px) scale(0.98)' : 'translateY(0) scale(1)',
                                        filter: hoveredIndex === index ? 'blur(6px)' : 'blur(0px)',
                                        maxHeight: hoveredIndex === index ? '0px' : '600px',
                                        transitionProperty: 'opacity, transform, filter, max-height',
                                        transitionDuration: hoveredIndex === index ? '400ms, 400ms, 400ms, 600ms' : '500ms, 500ms, 500ms, 600ms',
                                        transitionDelay: hoveredIndex === index ? '0ms' : '200ms',
                                    }}
                                >
                                    {item.points && (
                                        <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground text-lg max-w-3xl">
                                            {(item.points as string[]).map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {/* Team photo */}
                                {item.teamPhoto && (
                                    <div
                                        className="transition-all duration-700 ease-in-out"
                                        style={{
                                            opacity: hoveredIndex === index ? 1 : 0,
                                            transform: hoveredIndex === index ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.98)',
                                            filter: hoveredIndex === index ? 'blur(0px)' : 'blur(6px)',
                                            maxHeight: hoveredIndex === index ? '500px' : '0px',
                                            transitionProperty: 'opacity, transform, filter, max-height',
                                            transitionDuration: hoveredIndex === index ? '500ms, 500ms, 500ms, 600ms' : '400ms, 400ms, 400ms, 600ms',
                                            transitionDelay: hoveredIndex === index ? '200ms' : '0ms',
                                            pointerEvents: hoveredIndex === index ? 'auto' : 'none',
                                        }}
                                    >
                                        <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                                            {/* Gradient overlay */}
                                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                                            <Image
                                                src={item.teamPhoto}
                                                alt={`${item.company} team photo`}
                                                width={900}
                                                height={500}
                                                className="w-full h-auto object-cover"
                                                style={{ aspectRatio: '16/9' }}
                                            />

                                            {/* Caption overlay */}
                                            <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                                    <p className="text-sm text-foreground/80 font-medium tracking-wide">
                                                        {item.company}
                                                    </p>
                                                </div>
                                                <p className="text-xs text-muted-foreground mt-1 ml-3.5">
                                                    {item.duration}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;
