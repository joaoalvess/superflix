import { BrowserRouter as Router } from 'react-router-dom';

import Auth from './auth.routes';
import Session from './session.routes';

export default function Routes() {
  const login = false;

  return <Router>{login ? <Session /> : <Auth />}</Router>;
}
