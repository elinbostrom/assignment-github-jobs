import { shallow } from 'enzyme';
import ButtonReadMore from '../ButtonReadMore';

describe("Test ButtonReadMore.js", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ButtonReadMore />);
  })

  it("renders correctly", () => {
    expect(wrapper.find("button").exists()).toBe(true);
  })

  it("innerHTML is 'Readmore'", () => {
    expect(wrapper.find("button").text()).toBe("Read more")
  })

})