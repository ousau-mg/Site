import React from 'react';
import { Icon } from '@iconify/react';

export default function Accordion({ title, children }) {
  return (
    <details style={{
      border: '1px solid var(--ifm-color-emphasis-200)',
      borderRadius: '8px',
      marginBottom: '1rem',
      backgroundColor: 'var(--ifm-card-background-color)',
      overflow: 'hidden',
      transition: 'all 0.3s ease'
    }}>
      <summary style={{
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontWeight: 'bold',
        cursor: 'pointer',
        listStyle: 'none',
        backgroundColor: 'rgba(var(--ifm-color-primary-rgb), 0.05)', // Fundo leve com a cor do tema
        color: 'var(--ifm-color-primary)'
      }}>
        <Icon icon="ic:round-calendar-today" width="20" />
        <span style={{ flex: 1 }}>{title}</span>
        <Icon icon="ic:round-keyboard-arrow-down" width="24" className="accordion-icon" />
      </summary>
      <div style={{ 
        padding: '1rem', 
        borderTop: '1px solid var(--ifm-color-emphasis-200)',
        backgroundColor: 'white'
      }}>
        {children}
      </div>
    </details>
  );
}