const about = () => {
    return (
        <div>
            <section className="section-developers">

                <div className="row about-header u-margin-bottom-big">
                    Development Team
                                </div>

                <div className="row about-content">
                    {/* Component Begin */}
                    <div className="story u-margin-bottom-big">
                        <figure className="story__shape">
                            <img src="../img/coop-headshot-dos.jpg" alt="Developer" className="story__img" />
                            <figcaption class="story__caption">Cooper Pearson</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 class="heading-tertiary u-margin-bottom-small">Full Stack Web Developer</h3>
                            <p>Born and raised in Austin TX, Cooper Pearson is a Full Stack Web Developer, and practicing Software
        Engineer. </p>
                        </div>
                    </div>
                    {/* <!-- Component End --> */}
                </div>
                <div className="row">
                    {/* <!-- Component begin --> */}
                    <div className="story">
                        <figure className="story__shape">
                            <img src="../img/" alt="Daniel Hawn" className="story__img" />
                            <figcaption className="story__caption">Daniel Hawn</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">Full Stack Web Developer</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis quasi molestiae esse
                            accusamus facilis! Sit rem tenetur nobis voluptates quos mollitia ut, quasi at consectetur
                            expedita, adipisci ex. Ipsa voluptas porro sunt veritatis consectetur inventore ea minima esse
        error reiciendis suscipit, nobis accusamus consequuntur totam illo sit? Eveniet, nisi optio.</p>
                        </div>
                    </div>
                    {/* <!-- Component End --> */}
                </div>

            </section>

        </div>
    )
}

export default about