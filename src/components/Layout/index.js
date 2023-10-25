import { Outlet } from 'react-router-dom';
import Topnavbar from '../Topnavbar';
import './index.scss';
import { Container } from 'react-bootstrap';

const Layout = () => {
    return (
        <>
            <Topnavbar />
            <Outlet />
            {/* ¿Posible footer? */}
            {/* <span className='tags bottom-tags'>
                &lt;/body&gt;
                <br />
                <span className='bottom-tag-html'>&lt;/html&gt;</span>
            </span> */}
        </>
    )
}

export default Layout;