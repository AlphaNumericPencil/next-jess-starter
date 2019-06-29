import PropTypes from 'prop-types';

const Menu = props => (
    <footer id="footer" className="panel">
        <div className="inner split">
            <div>
                <section>
                    <h2>Magna feugiat sed adipiscing</h2>
                    <p>Nulla consequat, ex ut suscipit rutrum, mi dolor tincidunt erat, et scelerisque turpis ipsum eget quis orci mattis aliquet. Maecenas fringilla et ante at lorem et ipsum. Dolor nulla eu bibendum sapien. Donec non pharetra dui. Nulla consequat, ex ut suscipit rutrum, mi dolor tincidunt erat, et scelerisque turpis ipsum.</p>
                </section>
                <section>
                    <h2>Follow me on ...</h2>
                    <ul className="icons">
                        <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                        <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="#" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
                        <li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
                        <li><a href="#" className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
                    </ul>
                </section>
                <p className="copyright">
                    &copy; Unttled.
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