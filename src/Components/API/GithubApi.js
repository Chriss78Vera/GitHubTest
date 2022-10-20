import axios from "axios";
import React from "react";

/**
 * It's a React hook that returns an object with a state property and a data property. 
 * 
 * The state property is a boolean that is true when the data is being fetched and false when the data
 * has been fetched. 
 * 
 * The data property is the data that was fetched. 
 * 
 * The hook takes a url as an argument and uses that url to fetch data from the GitHub API. 
 * 
 * The hook uses the useState hook to create a state variable called user. 
 * 
 * The user variable is an object with a state property and a data property. 
 * 
 * The state property is a boolean that is true when the data is being fetched and false when the data
 * has been fetched. 
 * 
 * The data property is the data that was fetched. 
 * 
 * The hook uses the useEffect hook to fetch data from the GitHub
 * @param url - The URL of the API endpoint you want to call.
 * @returns An object with two properties: state and data.
 */
export const GitHubuser = (url) => {
  const [user, setUser] = React.useState({ state: true, data: null });

  React.useEffect(() => {
    getDataUser(url);
  }, [url]);

  const getDataUser = (url) => {
    setUser({ state: true, data: null });
    const gitHub_api = axios.create({
      baseURL: url,
    });

    gitHub_api
      .get()
      .then((response) => {
        setUser({ state: false, data: response.data });
      })
      .catch(function (error) {
        if (error.response) {
          console.log(
            "Request was made and server responded with a non 200 status"
          );
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log("Request was made, but no response was received");
          console.log(error.request);
        } else {
          console.log("Something happened setting up the request");
          console.log(error.message);
        }
      });
  };
  return user;
};

/**
 * It's a React Hook that returns an object with a state property and a data property. 
 * 
 * The state property is a boolean that is true when the data is being fetched and false when the data
 * has been fetched. 
 * 
 * The data property is the data that is fetched from the API. 
 * 
 * The function takes a url as an argument. 
 * 
 * The function uses the url to make a request to the API. 
 * 
 * The function returns the data from the API. 
 * 
 * The function returns the data from the API in the data property of the object. 
 * 
 * The function returns the data from the API in the data property of
 * @param url - https://api.github.com/users/{username}/repos
 * @returns An object with two properties: state and data.
 */
export const GitHubuserRepos = (url) => {
  const [user, setUser] = React.useState({ state: true, data: null });

  React.useEffect(() => {
    getDataRepos(url);
  }, [url]);

  const getDataRepos = (url) => {
    setUser({ state: true, data: null });

    const gitHub_api = axios.create({
      baseURL: url,
    });

    gitHub_api
      .get()
      .then((response) => {
        setUser({ state: false, data: response.data });
        console.log(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(
            "Request was made and server responded with a non 200 status"
          );
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log("Request was made, but no response was received");
          console.log(error.request);
        } else {
          console.log("Something happened setting up the request");
          console.log(error.message);
        }
      });
  };
  return user;
};
