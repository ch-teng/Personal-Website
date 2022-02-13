import { useEffect } from 'react';
import { navigate } from "@reach/router"

const redirectpage = () => {
  useEffect(() => {
    navigate('/');
  }, []);
  return null;
};
export default redirectpage