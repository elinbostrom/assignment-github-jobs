import { shallow } from 'enzyme';
import ButtonPreviousSearchTerm from '../ButtonPreviousSearchTerm';

describe("Test ButtonPreviousSearchTerm.js", () => {
  let wrapper;
  const item = {
    term: "javascript",
    jobs: []
  };

  beforeEach(() => {
    wrapper = shallow(<ButtonPreviousSearchTerm item={item} />);
  })

  it("renders correctly", () => {
    expect(wrapper.find("button").exists()).toBe(true);
  })

  it("do not render without 'item' prop", () => {
    const wrapperWithoutProp = shallow(<ButtonPreviousSearchTerm />);
    expect(wrapperWithoutProp.find("button").exists()).toBe(false);
  })

  it("innerHTML is 'javascript' when searchterm is 'javascript'", () => {
    expect(wrapper.find("button").text()).toContain("javascript")
  })

})