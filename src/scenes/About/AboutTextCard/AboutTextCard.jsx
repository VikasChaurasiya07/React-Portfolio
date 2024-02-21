import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}> Vikas Chaurasiya </span>
        from <span className={s.purple}> Mumbai, Maharashtra, India.</span>
        <br />
        I specialize in Networking, Cybersecurity, and Web deployment,  {' '}
        <br />
        with expertise in designing secure architectures, developing   {' '}
        <br />
        robust solutions, and deploying web applications.
        <br />
        <br />
        I am currently pursuing a Bachelor of Science in <span className={s.purple}> Computer Science </span>
        <br />
        from TCSC under the University of Mumbai.
        <br />
        <br />
        In addition to coding, I enjoy engaging in diverse activities!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Listening to Music
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
