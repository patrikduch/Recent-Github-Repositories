
import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GithubRepositoryPagination from "./Github-Repository-Pagination";


Enzyme.configure({ adapter: new Adapter() });

describe("<GithubRepositoryPagination />", () => {

    const fn = jest.fn();
    
    it('should render blank screen (null value)', () => {

      const props = {
            pageNumber: 1,
            repositories: [],
            handlePageChange: fn 
      };

      const component = mount(<GithubRepositoryPagination {...props} />);
      expect(component === null);
    });


    it('should render Github repositories pagination system', () => {

        const props = {
              pageNumber: 1,
              repositories: [
                  {
                    id: 1,
                    description: "Brand new repository",
                    html_url: "Url of this repository",
                    name: "name of this brand new repository",
                    stargazers_count: 21  
                  }
              ],
              handlePageChange: fn 
        };
  
        const component = mount(<GithubRepositoryPagination {...props} />);
        
        expect(component.find("Row")).toHaveLength(1);
        expect(component.find("Col")).toHaveLength(1);
        expect(component.find("Pagination")).toHaveLength(1);
      });
  
});