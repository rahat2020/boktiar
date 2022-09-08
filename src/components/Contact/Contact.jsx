import React from 'react';
import './Contact.css';
import address from '../../img/address.png';
import email from '../../img/email.png';
import phone from '../../img/phone.png';
import whatspp from '../../img/whatspp.jpg';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export default function Contact() {
    const formRef = useRef()
    // const [done, setDone] = useState(false)
    const SubThis = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_o9fneok',
            'template_69qsven',
            formRef.current,
            'user_Np4T9qbdgv2Y7ju11odv7')
            // .then((result) => {
            //     console.log(result.text);
            //     setDone(true)
            // }, (error) => {
            //     console.log(error.text);
            // });
            .then(response => {
                if (response.status === 200) {
                    Swal.fire({
                        title: 'Hello there!',
                        text: 'Your email has been sent  to Rahat successfully',
                        icon: 'success'
                    }).then((result) => {
                        console.log(result);
                    })
                }
            })
            .catch(err => {
                // console.log(err.message)
                if (err.status === 200) {
                    Swal.fire({
                        title: 'Hello there!',
                        text: 'fill the form properly',
                        icon: 'error'
                    }).then((result) => {
                        console.log(result);
                    })
                }
            })
    }
    return (
        <div className="c" id="contact">
            <div className="c-bg"></div>
            <div data-aos="fade-up" className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Lest's discussed your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={phone} alt="" className="c-item" />
                            +8801894103578
                        </div>
                        <div className="c-info-item">
                            <img src={whatspp} alt="" className="c-item" />
                            +8801894103578
                        </div>
                        <div className="c-info-item">
                            <img src={email} alt="" className="c-item" />
                            kazimdboktia2020@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={address} alt="" className="c-item" />
                            Chattogram, Bangladesh.
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form action="" ref={formRef} onSubmit={SubThis} className="form-control border-0">
                        <input type="text" placeholder="Name" name="user_name" required className="form-control"/>
                        <input type="text" placeholder="Subject" name="user_subject"  className="form-control"/>
                        <input type="text" placeholder="Email" name="user_email" required className="form-control"/>
                        <textarea id="" cols="20" rows="4" placeholder="message" name="message"  className="form-control"/>
                        <button className="btn-submit">Submit</button>
                        {/* {
                            done && "Thank you for your email"
                        } */}
                    </form>
                </div>
            </div>
        </div>
    )
}
