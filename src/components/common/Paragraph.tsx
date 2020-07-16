import React from "react";
import styled from "styled-components";
import IStyledComponentProps from "../../typescript/interfaces/shared/styled-components/IStyled-React-Component";

const Paragraph: React.FC<IStyledComponentProps> = ({children, className }) => {
    return (
        <p className={className}>
            {children}
        </p>
    );
}

export default styled(Paragraph)`

    font-style: italic;
    margin-bottom: 0;
    padding-top: 0.3vh;
    padding-bottom: 0.3vh;
`;