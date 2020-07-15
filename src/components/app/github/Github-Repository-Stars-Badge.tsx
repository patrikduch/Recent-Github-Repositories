import React from "react";
import { Badge } from "reactstrap";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import IStyledComponentProps from "../../../typescript/interfaces/shared/styled-components/IStyled-React-Component";


interface IProps extends IStyledComponentProps {
    starCount: number;
}


const GithubRepositoryStarsBadge: React.FC<IProps> = ({className, starCount}) => {
    return (
        <div>
            <Badge className={className} color="secondary">{starCount}<FontAwesomeIcon icon={faStar} /></Badge>
        </div>
    )
}

export default styled(GithubRepositoryStarsBadge)`
`