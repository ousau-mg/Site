import React from 'react';

export const LinkRow = ({ tema, fonte, desc, url }) => (
  <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    padding: '1rem', 
    borderBottom: '1px solid var(--ifm-color-emphasis-200)',
    gap: '15px' 
  }}>
    <div style={{ flex: 1 }}>
       <small style={{ 
         color: 'var(--ifm-color-primary)', 
         fontWeight: 'bold', 
         display: 'block', 
         marginBottom: '4px' 
       }}>
         {tema}
       </small>
       <strong>{fonte}</strong>
    </div>
    <div style={{ 
      flex: 2, 
      fontSize: '0.9rem', 
      color: 'var(--ifm-color-content-secondary)' 
    }}>
      {desc}
    </div>
    <div style={{ flex: 1, textAlign: 'right' }}>
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ 
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--ifm-color-primary)', 
          color: 'white', 
          padding: '8px 16px',
          borderRadius: '6px',
          fontWeight: '600',
          textDecoration: 'none',
          fontSize: '0.85rem',
          transition: 'opacity 0.2s ease-in-out', 
        }}
        onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'} 
        onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
      >
        Acessar
      </a>
    </div>
  </div>
);