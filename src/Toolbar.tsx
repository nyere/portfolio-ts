interface ToolbarProps {
    handleClick: (type: string) => void;
}

export default function Toolbar({ handleClick }: ToolbarProps) {
    return (
        <div className="toolbar">
            <button
                className="toolbar__button toolbar__button--white"
                onClick={() => handleClick('white')}
                aria-label="White"
            />
            <button
                className="toolbar__button toolbar__button--yellow"
                onClick={() => handleClick('yellow')}
                aria-label="Yellow"
            />
            <button
                className="toolbar__button toolbar__button--black"
                onClick={() => handleClick('black')}
                aria-label="Black"
            />
        </div>
    );
}
