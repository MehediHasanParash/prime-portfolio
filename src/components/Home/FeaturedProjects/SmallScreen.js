import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faCodepen, faInstagram, faHtml5, faReact, faWatchmanMonitoring } from '@fortawesome/free-brands-svg-icons'
import { faServer, faExternalLinkAlt, faMagnet } from '@fortawesome/free-solid-svg-icons'

import chat from '../../../images/screenshots/chat.png'
import portfolio from '../../../images/screenshots/portfolio.png'
// import leagueFinder from '../../../images/screenshots/league-finder-landing-small.png'

const SmallScreen = () => {
    return (

        <div>
            <div className="row m-0 p-0">
                <div className="col-md-6 m-0 p-0">
                    <img src={chat} alt="" className='w-100 m-0 p-0' style={{ maxHeight: '400px', objectFit: 'cover', objectPosition: '0% 0%' }} />
                </div>
                <div className="col-md-6 p-3 pt-3 border border-4 rounded-bottom shadow-sm">
                    <h3 className='color-4 m-0 p-0 pb-1 featured-title-small text-center'>Secret Chat - Realtime Chatting App (MERN)</h3>
                    <div className='text-center mt-3'>
                        <a href="https://secret-chat-mhp.netlify.app/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Live Site">
                            <FontAwesomeIcon icon={faExternalLinkAlt} className='small-screen-social my-3 me-3' />
                        </a>
                        <a href="https://github.com/MehediHasanParash/secret-chat" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Client Side">
                            <FontAwesomeIcon icon={faGithub} className='small-screen-social my-3 me-3' />
                        </a>
                        {/* <a href="https://github.com/AsadujjamanMridul/muhurto-server" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Server Side">
                            <FontAwesomeIcon icon={faServer} className='small-screen-social my-3' />
                        </a> */}
                    </div>
                </div>


            </div>


            <div className="row m-0 p-0 mt-5">
                <div className="col-md-6 m-0 p-0">
                    <img src={portfolio} alt="" className='w-100 m-0 p-0' style={{ maxHeight: '400px', objectFit: 'cover', objectPosition: '0% 0%' }} />
                </div>
                <div className="col-md-6 p-3 pt-3 border border-4 rounded-bottom shadow-sm">
                    <h3 className='color-4 m-0 p-0 pb-1 featured-title-small text-center'>Portfolio - Developer's Portfolio (MERN)</h3>
                    <div className='text-center mt-3'>
                        <a href="https://mehedi-parash.netlify.app/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Live Site">
                            <FontAwesomeIcon icon={faExternalLinkAlt} className='small-screen-social my-3 me-3' />
                        </a>
                        <a href="https://github.com/MehediHasanParash/Portfolio" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Client Side">
                            <FontAwesomeIcon icon={faGithub} className='small-screen-social my-3 me-3' />
                        </a>
                        {/* <a href="https://github.com/AsadujjamanMridul/humayunnama-server" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Server Side">
                            <FontAwesomeIcon icon={faServer} className='small-screen-social my-3' />
                        </a> */}
                    </div>
                </div>
            </div>


            {/* <div className="row m-0 mt-5 p-0">
                <div className="col-md-6 m-0 p-0">
                    <img src={leagueFinder} alt="" className='w-100 m-0 p-0' style={{ maxHeight: '400px', objectFit: 'cover', objectPosition: '0% 0%' }} />
                </div>
                <div className="col-md-6 p-3 pt-3 border border-4 rounded-bottom shadow-sm">
                    <h3 className='color-4 m-0 p-0 pb-1 featured-title-small text-center'>League Finder (API)</h3>
                    <div className='text-center mt-3'>
                        <a href="https://league-finder.netlify.app/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Live Site">
                            <FontAwesomeIcon icon={faExternalLinkAlt} className='small-screen-social my-3 me-3' />
                        </a>
                        <a href="https://github.com/AsadujjamanMridul/league-finder" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Code">
                            <FontAwesomeIcon icon={faGithub} className='small-screen-social my-3' />
                        </a>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default SmallScreen;