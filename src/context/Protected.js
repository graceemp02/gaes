
  import { Navigate } from 'react-router-dom'
  import Layout from '../components/Layout';

const PrivateRoutes = () => {
  const id = localStorage.getItem("gaes_id");
    return id ? <Layout /> : <Navigate to="/login" />;
}

export default PrivateRoutes

