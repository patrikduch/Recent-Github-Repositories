import React from "react";

import styled from "styled-components";
import IStyledComponentProps from "../../../typescript/interfaces/shared/styled-components/IStyled-React-Component";
import { Container, Row, Col } from "reactstrap";

const GithubRepositoryListContainer: React.FC<IStyledComponentProps> = ({ children, className}) => {

    return (
        <Container className={className}>
            <Row style={{paddingTop: "2vh"}}>
                <Col>
                    {children}
                </Col>
            </Row>
            
        </Container>
    );
}

export default styled(GithubRepositoryListContainer)`

    margin-top: 1.5vh;

`