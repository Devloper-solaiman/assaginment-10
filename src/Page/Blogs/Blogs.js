import React from 'react';
import authoriz from '../../assets/authoriz.png'
import firebase_similar from '../../assets/firebase_similar.png'
import firebase_work from '../../assets/firebase_work.png'

const Blogs = () => {
    return (
        <section>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='#' src={authoriz} className="max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold text-center">Authentication & Authorization Difference</h1>
                        <hr className='py-1 bg-black/30 rounded-full' />
                        <p className="py-6 text-ellipsis">Authorization and authentication are two related but distinct concepts in the field of computer security and access control. While they are often used together, they serve different purposes. Here's an explanation of the difference between authorization and authentication:

                            <p className='text-2xl font-bold'>  Authentication:</p>
                            Authentication is the process of verifying the identity of a user or entity attempting to access a system, device, or resource. It ensures that the user is who they claim to be. Authentication methods commonly involve presenting credentials such as a username/password combination, a digital certificate, biometric data (fingerprint, face recognition), or a hardware token (smart card) to validate the identity. Once the authentication process is successfully completed, the system grants access to the authenticated user.

                            <p className='text-2xl font-bold'> Authorization:</p>
                            Authorization, also known as access control, is the process of determining whether an authenticated user or entity has the necessary permissions, privileges, or rights to access a specific resource or perform a certain action within a system. Authorization defines what actions or operations a user can perform and what resources they can access. It involves checking the user's access rights against an access control policy or set of rules. Authorization ensures that users are granted appropriate privileges based on their roles or assigned permissions.

                            In summary, authentication verifies the identity of a user, while authorization determines what that authenticated user is allowed to do or access within a system. Authentication is the first step in the process, establishing trust in the user's identity, and authorization follows to control and limit their actions based on their established identity.</p>

                    </div>
                </div>
            </div>

            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div>
                        <h1 className="text-4xl font-bold text-center">Why is Firebase Best?</h1>
                        <hr className='py-1 bg-black/30 rounded-full' />
                        <p className="py-6 text-ellipsis">It's important to note that while Firebase offers many advantages, the choice of a development platform depends on the specific needs and requirements of a project. Developers should consider factors such as scalability, complexity, integrations, and cost before deciding on the best platform for their application.

                            <p className='text-2xl font-bold'>  What else can be used if not using firebase?</p>
                            If you're looking for alternatives to Firebase for building web and mobile applications, there are several options available. Here are a few popular ones:
                            <br />
                            1.AWS Amplify <br /> 2.Google Cloud Platform <br /> 3. Microsoft Azure <br /> 4. Django <br /> 5. Express.js <br /> 6. MongoDB <br />
                            These are just a few examples, and there are many more options available based on your specific requirements, programming language preferences, and infrastructure needs. It's important to evaluate the features, scalability, integration capabilities, and community support of each alternative to determine the best fit for your project.
                        </p>

                    </div>
                    <img alt='#' src={firebase_similar} className="max-w-lg rounded-lg shadow-2xl" />
                </div>
            </div>

            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div>
                        <h1 className="text-4xl font-bold text-center">  All work can be done if the fire is on</h1>
                        <hr className='py-1 bg-black/30 rounded-full' />
                        <p className="py-6 text-ellipsis">Firebase offers a wide range of features and services that can be utilized for various aspects of building web and mobile applications. Here are some of the key functionalities and capabilities provided by Firebase:

                            <p className='text-2xl font-bold'> examples</p>
                            <br />Real-time Database
                            <br />Authentication
                            <br />Cloud Firestore
                            <br />Cloud Storage
                            <br />Hosting
                            <br />Cloud Functions
                            <br />Analytics
                            <br />Performance Monitoring
                            <br />Remote Config
                            <br />Cloud Messaging
                            These are just a few examples of what can be done with Firebase. Firebase also provides features like machine learning, A/B testing, crash reporting, and more. Its comprehensive suite of services allows developers to focus on building applications quickly and easily without worrying about infrastructure management.
                        </p>

                    </div>
                    <img alt='#' src={firebase_similar} className="max-w-lg rounded-lg shadow-2xl" />
                </div>
            </div>
            <h1 className='text-center text-3xl font-bold pt-8'>Thankyou</h1>
        </section>
    );
};

export default Blogs;