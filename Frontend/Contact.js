import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = ({ email, phoneNumber, message }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('contact')}</h2>
      <p>{t('email')}: {email}</p>
      <p>{t('phone')}: {phoneNumber}</p>
      <p>{t('message')}: {message}</p>
    </div>
  );
};

export default Contact;
