// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const Achievements = ({ achievements }) => {
//   const { t } = useTranslation();

//   return (
//     <div>
//       <h2>{t('achievements')}</h2>
//       <ul>
//         {achievements.map((achievement, index) => (
//           <li key={index}>{achievement}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Achievements;

import React from 'react';
import { useTranslation } from 'react-i18next';

const Achievements = ({ achievements }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('achievements')}</h2>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>
            <strong>{achievement.title}</strong>: {achievement.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
