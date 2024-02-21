import s from './IntroSection.module.scss';
import vikas from '../../../assets/vikas.png';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
            Namaste! I'm  <b className={s.purple}> Vikas Chaurasiya </b> and I'm an enthusiastic Computer Science student <br />
            with a focus on Web development, Networking, and Cybersecurity. 🚀<br />
            My passion lies in crafting cutting-edge solutions for complex technical challenges.
            </p>
         
            <p>
             With a solid foundation in{' '}
              <i>
                <b className={s.purple}>
                 Computer Science 💻🌐🔒
                </b>
              </i>
              <br />
              I thrive in web development, networking, and cybersecurity domains.
             <br />
              My expertise fuels innovative contributions, driving impactful solutions.
            </p>

            <p>
              As a dedicated and passionate 
              <i>
                <b className={s.purple}> learner </b>
              </i> I am constantly <br /> seeking opportunities to expand my skills and make <br />
                   meaningful contributions to the world of technology.
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="vikas" effect="blur" src={vikas} className={s.vikas} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>Connect </span>with
          me!
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/VikasChaurasiya07"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://instagram.com/mr.__vikas07"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="instagram"
            >
              <FaInstagram />
          </a>
        </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/vikas-chaurasiya-vikas/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
