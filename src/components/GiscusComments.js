import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComments() {
  const { colorMode } = useColorMode(); // Pega o tema (claro/escuro) do Docusaurus

  return (
    <div style={{ marginTop: '2rem' }}>
      <Giscus
        repo="GabrielAthaidePawlowski/documentacao-osau"
        repoId="COLE_AQUI_O_SEU_REPO_ID" // Pegue no giscus.app
        category="Announcements"
        categoryId="COLE_AQUI_O_SEU_CATEGORY_ID" // Pegue no giscus.app
        mapping="pathname" // Vincula o comentário ao caminho da página
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode === 'dark' ? 'dark' : 'light'} // Sincroniza o tema
        lang="pt" // Deixa a interface em Português
      />
    </div>
  );
}