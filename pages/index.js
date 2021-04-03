import Head from 'next/head'




export default function Home() {
  return (
    <div>
      <Head>
        <title>Nighthawk Studios</title>
        <meta name='keywords' content='Best web developer, Full Stack Web Developer, Best Austin Web Developer' />
      </Head>

      <section className="section-home">
        <div className="vid-overlay">
          <video autoplay muted loop id="video-background" className="vid-overlay">
            <source src="img/timelapseTraffic.mp4" type="video/mp4" />
          </video>
          <div className="row">
            <div className="col-heading">
              <h1 className="heading-primary">
                <span className="heading-primary__1">Nighthawk</span>
                <span className="heading-primary__2">Development</span>
                <span className="heading-primary__3">Studios</span>
              </h1>
            </div>
            <div className="vertical-line"></div>
            <div className="col col-right-menu">
              <div className="right-menu">
                <div className="right-menu__item right-menu__item--1">
                  <a href="./pages/about.html">SERVICES</a>
                </div>
                <div className="right-menu__item right-menu__item--2">
                  <a href="./pages/web-dev.html">SOFTWARE</a>
                </div>
                <div className="right-menu__item right-menu__item--3">
                  <a href="./pages/contact.html">CLIENTS</a>
                </div>
                <div className="right-menu__item right-menu__item--4">
                  <a href="./pages/software.html">ABOUT</a>
                </div>
                <div className="right-menu__item right-menu__item--4">
                  <a href="./pages/software.html">CONTACT</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  )
}
