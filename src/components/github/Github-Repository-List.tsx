import React from "react";
import { GithubRepositoryType } from "../../redux/store/github/types";

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
     * @function renderRepositories => Processing of fetched data into viewable format.
     */
    const renderRepositories = () => {

        const paginationElements = repositories.slice((pageNumber-1) * 15,(pageNumber) * 15);
        return paginationElements.map((item) => <p>{item.name}</p>);    
    }

    return (
        <div>
            {renderRepositories()}
        </div>
    );
}

export default GithubRepositoryList;