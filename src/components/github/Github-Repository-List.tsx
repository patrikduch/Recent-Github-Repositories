import React from "react";
import { GithubRepositoryType } from "../../redux/store/github/types";

import ReactStars from "react-rating-stars-component";

/**
 * @type PropsType => Component's props type.
 */
type PropsType = {
    pageNumber: number;
    repositories: GithubRepositoryType[];
}

/**
 * @function GithubRepositoryList => Displaying Github repos based on passed repos collection and particular page number.
 * @param pageNumber => Numeric page identifier.
 * @param repositories => Collection of all Github repositories.
 */
const GithubRepositoryList: React.FC<PropsType> = ({pageNumber, repositories}) => {

    /**
     * @function ratingChangeHandler => Event handler that is responsible for rating stars manipulations.
     * @param newRating 
     */
    const ratingChanged = (newRating: number) => {
        console.log(newRating);
    };

    /**
     * @function renderRepositories => Processing of fetched data into viewable format.
     */
    const renderRepositories = () => {

        const paginationElements = repositories.slice((pageNumber-1) * 5,(pageNumber) * 5);
        return paginationElements.map((item) => {

            return (
                <div style={{marginBottom: "1.5vh"}}>
                    {item.name}
                    <p>{item.description}</p>
                    <p>{item.url}</p>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
                </div>
            )
        });    
    }

    return (
        <div>
            {renderRepositories()}
        </div>
    );
}

export default GithubRepositoryList;