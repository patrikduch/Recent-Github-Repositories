import React from "react";
import useDidMount from "../../hooks/dom/component.didmount.hook";
import GithubRepositoryPropsType from "../../typescript/types/shared/connected-components/github/Github-Repository-Type-Props";

/**
 * @function GithubRepository => Connected Redux component which manipulates with current Github repositories.
 */
const GithubRepository: React.FC<GithubRepositoryPropsType> = (props: GithubRepositoryPropsType) => {

    useDidMount(() => {
        props.actions.fetchNewestRepos();
    });

    const renderRepositories = () => {
        return props.repositories.slice(0.5).map((item) => {
        return <p>{item.name}</p>
        })
    }

    return (
        <>
            <h1>TOP 5 Github repozitářů</h1>
            {renderRepositories()}

        </>
    )
}

export default GithubRepository;