import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import IStyledComponentProps from "../../../typescript/interfaces/shared/styled-components/IStyled-React-Component";


interface IProps extends IStyledComponentProps {
    incrementStarRating: () => void;
}


const GithubRepositoryAddStar: React.FC<IProps> = ({incrementStarRating}) => {

    const incrementRatingHandler = () =>  {

        incrementStarRating();
    }

    return (
        <FontAwesomeIcon icon={faStar} onClick={incrementRatingHandler}/>
    )
}

export default GithubRepositoryAddStar;