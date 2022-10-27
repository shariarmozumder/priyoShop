import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const privacyPolicy = () => {
    return (
        <div>

    {/* -- ======= Header ======= --> */}
    <Header/>

    {/* -- End Header --> */}


    <main id="main">
        <section>
            <div class="container" id="detailPage">
                <h3>Privacy Policy</h3>
                <p class="text-justify">PriyoShop Pte Ltd. built the Retail app for Retailers.
                    This page is used to inform visitors regarding our policies with the collection, use, and disclosure
                    of
                    Personal Information if anyone decides to use our Service.
                    If you choose to use our Service, then you agree to the collection and use of information in
                    relation to
                    this policy. We will not use or share your information with anyone except as described in this
                    Privacy
                    Policy.

                    The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which
                    is
                    accessible at PriyoShop Retailer unless otherwise defined in this Privacy Policy.
                </p>
                <h5>Information Collection and Use
                </h5>
                <p>For a better experience, while using our Service, we may require you to provide us with certain
                    personally
                    identifiable information. The information that we request will be retained by us and used as
                    described
                    in
                    this privacy policy. The app does use third-party services that may collect information used to
                    identify
                    you. The app tracks the user's background location to give a better experience to the users on the
                    retailer
                    app. The location will remain in the background and will be used by the app to track the user's
                    background
                    location - that location is shown on another app. This gives the users of the other app a better
                    experience.
                    Link to the privacy policy of third party service providers used by the app:</p>

                <lu>
                    <li><a href="https://policies.google.com/privacy" class="privacy-policy">Google Play Services</a>
                    </li>
                    <li><a href="https://firebase.google.com/policies/analytics" class="Firebase">Google Analytics for
                            Firebase</a></li>
                </lu>
                <br/>

                <h5>Log Data</h5>
                <p>We want to inform you that whenever you use our Service, in the case of an error in the app
                    we collect data and information (through third-party products) on your phone called Log
                    Data. This Log Data may include information such as your device Internet Protocol (“IP”)
                    address, device name, operating system version, the configuration of the app when utilizing
                    our Service, the time and date of your use of the Service, and other statistics.</p>

                <h5>Cookies</h5>
                <p>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers.
                    These are sent to your browser from the websites that you visit and are stored on your device's
                    internal memory.
                    This Service does not use these “cookies” explicitly. However, the app may use third-party code and
                    libraries that
                    use “cookies” to collect information and improve their services. You have the option to either
                    accept or refuse
                    these cookies and know when a cookie is being sent to your device. If you choose to refuse our
                    cookies,
                    you may not be able to use some portions of this Service.</p>

                <h5>Service Providers</h5>
                <p>We may employ third-party companies and individuals due to the following reasons:
                    <lu>
                        <li> To facilitate our Service;</li>
                        <li>To provide the Service on our behalf;</li>
                        <li>To perform Service-related services; or</li>
                        <li>To assist us in analyzing how our Service is used.</li>
                    </lu>
                    We want to inform users of this Service that these third parties have access to your Personal
                    Information.
                    The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not
                    to disclose
                    or use the information for any other purpose.
                </p>

                <h5>Security</h5>
                <p>We value your trust in providing us with your Personal Information,
                    thus we are striving to use commercially acceptable means of protecting it.
                    But remember that no method of transmission over the internet, or method of electronic storage is
                    100% secure and reliable,
                    and we cannot guarantee its absolute security.</p>

                <h5>Links to Other Sites</h5>
                <p>This Service may contain links to other sites. If you click on a third-party link, you will be
                    directed to that site.
                    Note that these external sites are not operated by us. Therefore, we strongly advise you to review
                    the Privacy
                    Policy of these websites. We have no control over and assume no responsibility for the content,
                    privacy policies,
                    or practices of any third-party sites or services.</p>

                <h5>Children’s Privacy</h5>
                <p>These Services do not address anyone under the age of 15. We do not knowingly collect personally
                    identifiable information
                    from children under 15. In the case we discover that a child under 15 has provided us with personal
                    information,
                    we immediately delete this from our servers. If you are a parent or guardian and you are aware that
                    your child has
                    provided us with personal information, please contact us so that we will be able to do necessary
                    actions.</p>


                <h5>Changes to This Privacy Policy</h5>
                <p>We may update our Privacy Policy from time to time. Thus, you are advised to review this page
                    periodically for any changes.
                    We will notify you of any changes by posting the new Privacy Policy on this page.
                    This policy is effective as of 2021-10-20.</p>


                <h5>Contact Us</h5>
                <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at
                    <a href="https://info@priyoshop.com">info@priyoshop.com</a>.
                </p>
            </div>

        </section>
    </main>

    {/* -- ======= Footer ======= --> */}
    <Footer/>
  
  {/* -- End Footer -->  */}
    <br/>
        </div>
    );
};

export default privacyPolicy;