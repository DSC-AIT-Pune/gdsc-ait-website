import React, {useState} from 'react';

import Instagram from "../styles/images/insta.png";
import YouTube from "../styles/images/yt.png";
import GitHub from "../styles/images/Github.png";
import Facebook from "../styles/images/facebook.png";
import Linkedin from "../styles/images/linkedIn.png";

const socialMediaArray = () => {
    const [socialMedia] = useState([
        { url: "https://www.instagram.com/gdsc_aitpune/", id: "1", src: Instagram },
        { url: "https://www.youtube.com/channel/UCjw9RT5WEKOWSob1f4oiqdQ", id: "2", src: YouTube },
        { url: "https://github.com/DSC-AIT-Pune", id: "3", src: GitHub },
        { url: "https://www.facebook.com/dsc.aitpune/", id: "4", src: Facebook },
        { url: "https://www.linkedin.com/company/dsc-ait/", id: "5", src: Linkedin },
    ]);

    return (
        <div className="socialMediaLink">
            {socialMedia.map((social_Media) => (
                <a href={social_Media.url}>
                    <img
                        src={social_Media.src}
                        alt={social_Media.id}
                        className="social_Media_logo"
                    />
                </a>
            ))}
        </div>
    );
};

export default socialMediaArray;
