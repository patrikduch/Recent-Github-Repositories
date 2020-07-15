import React from "react";
import { GithubRepositoryType } from "../../../redux/store/github/types";

import GithubRepositoryContainer from "./Github-Repository-List-Container";
import Paragraph from "../../common/Paragraph";
import Url from "../../common/Url";


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

        const paginationElements = repositories.slice((pageNumber-1) * 5,(pageNumber) * 5);
        return paginationElements.map((item) => {

            return (
                <GithubRepositoryContainer>
                    {item.name}
                    <Paragraph>{item.description}</Paragraph>
                    <Url url={item.html_url}>{item.html_url}</Url>
                </GithubRepositoryContainer>
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