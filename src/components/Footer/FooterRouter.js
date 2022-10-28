import React from 'react';
import { Link } from 'react-router-dom';

const FooterRouter = () => {
    return (
        <div>
             <div className="col-lg-2 col-md-2 col-sm-6 footer-links">
                        <h3 lang="dz">Useful Links</h3>
                        <h3 lang="bn">প্রয়োজনীয় লিংকগুলো</h3>
                        <nav>
                        <ul>
                            <li lang="dz"><i className="bx bx-chevron-right"></i>
                             <Link to="/term">Terms Of
                                    Service</Link>
                                    
                                    </li>
                            <li lang="bn"><i className="bx bx-chevron-right"></i> 
                            <Link to="term">ব্যবহারের শর্তাবলী</Link>
                                    </li>

                            <li lang="dz"><i className="bx bx-chevron-right"></i> 
                            <Link to="privacy">Privacy Policy</Link>
                                    </li>
                            <li lang="bn"><i className="bx bx-chevron-right"></i> 
                            <Link to="privacy">প্রাইভেসী পলিসি</Link>
                    
                                    </li>

                            <li lang="dz"><i className="bx bx-chevron-right"></i> 
                            <Link to="/carrer">Career</Link>
                            </li>
                            <li lang="bn"><i className="bx bx-chevron-right"></i> 
                            <Link to="/carrer">ক্যারিয়ার</Link>
                            </li>
                        </ul>
                        </nav>
                    </div>

            
        </div>
    );
};

export default FooterRouter;