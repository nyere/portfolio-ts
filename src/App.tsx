import { useRef, useLayoutEffect } from 'react';
import Toolbar from './Toolbar';
import ProjectCard from './components/projectcard/ProjectCard';
import './App.css';

export default function App() {
    const white = useRef<HTMLDivElement | null>(null);
    const black = useRef<HTMLDivElement | null>(null);
    const yellow = useRef<HTMLDivElement | null>(null);

    const handleClick = (type: string) => {
        let ref: React.RefObject<HTMLElement | null> | null = null;

        if (type === 'white') ref = white;
        if (type === 'yellow') ref = yellow;
        if (type === 'black') ref = black;

        if (ref && ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            });
        }
    };

    useLayoutEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    } else {
                        entry.target.classList.remove('show');
                    }
                });
            },
            { threshold: 0.01 }
        );

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    });

    return (
        <div>
            <Toolbar handleClick={handleClick} />
            <div ref={white} className="screen--white">
                <div className="grid">
                    <div>
                        <h1 className="text text--align-center hidden">
                            Hi, there! I'm{' '}
                            <span className="text--underline">
                                Vladimir Taulov
                            </span>
                            .
                        </h1>
                        <h2 className="text text--align-center hidden">
                            Here's <span className="woof">Zelda</span> and me:
                        </h2>
                    </div>
                    <img
                        className="photo hidden"
                        src="images/zelda_and_me.jpg"
                        alt="zelda and me"
                    />
                </div>
            </div>
            <div ref={yellow} className="screen--yellow">
                <div className="grid">
                    <div className="div--width-per hidden">
                        <h1 className="text text--align-center">
                            I am an experienced Product Owner, currently dabling
                            in the wonderful world of React. Scroll further down
                            to check some of my projects.
                        </h1>
                    </div>
                </div>
            </div>
            <div ref={black} className="screen--black">
                <div className="grid">
                    <div className="div--width-per">
                        <h1 className="text text--align-center text--color-white text--mobile hidden">
                            These are some my recent projects that I worked on.
                            Download the respective git repository in order to
                            check out the project.
                        </h1>
                    </div>
                    <div className="grid-3">
                        <ProjectCard
                            title="ToDo App"
                            description="because everybody builds one"
                            link="https://github.com/nyere/simple-todo-app-ts"
                            emoji="😊"
                        />
                        <ProjectCard
                            title="Gallery App"
                            description="a simple gallery app utilizing grid template for layout; includes filtering functionality based on preset tags"
                            link="https://github.com/nyere/gallery-ts"
                        />
                        <ProjectCard
                            title="Simple Weather App"
                            description="utilizes few of OpenWeather APIs to pull up data about the current weather as well as a 5-day forecast in 3hour step increments"
                            link="https://github.com/nyere/weather-app-ts"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
