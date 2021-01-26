import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => (
    // <div className='min-h-screen'>
    <Layout>
        <div className='mx-auto mt-8 sm:mt-16'>

            <div className='page-header f-raleway'>CONTACT </div>
            <div className='myUnderline'></div>

            <div className='my-grid-contact'>

                {/* left col (unless mobile) */}
                <div className='md:justify-items-end'>
                    <Image
                        src='/avatar.jpg'
                        alt='me'
                        width={150}
                        height={150} />
                </div>

                {/* -------------------------------------- */}
                {/* right side (unless mobile)*/}
                <div className='text-center text-lg  '>

                    {/* gmail */}
                    <div>
                        <div>Email</div>
                        <a href='mailto: kellikells@gmail.com' target='_blank'>kellikells@gmail.com</a>
                    </div>

                    {/* linkedin  */}
                    <div>
                        <div>Linkedin</div>
                        <a href='https://www.linkedin.com/in/kelli-uyeda/' target='_blank'>linkedin.com/in/kelli-uyeda</a>
                    </div>

                    {/* github */}
                    <div>
                        <div>GitHub</div>
                        <a href='https://github.com/kellikells' target='_blank'>github.com/kellikells</a>
                    </div>



                    {/* <div >
                        <a href='mailto: KelliKells@gmail.com'>
                            <img className='inline-block mb-2 ml-2 w-4' src='/mail.svg' alt='copy' />
                            Default Mail Program
                            </a>

                    </div> */}
                </div>
            </div>


            <style jsx>{`

`}</style>
        </div>
    </Layout>
);

export default Contact;