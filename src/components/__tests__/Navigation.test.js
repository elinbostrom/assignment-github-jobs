import { shallow } from 'enzyme';
import Navigation from '../Navigation';

describe("Test Navigation.js", () => {

  it("renders correctly", () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper).toHaveLength(1);
  })

})