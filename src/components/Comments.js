import React from 'react';
import { ReactCusdis } from 'react-cusdis';
import { useColorMode } from '@docusaurus/theme-common';

const Comments = () => {
  const { colorMode } = useColorMode();

  return (
    <div className="container" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
      <ReactCusdis
        attrs={{
          host: 'https://cusdis.com',
          appId: '6597b7b0-a78c-4d00-adaf-31eb57405d90',
          pageId: 'home-geral',
          pageTitle: 'Página Inicial',
          theme: colorMode,
	  lang: 'pt-br',

        }}
      />
    </div>
  );
};

export default Comments;