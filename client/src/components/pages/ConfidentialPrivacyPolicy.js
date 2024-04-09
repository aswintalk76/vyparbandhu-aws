import Footer from "./Footer"
import Header from "./Header"
import groupImage from '../../components/images/pexels-thirdman-5583250.jpg'
import mission from '../../components/images/mission.jpg'
import Vision from '../../components/images/vision.jpg'
import ContactUs from "./ContactUs"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import WhyVyapar from "./WhyVyapar"
import Review from "./Review"
import Testimonials from "./TestiMonials"

const ConfidentialPrivacyPolicy = () => {
    const { pathname } = useLocation();

    const [documentList, setDocumentList] = useState();


    const getList = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_PORT}/admin/about/getData`);
            const data = await response.json();
            if (response.status === 200) {

                setDocumentList(data && data)
            }
            console.log('Data received:', data);

        } catch (e) {
            console.log(e, 'error')
        }

    }
    useEffect(() => {

        getList();

    }, [])


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <Header />
            <div className="container">
                <div className="my-5 px-sm-5 mx-sm-5">
                    <div className="mb-5">
                        {
                            documentList?.map((item) => {
                                return (
                                    <>
                                        <h1 className="text-center heading_main mb-1">Confidentiality Policy </h1>
                                        <div className="mt-4 about_div">
                                            <p className='f_20'>
                                                Vyaparbandhu is committed to maintaining the confidentiality and privacy of the information entrusted to us by users interacting with our website. This Confidentiality Policy outlines the principles, practices, and security measures implemented to protect and manage confidential information.
                                            </p>
                                            <p className='f_20 mt-5'>
                                                <span><h4 className="text_green">Scope  </h4></span>
                                                This policy applies to all individuals accessing the Vyaparbandhu website, including users, visitors, and stakeholders. It encompasses the collection, use, storage, and disclosure of confidential information.
                                            </p>
                                            <p className='f_20 mt-5'>
                                                <span><h4 className="text_green">Information Collected  </h4></span>
                                                Vyaparbandhu may collect various types of confidential information, including but not limited to:
                                                <ul>
                                                    <li><span style={{ fontWeight: "500" }}>Personal Information :</span> Names, contact details, and other identifiable information voluntarily provided by users.</li>
                                                    <li><span style={{ fontWeight: "500" }}>Business Information :</span> Data related to the user's business, transactions, and financial details.</li>
                                                    <li><span style={{ fontWeight: "500" }}>User Activity :</span> Information on user interactions with the Vyaparbandhu website, such as browsing history, IP addresses, and device information.</li>
                                                </ul>
                                            </p>
                                            <p className='f_20 mt-5'>
                                                <span><h4 className="text_green">Confidentiality Commitment  </h4></span>
                                                Vyaparbandhu is dedicated to preserving the confidentiality of all information collected. We will not disclose, sell, rent, or share confidential information with third parties without the explicit consent of the user, except as required by law or to fulfill contractual obligations.
                                            </p>
                                            <p className='f_20 mt-5'>
                                                <span><h4 className="text_green">Use of Confidential Information  </h4></span>
                                                Confidential information collected by Vyaparbandhu will be used for the following purposes:
                                                <ul>
                                                    <li><span style={{ fontWeight: "500" }}>Providing and Improving Services :</span> To deliver and enhance the services offered by Vyaparbandhu</li>
                                                    <li><span style={{ fontWeight: "500" }}>Customizing User Experience :</span> Tailoring content and user experience based on user preferences.</li>
                                                    <li><span style={{ fontWeight: "500" }}>Responding to Inquiries :</span> Addressing user inquiries and requests in a timely manner.</li>
                                                    <li><span style={{ fontWeight: "500" }}>Legal Compliance :</span> Fulfilling legal obligations and regulatory requirements.</li>
                                                </ul>
                                            </p>
                                            <p className='f_20 mt-5'>
                                                <span><h4 className="text_green">Security Measures  </h4></span>
                                                Vyaparbandhu employs robust security measures to safeguard confidential information:
                                                <ul>
                                                    <li><span style={{ fontWeight: "500" }}>Encryption :</span> Data transmission is secured using encryption technologies</li>
                                                    <li><span style={{ fontWeight: "500" }}>SSL Technology :</span> Secure Socket Layer technology is utilized to ensure secure data transfer.</li>
                                                    <li><span style={{ fontWeight: "500" }}>Firewalls :</span> Protective barriers are in place to prevent unauthorized access.</li>
                                                    <li><span style={{ fontWeight: "500" }}>Regular Security Assessments :</span> Ongoing assessments to identify and address potential vulnerabilities.</li>
                                                </ul>
                                            </p>
                                            <p className='f_20 mt-5'>
                                                <span><h4 className="text_green">Retention Period  </h4></span>
                                                Confidential information will be retained for the duration necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law or regulation
                                            </p>
                                            <p className='f_20 mt-5'>
                                                <span><h4 className="text_green">User Responsibilities  </h4></span>
                                                Users are responsible for maintaining the confidentiality of their account credentials. It is recommended to use strong, unique passwords. Users should promptly notify Vyaparbandhu of any unauthorized access or suspicious activities.
                                            </p>
                                            <p className='f_20 mt-5'>
                                                <span><h4 className="text_green">Changes to the Policy  </h4></span>
                                                Vyaparbandhu reserves the right to update or modify this Confidentiality Policy. Users will be notified of any material changes, and it is recommended to periodically review this policy.
                                            </p>
                                         

                                        </div>


                                       
                                    </>
                                )
                            })
                        }

                    </div>


                </div>
            </div>
            <WhyVyapar />
            <Review />
            <Testimonials />
            <ContactUs />
            <Footer />

        </>
    )
}

export default ConfidentialPrivacyPolicy;