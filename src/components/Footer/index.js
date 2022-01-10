import Contacts from "./Contacts";
import Arddess from "./Address";
import SocialImgsAndLinks from "./SocialImgsAndLinks";
import QuickLinks from "./QuickLinks";

import {addressList, contactsList, quickLinksList, socialImgsAndLinksList} from "./data";

import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <div className={styles.footer_top_container}>
                <div>
                    <h3>Quick Links</h3>
                    {quickLinksList.map(({linkTo, tittleLink}) =>
                        <QuickLinks
                            key={tittleLink}
                            tittleLink={tittleLink}
                            linkTo={linkTo}
                        />)}
                </div>
                <div>
                    {contactsList.map(({tittleContact, viewContact}) =>
                        <Contacts
                            key={tittleContact}
                            tittleContact={tittleContact}
                            viewContact={viewContact}
                        />)}
                </div>
                {addressList.map(({city, address, MonSat}) =>
                    <Arddess
                        key={city}
                        city={city}
                        address={address}
                        MonSat={MonSat}
                    />)}
                <div className={styles.social_block}>
                    <h3>Social</h3>
                    {socialImgsAndLinksList.map(({linkTo, img,id}) =>
                        <SocialImgsAndLinks
                            key={id}
                            linkTo={linkTo}
                            img={img}
                        />)}
                </div>
            </div>
            <div className={styles.footer_bottom_container}>
                <p className={styles.before_img}>2021 Mixlab, Inc.</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
            </div>

        </div>
    );
};

export default Footer;