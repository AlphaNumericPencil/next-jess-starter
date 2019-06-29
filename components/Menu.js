import PropTypes from 'prop-types';

const Menu = props => (
    <footer id="footer" className="panel">
        <div className="inner split">
            <div>
                <section>
                    <h2>My name is Jess!</h2>
                    <p>I'm a freelance artist with a Bachelors in Fine Arts from the School of Visual Arts. </p> 
                </section>
                <section>
                    <h2>Follow me on ...</h2>
                    <ul className="icons">
                        <li><a href="https://twitter.com/catscantdraw" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://www.facebook.com/catscantdraw" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                        {/* <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li> */}
                        <li><a href="https://www.youtube.com/channel/UCoFtzPbV2UupKhtIxpbEOdQ" className="icon brands fa-youtube"><span className="label">GitHub</span></a></li>
                        <li><a href="https://www.linkedin.com/in/catscantdraw/" className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
                        <li><a href="https://sva.ccnsite.com/catscantdraw" className="icon brands fa-behance"><span className="label">Dribbble</span></a></li>
                        
                    </ul>
                </section>
                <p className="copyright">
                    &copy; 2019
								</p>
            </div>
            <div>
                <section>
                    <h2>Get in touch</h2>
                    <form method="post" action="#">
                        <div className="fields">
                            <div className="field half">
                                <input type="text" name="name" id="name" placeholder="Name" />
                            </div>
                            <div className="field half">
                                <input type="text" name="email" id="email" placeholder="Email" />
                            </div>
                            <div className="field">
                                <textarea name="message" id="message" rows="4" placeholder="Message"></textarea>
                            </div>
                        </div>
                        <ul className="actions">
                            <li><input type="submit" value="Send" className="primary" /></li>
                            <li><input type="reset" value="Reset" /></li>
                        </ul>
                    </form>
                </section>
            </div>
        </div>
    </footer>




)



Menu.propTypes = {
    onToggleMenu: PropTypes.func
};


export default Menu