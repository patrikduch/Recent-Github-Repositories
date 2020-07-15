import React from "react";

import styled from "styled-components";
import IStyledComponentProps from "../../../typescript/interfaces/shared/styled-components/IStyled-React-Component";
import { Container } from "reactstrap";

const GithubRepositoryListContainer: React.FC<IStyledComponentProps> = ({ children, className}) => {

    return (
        <Container className={className}>
            {children}
        </Container>
    );
}

export default styled(GithubRepositoryListContainer)`

    margin-top: 1.5vh;

`