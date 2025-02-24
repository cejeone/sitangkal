import Navbar from '../Navbar';
import Footer from '../Footer';
import PropTypes from 'prop-types';

const Portal = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="page-content mt-20">{children}</main>
            <Footer />
        </>
    );
};

Portal.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Portal;
