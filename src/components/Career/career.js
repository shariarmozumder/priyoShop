import React from 'react';
import Header from '../Header/Header';

const Career = () => {
    return (
      <div>
   {/* - ======= Header ======= --> */}
   <Header/>

    {/* -- End Header --> */}

   {/* - ============= Career Section ============ --> */}

    <section className="career_section" id="careerSection">
        <div className="container my-5">
            <div className="career_title">
                <h1 lang="dz">CAREER AT PRIYOSHOP</h1>
                <h1 lang="bn">ক্যারিয়ার @প্রিয়শপ</h1>
                <p lang="dz">Make your career alongside learning, fun and development</p>
                <p lang="bn">শিক্ষা, আনন্দ আর উন্নতির সাথে আপনার ক্যারিয়ার গড়ুন </p>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <button className="job">
                        <div className="row g-2">
                            <div className="col-md-4">
                                <span><b>Position:</b> Software Engineer - .NET/Angular </span>
                            </div>
                            <div className="col-md-2">
                                <span><b>Type:</b> Full time </span>
                            </div>
                            <div className="col-md-2">
                                <span><b>Vacancy:</b> 4 </span>
                            </div>
                            <div className="col-md-2">
                                <span><b>Location:</b> Onsite </span>
                            </div>
                            <div className="col-md-2">
                                <span><b>Deadline:</b> 21/09/2022 </span>
                            </div>
                        </div>
                    </button>
                    <div className="job_description">
                        <span>
                            We are looking for Software engineers (Jr, Mid & Sr.) who welcome both engineering and
                            maintenance tasks. The primary focus will be to implement new user interfaces and features
                            together with automated unit and integration tests. You will be working with our candid and
                            collaborative team, where your knowledge and advice about application architecture and the
                            newest mobile technologies will be highly appreciated. The code you write will need to be
                            cleanly organized and of the highest quality. You will also help ensure solid application
                            performance and an excellent user experience.
                            <br/> <br/>
                        </span>

                        <p>Job Description / Responsibilities:</p>
                        <ul>
                            <li>Minimum 1-3 years of coding experience in developing web applications with .NET, Angular
                                and Databases</li>
                            <li>Good knowledge and understanding of ASP.NET Web Services, Restful Web APIs, OData,
                                Entity Framework, Asynchronous Programming in C#, LINQ, Lambdas, Func, Action, Routing,
                                Model Binding, MSSQL, etc.</li>
                            <li>Solid knowledge and experience in implementing Restful Web services.</li>
                            <li>Deep knowledge of Object-Oriented design and implementation.</li>
                            <li>Knowledge of Responsive Web Design (HTML5 & CSS3) with Cross-Browser Compatibility;
                                Bootstrap Preferred.</li>
                            <li>Excellent analytical, problem-solving and decision-making skills.</li>
                            <li>Experience building single-page web applications & SaaS business models is required.
                            </li>
                            <li>Must be capable of writing complex SQL queries, Stored procedures and SQL functions.
                            </li>
                        </ul>

                        <p>Educational Requirements:</p>
                        <ul>
                            <li>Bachelor of Science (BSc) in CSE</li>
                            <li>B.Sc or M.Sc in Computer Science & Engineering or equivalent</li>
                            <li>Training/Trade Course: .net, MSSQL</li>
                            <li>Skills Required: ASP.NET, ASP.NET Core, MVC, Restful Web API , MSSQL Server,
                                Angular/React</li>
                        </ul>

                        <p>Experience Requirements:</p>
                        <ul>
                            <li>1 to 3 year(s)</li>
                            <li>The applicants should have experience in the following area(s): ASP.NET, ASP.NET Core,
                                Angular/React, MSSQL Server</li>
                        </ul>

                        <p>Job Location:</p>
                        <ul>
                            <li>Dhanmondi, Dhaka</li>
                        </ul>

                        <p>Salary: </p>
                        <ul>
                            <li>20,000 BDT to 80,000 BDT/Monthly (Based on Your Experience)</li>
                        </ul>

                        <p>Compensation & Other Benefits: </p>
                        <ul>
                            <li>A competitive salary structure.</li>
                            <li>Festival Bonus: 2 (Yearly).</li>
                            <li>An exceptional working environment with supportive peers and mentors.</li>
                            <li>Career Progression Programs.</li>
                        </ul>

                        <p>Application Process: </p>
                        <ul>
                            <li>Send your CV and GitHub link with the title of “Software Engineer” to: career@priyoshop.com</li>
                        </ul>



                        <a href="https://www.linkedin.com/jobs/view/3095026461" target="_blank" className="apply_btn"> Apply Via LinkedIn</a> 
                    </div>
                </div>
            </div>
        </div>

        <div className="container my-5">
            <h2 className="text-center pt-5 my-5">Drop Your CV Here</h2>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="cv_box">
                        <i className="fa fa-user fa-3x"></i>
                        <h2>Internship</h2>
                        <a href="https://forms.gle/ZfkY2N6zybnXrHh98" target="_blank" className="dropCv_btn"> Drop Now</a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="cv_box">
                        <i className="fa fa-briefcase fa-3x"></i>
                        <h2>Experienced</h2>
                        <a href="https://forms.gle/ZfkY2N6zybnXrHh98" target="_blank" className="dropCv_btn"> Drop Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

   {/* - ============= Career Section End============ --> */}
   {/* - ======= Footer ======= --> */}

    {/* -- End Footer --> */}

      </div>
    );
};

export default Career;