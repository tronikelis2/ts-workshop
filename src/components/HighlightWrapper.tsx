import { ReactNode, useState } from "react";

type HighlightWrapperProps = {
    children: ReactNode;
};

const HighlightWrapper = ({ children }: HighlightWrapperProps) => {
    const [isHighlighted, setIsHighlighted] = useState(false);

    const handleHighlightClick = () => setIsHighlighted(!isHighlighted);

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                backgroundColor: isHighlighted ? "#ffff8e" : undefined,
                padding: "5px",
            }}
        >
            <span style={{ cursor: "pointer" }} onClick={handleHighlightClick}>
                🟡
            </span>

            {children}
        </div>
    );
};

export default HighlightWrapper;
