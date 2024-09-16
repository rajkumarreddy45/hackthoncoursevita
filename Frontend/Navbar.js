import React from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = ({ setLang }) => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul>
        <li><a href="#about">{t('about')}</a></li>
        <li><a href="#projects">{t('projects')}</a></li>
        <li><a href="#achievements">{t('achievements')}</a></li>
        <li><a href="#contact">{t('contact')}</a></li>
        <li>
          <select onChange={(e) => setLang(e.target.value)} defaultValue="en">
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="te">తెలుగు</option>
            <option value="ta">தமிழ்</option>
            <option value="kn">ಕನ್ನಡ</option>
          </select>
        </li>
      </ul>
      <style jsx>{`
        nav {
          background: #333;
          padding: 10px;
          color: white;
        }
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: space-around;
        }
        li {
          margin: 0;
        }
        a {
          color: white;
          text-decoration: none;
        }
        select {
          background: #555;
          color: white;
          border: none;
          padding: 5px;
          border-radius: 5px;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
