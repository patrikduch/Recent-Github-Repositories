import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import useDidMount from "../../hooks/dom/component.didmount.hook";
import GithubRepositoryPropsType from "../../typescript/types/connected-components/github/Github-Repository-Type-Props";

import { Container } from 'reactstrap';

import GithubRepositoryList from "../../components/app/github/Github-Repository-List";
import GithubRepositoryPagination from "../../components/app/github/Github-Repository-Pagination";

/**
 * @function GithubRepository => Connected Redux component which manipulates with current Github repositories.
 */
const GithubRepository: React.FC<GithubRepositoryPropsType> = (props: GithubRepositoryPropsType) => {

    const [pageNumber, setPageNumber] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const location = useLocation();

    /**
     * @function githubReposInit => Initialization Github collections (fetching from API, etc.)
     */
    const githubReposInit = () => {
        props.actions.fetchNewestRepos();
        setPageNumber(1);
    }

    useDidMount(() => {
        githubReposInit();
        setIsMounted(true);
    });

    useEffect(() => {
        if (isMounted && location.pathname === "/") {
            setPageNumber(1);
        }
    }, [location]);

    /**
     * @function handlePageChange => Event handler that is used in Pagination for changing selected page number.
     * @param pageNumber => New page identifier.
     */
    const handlePageChange = (pageNumber: number) => {
        setPageNumber(pageNumber)
    }

    return (
        <Container>
            <GithubRepositoryList incrementStarRating={props.actions.incrementStarRating} pageNumber={pageNumber} repositories={props.repositories} />
            <GithubRepositoryPagination handlePageChange={handlePageChange} pageNumber={pageNumber} repositories={props.repositories} />
        </Container>
    )
}

export default GithubRepository;