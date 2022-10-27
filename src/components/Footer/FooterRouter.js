import React from 'react';
import { Link } from 'react-router-dom';

const FooterRouter = () => {
    return (
        <div>
             <div className="col-lg-2 col-md-2 col-sm-6 footer-links">
                        <h3 lang="dz">Useful Links</h3>
                        <h3 lang="bn">প্রয়োজনীয় লিংকগুলো</h3>
                        <ul>
                            <li lang="dz"><i className="bx bx-chevron-right"></i>
                             <Link><a href="/terms">Terms Of
                                    Service</a></Link>
                                    
                                    </li>
                            <li lang="bn"><i className="bx bx-chevron-right"></i> 
                           <Link> <a href="">ব্যবহারের
                                    শর্তাবলী</a></Link>
                                    </li>

                            <li lang="dz"><i className="bx bx-chevron-right"></i> 
                             <Link><a href="">Privacy
                                    Policy</a></Link>
                                    </li>
                            <li lang="bn"><i className="bx bx-chevron-right"></i> 
                            <Link><a href="">প্রাইভেসী
                                    পলিসি</a></Link>
                                    </li>

                            <li lang="dz"><i className="bx bx-chevron-right"></i> 
                            <Link><a href="">Career </a></Link>
                            </li>
                            <li lang="bn"><i className="bx bx-chevron-right"></i> 
                            <Link><a href="">ক্যারিয়ার</a></Link>
                            </li>
                        </ul>
                    </div>

            
        </div>
    );
};

export default FooterRouter;