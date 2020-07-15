import React from "react";
import useDidMount from "../../hooks/dom/component.didmount.hook";
import GithubRepositoryPropsType from "../../typescript/types/shared/connected-components/github/Github-Repository-Type-Props";

/**
 * @function GithubRepository => Connected Redux component which manipulates with current Github repositories.
 */
const GithubRepository: React.FC<GithubRepositoryPropsType> = (props: GithubRepositoryPropsType) => {

    useDidMount(() => {

        const test = props;
        debugger;

        props.actions.fetchNewestRepos();
        


    });

    return (
        <>
            <h1>Repozitáře</h1>

        </>
    )
}

export default GithubRepository;