import { sendGet} from '../Request-Utils';

/**
 * @function fetchNewestRepos=> Fetch newest Github repositories.
 */
export const fetchNewestRepos = () => {
  return sendGet("https://api.github.com/search/repositories?q=created:%3E2020-07-01&sort=stars&order=desc", true);
};