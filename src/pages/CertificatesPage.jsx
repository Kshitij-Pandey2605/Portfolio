import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Certificates from '../sections/Certificates';

const CertificatesPage = ({ theme, toggleTheme }) => {
  return (
    <PageWrapper theme={theme} toggleTheme={toggleTheme}>
      <div className="pt-12 pb-24">
        {/* We can reuse the enhanced Certificates section, just adding it to its own page wrapper */}
        <Certificates />
      </div>
    </PageWrapper>
  );
};

export default CertificatesPage;
