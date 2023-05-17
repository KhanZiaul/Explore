import { Outlet } from 'react-router-dom';
import Nav from '../Shared/Nav/Nav';
import Footer from '../Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='p-5'>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;