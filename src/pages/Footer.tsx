

export function Footer() {

  return (
    <footer id="mu-footer">
      {/* <!-- start footer top --> */}
      <div className="mu-footer-top">
        <div className="container">
          <div className="mu-footer-top-area">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="mu-footer-widget">
                  <h4>Information</h4>
                  <ul>
                    <li><a href="#about-us-id">Beela</a></li>
                    <li><a href="#programmes-id">Our Programmes</a></li>
                    <li><a href="https://www.instagram.com/beela.se/" target="_blank" rel="noreferrer">Stories</a></li>
                    {/* <li><a href="mentoring.html">Take action</a></li> */}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="mu-footer-widget">
                  <h4>Work with us</h4>
                  <ul>
                    {/* <!--  <li><a href="mentoring.html">Mentee</a></li>
                  <li><a href="mentoring.html">Mentor</a></li> --> */}
                    <li><a href="https://www.linkedin.com/posts/beela-se_volunteer-opportunities-activity-6793079881447063552-yOXX" target="_blank" rel="noreferrer">Volunteer</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="mu-footer-widget">

                  <h4>Newsletter</h4>
                  <p>Get the latest update, news &amp; tips.</p>
                  <form className="mu-subscribe-form">
                    {/*   <input type="email" placeholder="Type your Email" /> --> */}
                    <button className="mu-subscribe-btn"><a href="https://beela.us1.list-manage.com/subscribe/post?u=ec3f144b4e769635dffef5601&amp;id=92a05c0895">Subscribe</a></button>

                  </form>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="mu-footer-widget">
                  <h4>Contact</h4>
                  <address>
                    <p>Stockholm, Sweden</p>
                    {/* <!-- <p>Phone: (415) 453-1568 </p> --> */}
                    <a href="mailto:contact@beela.se" target="_blank" rel="noreferrer"><p>Email: contact@beela.se</p></a>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end footer top -->
    <!-- start footer bottom --> */}
      <div className="mu-footer-bottom">
        <div className="container">
          <div className="mu-footer-bottom-area">
            <p>&copy; All Right Reserved. Beela, 2021. </p>
          </div>
        </div>
      </div>
      {/* <!-- end footer bottom --> */}
    </footer>
  );
}