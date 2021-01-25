import { mount, shallow } from 'enzyme';
import JobContextProvider from '../../contexts/JobContextProvider';
import ApplySection from '../ApplySection';

describe("test ApplySection.js", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <JobContextProvider>
        <ApplySection />
      </JobContextProvider>
    );
  })

  it("renders correctly", () => {
    expect(wrapper.find("div").exists()).toBe(true);
  })

})