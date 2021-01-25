## GitHub Job Listing

# The task is to create a react app that lets the user search for jobs using the description. The

first view should contain one input:

- Description

The API has the following structure:
https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=javascript

# G

- Add an input field where the user can enter something to search on DONE
- Add a button to trigger the search DONE
- The API expects "spaces" to be changed to "plus-signs" DONE
- When the user searchs for a specific term (description),list the result returned from the API.
  DONE
- Make sure that the type value returned from the API is contained in a strong-element DONE
- Make sure that the title value returned from the API is contained in a h2-element DONE
- Make sure that the company_url value returned from the API is contained in a a-element DONE
- Make sure that the description value returned from the API is contained in a div-element DONE
- Make sure that the company_logo value returned from the API is added to the src attribute for a
  img-element DONE
- If the API returns an empty array, make sure to show a message to the users with the following
  text: "No jobs found". DONE
- Write test to make sure that all the components in your project are working as expected (at least
  10 tests). DONE
- Create at least three components DONE

# VG

- When the user clicks on a job posting the user is redirected to the detail page for that job
  posting. DONE
- Save the result from the API in context, check if the value the user is searching for is already
  in context, if so, return it from the context instead for fetching it again. DONE
- Deploy application to any hosting site (github pages, netlify, firebase, vercel etc) DONE

# Tips

- To render HTML that is returned from the API, please use dangerouslySetInnerHTML
  (https://reactjs.org/docs/dom-elements.html)
- To make sure urls are handled correctly on the hosting service, use HashRouter if necessary.

## Presentation

Individual Presentations

- Code Walkthrough
- Test Walkthrough
- Feedback and thoughts or issues along the way
