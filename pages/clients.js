import Head from 'next/head'

const clients = () => {
    return (
        <div>
            <section className="clients">

                <div class="row client-header u-margin-bottom-big">Clients</div>

                <div className="row feature-row">
                    <div className="feature-box">
                        <img src="../img/BBB-logo.png" alt="" class="feature-box__img" />
                        <h3 className="heading-tertiary u-margin-bottom-small">Bigg Belly BBQ</h3>
                        <p className="feature-box__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab deleniti id quasi quae animi
                            atque.
                        </p>
                    </div>
                    <div className="feature-box">
                        <img src="../img/alexis-bakes-logo.png" alt="" class="feature-box__img" />
                        <h3 className="heading-tertiary u-margin-bottom-small">Alexis Bakes.</h3>
                        <p className="feature-box__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab deleniti id quasi quae animi
                            atque.
                        </p>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default clients