import React from 'react';
import { Icon } from '@iconify/react';

// Adicionamos 'download' aqui nas propriedades
export default function InfoCard({ iconName, title, description, link, linkText, download }) {
  return (
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '1.5rem',
      marginBottom: '1.5rem',
      backgroundColor: 'var(--ifm-card-background-color)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.25rem', fontWeight: 'bold' }}>
        <Icon icon={iconName} width="24" height="24" />
        <span>{title}</span>
      </div>
      <hr style={{ margin: '10px 0' }} />
      <p>{description}</p>
      
      <a 
  href={link} 
  download={download} 
  style={{ 
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    backgroundColor: 'var(--ifm-color-primary)', // Usa a cor principal do seu tema
    color: 'white',
    padding: '10px 20px',
    borderRadius: '6px',
    fontWeight: '600',
    textDecoration: 'none',
    marginTop: '1rem',
    transition: 'opacity 0.2s',
  }}
  onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
  onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
>
  {linkText}
</a>
    </div>
  );
}