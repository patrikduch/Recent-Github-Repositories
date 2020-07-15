import React, { useState } from "react";
import useDidMount from "../../hooks/dom/component.didmount.hook";
import GithubRepositoryPropsType from "../../typescript/types/shared/connected-components/github/Github-Repository-Type-Props";

import { Container, Row, Col } from 'reactstrap';

import Pagination from "react-js-pagination";
import GithubRepositoryList from "../../components/app/github/Github-Repository-List";

/**
 * @function GithubRepository => Connected Redux component which manipulates with current Github repositories.
 */
const GithubRepository: React.FC<GithubRepositoryPropsType> = (props: GithubRepositoryPropsType) => {

    const [pageNumber, setPageNumber] = useState(0);
 
    useDidMount(() => {
        props.actions.fetchNewestRepos();
        setPageNumber(1);
    });

    /**
     * @function handlePageChange => Event handler that is used in Pagination for changing selected page number.
     * @param pageNumber => New page identifier.
     */
    const handlePageChange = (pageNumber: number) => {
        setPageNumber(pageNumber)
    }

    return (
        <Container>
            <Row style={{paddingTop: "2vh"}}>
                <Col>
                     <GithubRepositoryList pageNumber={pageNumber} repositories={props.repositories} />
                </Col>
            </Row>
            <Row style={{paddingTop: "2.5vh"}}>
                <Col>
                    <Pagination
                        activePage={pageNumber}
                        itemsCountPerPage={5}
                        totalItemsCount={props.repositories.length}
                        pageRangeDisplayed={12}
                        onChange={handlePageChange}
                        itemClass="page-item"
                        linkClass="page-link"
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default GithubRepository;