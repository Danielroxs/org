import "./Footer.css";
import footerbg from "../../assets/footer.png";

const Footer = ()=> {
    return <footer className="footer" style={{ backgroundImage: `url(${footerbg})` }}>
        <div className='redes'>
        <a href='https://www.facebook.com/danny.roxs'> 
            <img src="/img/facebook.png" alt="Facebook"/>
        </a>
        <a href='https://twitter.com/DanRox223'> 
            <img src="/img/twitter.png" alt="twitter" />
        </a>
        <a href='https://www.instagram.com/dan.roxs/'> 
            <img src="/img/instagram.png" alt="instagram" />
        </a>
        </div>
        <img src='/img/Logo.png' alt='org' /> 
        <strong>Desarrollado por Luis D. Rodriguez</strong>
    </footer>
}
export default Footer;