import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faCodepen, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faServer, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import chat from '../../../images/screenshots/chat.png'
import portfolio from '../../../images/screenshots/portfolio.png'
// import leagueFinder from '../../../images/screenshots/league-finder-landing.png'

let slides = [
    <div>
        <div className="">
            <img src={chat} alt="" className='w-100' style={{ maxHeight: '400px', objectFit: 'cover', objectPosition: '0% 0%' }} />
        </div>
        <div className="bg-1 p-md-5 p-3">
            <h3 className='color-4 m-0 p-0 pb-1 featured-title'>Secret Chat - Realtime Chatting App (MERN)</h3>
            <a href="https://secret-chat-mhp.netlify.app/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Live Site">
                <FontAwesomeIcon icon={faExternalLinkAlt} className='details-social my-3 me-3' />
            </a>
            <a href="https://github.com/MehediHasanParash/secret-chat" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Client Side">
                <FontAwesomeIcon icon={faGithub} className='details-social my-3 me-3' />
            </a>
            {/* <a href="https://github.com/AsadujjamanMridul/muhurto-server" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Server Side">
                <FontAwesomeIcon icon={faServer} className='details-social my-3 me-3' />
            </a> */}
            <p className='color-3 features m-0 p-0 py-3'>Features:</p>
            <p className='color-5 features'>
                • Full responsive chatting app for anyone <br />
        • Authorized user can be able to start chtting witth his/her friends and so on <br />
        • Admin can create a group chat, update or delete chat <br />
        • Firebase Auth is used for authenticate user 
        </p>
        </div>
    </div>
    ,

    <div>
        <div className="">
            <img src={portfolio} alt="" className='w-100' style={{ maxHeight: '400px', objectFit: 'cover', objectPosition: '0% 0%' }} />
        </div>
        <div className="bg-1 p-md-5 p-3">
            <h3 className='color-4 m-0 p-0 pb-1 featured-title'>Portfolio - Developer's Portfolio  (MERN)</h3>

            <a href="https://mehedi-parash.netlify.app/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Live Site">
                <FontAwesomeIcon icon={faExternalLinkAlt} className='details-social my-3 me-3' />
            </a>
            <a href="https://github.com/MehediHasanParash/Portfoliot" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Client Side">
                <FontAwesomeIcon icon={faGithub} className='details-social my-3 me-3' />
            </a>
            {/* <a href="https://github.com/AsadujjamanMridul/humayunnama-server" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Server Side">
                <FontAwesomeIcon icon={faServer} className='details-social my-3 me-3' />
            </a> */}
            <p className='color-3 features m-0 p-0 py-3'>Features:</p>
            <p className='color-5 features'>
                • Responsive portfolio for developer <br />
            • Here anyone can download the resume <br />
            • Email sending process is avaiable here <br />
            • used Private Route
        </p>
        </div>
    </div>
    ,

    <div>
        <div className="">
            <img src={portfolio} alt="" className='w-100' style={{ maxHeight: '400px', objectFit: 'cover', objectPosition: '0% 0%' }} />
        </div>
        <div className="bg-1 p-md-5 p-3">
            <h3 className='color-4 m-0 p-0 pb-1 featured-title'>Portfolio - Developer's Portfolio </h3>

            <a href="https://mehedi-parash.netlify.app/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Live Site">
                <FontAwesomeIcon icon={faExternalLinkAlt} className='details-social my-3 me-3' />
            </a>
            <a href="https://github.com/MehediHasanParash/Portfolio" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Code">
                <FontAwesomeIcon icon={faGithub} className='details-social my-3 me-3' />
            </a>

            <p className='color-3 features m-0 p-0 py-3'>Features:</p>
            <p className='color-5 features'>
                • Responsive portfolio for developer <br />
            • Here anyone can download the resume <br />
            • Email sending process is avaiable here <br />
            • used Private Route
        </p>
        </div>
    </div>


];

export default slides;