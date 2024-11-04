import BackToTopButton from './backToTop'
import Footer from './Footer'
import Navbar from './Navbar'



const Layout = ({ children }) => {
    return (
        <div className='flex flex-col'>
            <Navbar />
            {children}
            <Footer />
            <BackToTopButton />

        </div>
    )
}

export default Layout