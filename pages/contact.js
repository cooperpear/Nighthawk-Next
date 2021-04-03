import Head from 'next/head'

const contact = () => {
    return (
        <div>
            <section className="contact">

                <h2 className="section-title">Contact</h2>
                <div className="bottom-line"></div>
                <p className="lead">Request a quote, Discuss a project</p>
                <div className="container">
                    <form action="contact.php" method="post">
                        <div className="text-fields">
                            <input type="text" className="text-input name-input" placeholder="Name" name="name" />
                            <input type="text" className="text-input subject-input" placeholder="Subject" name="subject" />
                            <input type="email" className="text-input email-input" placeholder="Email Address" name="email" />
                            <input type="text" className="text-input phone-input" placeholder="Phone Number" name="phone" />
                            <textarea className="text-input message-input" placeholder="Enter Message" name="message"></textarea>
                        </div>
                        <button type="submit" className="btn-dark" name="submit">Submit</button>
                    </form>
                </div>

            </section>
        </div>
    )
}

export default contact