import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComments() {
  const { colorMode } = useColorMode(); // Pega o tema (claro/escuro) do Docusaurus

  return (
    <div style={{ 
      marginTop: '3rem', 
      marginBottom: '3rem', 
      position: 'relative', 
      zIndex: 1 // Garante que ele receba o foco para digitação
    }}>
      <Giscus
        repo="ousau-mg/Site" // Configuração para o repositório da OSAU
        repoId="R_kgDORPr6PQ"
        category="Announcements"
        categoryId="DIC_kwDORPr6Pc4C2YMJ"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode === 'dark' ? 'dark' : 'light'} // Sincroniza com o Docusaurus
        lang="pt"
      />
    </div>
  );
}