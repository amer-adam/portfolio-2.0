import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { Github, Linkedin } from 'lucide-react';
import React from 'react';

const StickyEmail = () => {
    const githubLink = SOCIAL_LINKS.find((link) => link.name === 'github')?.url;
    const linkedinLink = SOCIAL_LINKS.find(
        (link) => link.name === 'linkedin',
    )?.url;

    return (
        <div className="max-xl:hidden fixed bottom-0 left-10 z-50 flex flex-col items-center gap-8 pb-10">
            <div className="flex flex-col gap-6">
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
                        aria-label="GitHub Profile"
                    >
                        <Github size={22} strokeWidth={1.5} />
                    </a>
                )}
                {linkedinLink && (
                    <a
                        href={linkedinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin size={22} strokeWidth={1.5} />
                    </a>
                )}
            </div>

            {/* Vertical Line */}
            <div className="w-[1px] h-24 bg-border/50" />

            <a
                href={`mailto:${GENERAL_INFO.email}`}
                className="text-sm text-muted-foreground tracking-[2px] transition-all duration-300 hover:text-primary hover:-translate-y-1 font-medium pb-2"
                style={{
                    textOrientation: 'mixed',
                    writingMode: 'vertical-rl',
                }}
            >
                {GENERAL_INFO.email}
            </a>
        </div>
    );
};

export default StickyEmail;
