import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { Calendar } from './components/dashboard/calender';

import { Registration } from './components/forms/registration';
import { SignUp } from './components/forms/signUp';

export default function App () {
  return (
    
       <>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration/>}>
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/registration" element={<Registration/>} />    
            {/* <Route path='/calenda' ele */}
        </Route>
      </Routes>
    </BrowserRouter>
       </>
   
  );
}


