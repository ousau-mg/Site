import React from 'react';
import { Icon } from '@iconify/react';


export default function InfoCard({ iconName, title, description, link, linkText }) {
  return (
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '1.5rem',
      marginBottom: '1.5rem',
      backgroundColor: 'var(--ifm-card-background-color)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.25rem', fontWeight: 'bold' }}>
        {/* Usamos o componente Icon do Iconify e passamos a string iconName */}
        <Icon icon={iconName} width="24" height="24" />
        <span>{title}</span>
      </div>
      <hr style={{ margin: '10px 0' }} />
      <p>{description}</p>
      <a href={link} style={{ fontWeight: '500', color: 'var(--ifm-color-primary)' }}>
        {linkText}
      </a>
    </div>
  );
}