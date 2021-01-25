import { mount } from 'enzyme';
import JobContextProvider from '../../contexts/JobContextProvider';
import ApplySection from '../ApplySection';
import ButtonReadMore from '../ButtonReadMore';
import JobItem from '../JobItem';

const jobObj = {
  id: "akjtheakjghakeg",
  type: "Frontend",
  title: "Frontend dev",
  company_url: "http://hej.se",
  how_to_apply: "hejhejhej",
  company_logo: "https://hejhejhej.se",
  company: "kellogs",
  description: "hej och välkommen till denna tjänst"
}

describe("Test that JobItem.js renders correctly", () => {

  it("renders detailpage correctly", () => {
    const wrapper = mount(
      <JobContextProvider>
        <JobItem detailpage data={jobObj} />
      </JobContextProvider>)
    expect(wrapper.find(ApplySection).exists()).toBe(true);
  })

  it("renders default JobItem with 'ButtonReadMore' component correctly", () => {
    const wrapper = mount(
      <JobContextProvider>
        <JobItem data={jobObj} />
      </JobContextProvider>)
    expect(wrapper.find(ButtonReadMore).exists()).toBe(true);
  })

})

describe("Test that JobItem 'default' contains right type of element and text", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <JobContextProvider>
        <JobItem data={jobObj} />
      </JobContextProvider>
    )
  })

  it("should contain a strong element with 'type' text", () => {
    expect(wrapper.find("strong").text()).toBe(jobObj.type)
  })

  it("should contain a h2 element with 'title' text", () => {
    expect(wrapper.find("h2").text()).toBe(jobObj.title)
  })

  it("should contain a img element with 'company_logo' src", () => {
    expect(wrapper.find("img").prop('src')).toBe(jobObj.company_logo)
  })

  it("should contain a main element with 'description + ...' text", () => {
    expect(wrapper.find("main").text()).toBe(jobObj.description + '...')
  })

  it("should contain a ButtonReadMore component with 'id' prop", () => {
    expect(wrapper.find(ButtonReadMore).prop('id')).toBe(jobObj.id)
  })

})


describe("Test that JobItem 'detailpage' contains right type of element and text", () => {

  it("should contain a ApplySection component with 'apply' prop", () => {
    const wrapper = mount(
      <JobContextProvider>
        <JobItem detailpage data={jobObj} />
      </JobContextProvider>
    )
    expect(wrapper.find(ApplySection).prop('apply')).toBe(jobObj.how_to_apply)
  })
})

describe("Test render right classname depending on prop", () => {

  it("find class 'job_list_item' when detailpage prop is not defined", () => {
    const wrapper = mount(
      <JobContextProvider>
        <JobItem data={jobObj} />
      </JobContextProvider>
    )
    expect(wrapper.find(".job_list_item").exists()).toBeTruthy();
  })

  it("don't find class 'detail_page_item' when detailpage prop is not defined", () => {
    const wrapper = mount(
      <JobContextProvider>
        <JobItem data={jobObj} />
      </JobContextProvider>
    )
    expect(wrapper.find(".detail_page_item").exists()).toBeFalsy();
  })

  it("find class 'detail_page_item' when detailpage prop is defined", () => {
    const wrapper = mount(
      <JobContextProvider>
        <JobItem data={jobObj} detailpage />
      </JobContextProvider>
    )
    expect(wrapper.find(".detail_page_item").exists()).toBeTruthy();
  })

  it("don't find class 'job_list_item' when detailpage prop is defined", () => {
    const wrapper = mount(
      <JobContextProvider>
        <JobItem data={jobObj} detailpage />
      </JobContextProvider>
    )
    expect(wrapper.find(".job_list_item").exists()).toBeFalsy();
  })
})