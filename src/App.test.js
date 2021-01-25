import App from './App';
import { mount } from 'enzyme';
import StartPage from './pages/StartPage';
import { BrowserRouter } from 'react-router-dom';
import JobContextProvider from './contexts/JobContextProvider';

describe("Test App.js", () => {

  it("app renders 'startpage' correctly", () => {
    const wrapper = mount(
      <BrowserRouter>
        <JobContextProvider>
          <App />
        </JobContextProvider>
      </BrowserRouter>);
    expect(wrapper.find(StartPage).exists()).toEqual(true);
  })

})
