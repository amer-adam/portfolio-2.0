import { GENERAL_INFO } from '@/lib/data';
import { GitFork, Star } from 'lucide-react';

interface RepoStats {
    stargazers_count: number;
    forks_count: number;
}

const Footer = async () => {
    const repoStats = await fetch(
        'https://api.github.com/repos/amer-adam/portfolio-2.0',
        {
            next: {
                revalidate: 60 * 60, // 1 hour
            },
        },
    );

    const { stargazers_count, forks_count } =
        (await repoStats.json()) as RepoStats;

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="mt-10 opacity-60 hover:opacity-100 transition-opacity">
                    <a
                        href="https://github.com/amer-adam/portfolio-2.0"
                        target="_blank"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Forked from Tajmirul Islam. Massive thanks to him for the template!
                        <div className="flex items-center justify-center gap-4 mt-1.5 opacity-70">
                            <span className="flex items-center gap-1.5 text-xs">
                                <Star size={12} /> {stargazers_count}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs">
                                <GitFork size={12} /> {forks_count}
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
