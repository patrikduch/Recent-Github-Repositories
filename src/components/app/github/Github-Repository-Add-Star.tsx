import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
// Type checking
import IStyledComponentProps from "../../../typescript/interfaces/shared/styled-components/IStyled-React-Component";

/**
 * @interface IProps => Component's props interface.
 */
interface IProps extends IStyledComponentProps {
    incrementStarRating: () => void;
}

/**
 * @function GithubRepositoryAddStar => Increase star-rating of choosen Github repository.
 * @param incrementStarRating =>  Redux action that invokes ncremental change ond Redux store.
 */
const GithubRepositoryAddStar: React.FC<IProps> = ({incrementStarRating}) => {

    /**
     * @function incrementRatingHandler => Event handler that is responsible for increasing star ranking of particular Github repository.
     */
    const incrementRatingHandler = () =>  {
        incrementStarRating();
    }

    return (
        <FontAwesomeIcon icon={faStar} onClick={incrementRatingHandler}/>
    )
}

export default GithubRepositoryAddStar;