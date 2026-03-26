import React from 'react';
import { Icon } from '@iconify/react';

export default function InfoCard({ iconName, title, description, link, linkText, download }) {
  return (
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '1.5rem',
      backgroundColor: 'var(--ifm-card-background-color)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%', 
      minHeight: '280px', // Isso garante que todos tenham o mesmo tamanho mínimo
      boxSizing: 'border-box'
    }}>
      {/* Topo do Card */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.25rem', fontWeight: 'bold' }}>
        <Icon icon={iconName} width="24" height="24" />
        <span>{title}</span>
      </div>
      
      <hr style={{ margin: '10px 0' }} />
      
      {/* Conteúdo: flex 1 empurra o que estiver abaixo para o final */}
      <div style={{ flex: 1 }}>
        <p style={{ margin: 0 }}>{description}</p>
      </div>
      
      {/* Botão posicionado no final */}
      <div style={{ marginTop: '1.5rem' }}>
        <a 
          href={link} 
          download={download} 
          style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            backgroundColor: '#0d2b45', 
            color: 'white',
            padding: '10px 20px',
            borderRadius: '6px',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
            width: 'fit-content'
          }}
          onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
        >
          {linkText}
        </a>
      </div>
    </div>
  );
}