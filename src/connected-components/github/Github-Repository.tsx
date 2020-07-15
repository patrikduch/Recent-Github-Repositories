import React, { useState } from "react";
import useDidMount from "../../hooks/dom/component.didmount.hook";
import GithubRepositoryPropsType from "../../typescript/types/shared/connected-components/github/Github-Repository-Type-Props";

import { Button, Container, Row, Col } from 'reactstrap';

import Pagination from "react-js-pagination";
import { debug } from "console";

/**
 * @function GithubRepository => Connected Redux component which manipulates with current Github repositories.
 */
const GithubRepository: React.FC<GithubRepositoryPropsType> = (props: GithubRepositoryPropsType) => {

    const [pageNumber, setPageNumber] = useState(0);
 
    useDidMount(() => {
        props.actions.fetchNewestRepos();

        setPageNumber(1);
    });

    const renderRepositories = () => {

        const paginationElements = props.repositories.slice((pageNumber-1) * 5,(pageNumber) * 5);
        return paginationElements.map((item) => <p>{item.name}</p>);    
    }

    const handlePageChange = (pageNumber: number) => {
        setPageNumber(pageNumber)
    }

    return (
        <Container>
            <Row>
                <Col>
                    {renderRepositories()}  
                </Col>
            </Row>
            <Row style={{paddingTop: "1vh"}}>
                <Col>
                    <Pagination
                        activePage={pageNumber}
                        itemsCountPerPage={10}
                        totalItemsCount={props.repositories.length}
                        pageRangeDisplayed={5}
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