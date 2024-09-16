// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const About = ({ about }) => {
//   const { t } = useTranslation();

//   return (
//     <div>
//       <h2>{t('about')}</h2>
//       <p>{about}</p>
//     </div>
//   );
// };

// export default About;

import React from 'react';
import { useTranslation } from 'react-i18next';

const About = ({ about }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('about')}</h2>
      <h3>{about.name}</h3>
      <p>{about.description}</p>
      <img class="profile-picture" src={about.image} alt={`${about.name}'s profile`} />
    </div>
  );
};

export default About;
