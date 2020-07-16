import React from "react";
import { GithubRepositoryType } from "../../../redux/store/github/types";

import GithubItemRepository from "./Github-Item-Repository";
import Paragraph from "../../common/Paragraph";
import Url from "../../common/Url";
import GithubRepositoryStarsBadge from "./Github-Repository-Stars-Badge";
import GithubRepositoryAddStar from "./Github-Repository-Add-Star";


import keyGen from "../../../helpers/dynamic-rendering/key-generator";



/**
 * @type PropsType => Component's props type.
 */
type PropsType = {
    pageNumber: number;
    repositories: GithubRepositoryType[];
    incrementStarRating: (itemId: number) => void;
}

/**
 * @function GithubRepositoryList => Displaying Github repos based on passed repos collection and particular page number.
 * @param pageNumber => Numeric page identifier.
 * @param repositories => Collection of all Github repositories.
 */
const GithubRepositoryList: React.FC<PropsType> = ({incrementStarRating, pageNumber, repositories}) => {
    /**
     * @function renderRepositories => Processing of fetched data into viewable format.
     */
    const renderRepositories = () => {

        const paginationElements = repositories.slice((pageNumber-1) * 5,(pageNumber) * 5);
        return paginationElements.map((item) => {

            return (
                <GithubItemRepository key={keyGen()} >
                    {item.name} <GithubRepositoryAddStar incrementStarRating={() => incrementStarRating(item.id)} />
                    <GithubRepositoryStarsBadge starCount={item.stargazers_count} />
                    <Paragraph>{item.description}</Paragraph>
                    <Url url={item.html_url}>{item.html_url}</Url>
                </GithubItemRepository>
            )
        });    
    }

    if (repositories.length === 0) return null;

    return (
        <div>
            {renderRepositories()}
        </div>
    );
}

export default GithubRepositoryList;