import './ProjectCard.css';

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    emoji?: string;
}

const ProjectCard = ({ title, description, link, emoji }: ProjectCardProps) => {
    return (
        <a className="link hidden" href={link} target="_blank" rel="noreferrer">
            <div className="card">
                <h2 className="card__title hidden">{title}</h2>
                <p className="card__description hidden">{description}</p>
                <h1 className="hidden">{emoji}</h1>
            </div>
        </a>
    );
};

export default ProjectCard;
