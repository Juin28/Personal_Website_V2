import React from 'react';
import './Certificates.css'; 
import { certificates } from '../../portfolio';


export default function Certificates() {
  return (
    <section id="certificates" className='section certificates'>
      <h2 className='section__title'>Certificates</h2>
      <div className="certificates-list">
        {certificates.map(certificate => (
          <div className="certificate-card" key={`${certificate.title}-${certificate.organization}`}>
            <h3 className="certificate-title">{certificate.title}</h3>
            <p className="certificate-organization">{certificate.organization}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

