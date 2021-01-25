import { mount } from 'enzyme';
import shallow from 'enzyme/build/shallow';
import JobContextProvider from '../../contexts/JobContextProvider';
import JobItem from '../JobItem';
import JobList from '../JobList';

describe("Test JobList.js", () => {
  const jobList = {
    term: "Frontend",
    jobs: [
      {
        id: "akjtheakjghakeg",
        type: "Frontend",
        title: "Frontend dev",
        company_url: "http://hej.se",
        how_to_apply: "hejhejhej",
        company_logo: "https://hejhejhej.se",
        company: "kellogs",
        description: "hej och välkommen till denna tjänst"
      },
      {
        id: "akjtheakjgharh",
        type: "Frontend",
        title: "Frontend dev",
        company_url: "http://hej.se",
        how_to_apply: "hejhejhej",
        company_logo: "https://hejhejhej.se",
        company: "kellogs",
        description: "hej och välkommen till denna tjänst"
      },
      {
        id: "akjtheakjghah342o5",
        type: "Frontend",
        title: "Frontend dev",
        company_url: "http://hej.se",
        how_to_apply: "hejhejhej",
        company_logo: "https://hejhejhej.se",
        company: "kellogs",
        description: "hej och välkommen till denna tjänst"
      }
    ]
  };

  it("renders 'JobItem' correctly with 'jobList' prop", () => {
    const wrapper = mount(
      <JobContextProvider>
        <JobList jobList={jobList} />
      </JobContextProvider>
    )
    expect(wrapper.find(JobItem).exists()).toBe(true);
  })

  it("do not render 'JobItem' without 'jobList' prop", () => {
    const wrapperWithoutProp = shallow(<JobList />)
    expect(wrapperWithoutProp.find(JobItem).exists()).toBe(false);
  })

})