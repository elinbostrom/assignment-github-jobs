import { shallow } from 'enzyme';
import SearchForm from '../SearchForm';

describe('Test SearchForm.js', () => {
  it("renders correctly", () => {
    const wrapper = shallow(<SearchForm />);
    expect(wrapper.find("form").exists()).toBe(true);
  })
})
