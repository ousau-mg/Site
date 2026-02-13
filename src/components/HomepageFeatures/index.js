import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Por que Manifestar ?',
    Svg: require('@site/static/img/Duvida.svg').default,
    description: (
      <>
        Sua voz é fundamental para a melhoria dos serviços públicos. Ao manifestar, você ajuda a Ouvidoria de Saúde a identificar falhas e propor soluções que beneficiam toda a sociedade.
      </>
    ),
  },
  {
    title: 'O que aconteceu ?',
    Svg: require('@site/static/img/Aconteceu.svg').default,
    description: (
      <>
        Reflita sobre o que aconteceu. Trata-se de uma dificuldade em uma consulta, falta de um medicamento, dúvidas sobre vacinação ou elogio a um atendimento? Ter clareza sobre o fato ajuda no processamento da sua demanda.
      </>
    ),
  },
  {
    title: 'Manifestar',
    Svg: require('@site/static/img/RegistreAqui.svg').default,
    link: 'https://ouvidor.saude.gov.br/public/form-web/registrar',
    description: (
      <>
        Agora que você já sabe a importância e identificou o ocorrido, é hora de oficializar. 
        Clique na imagem para ser redirecionado ao sistema oficial da Prodemge.
      </>
    ),
  },
];


function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* Se existir um link, envolvemos o Svg com a tag <a> */}
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Svg className={styles.featureSvg} role="img" style={{ cursor: 'pointer' }} />
          </a>
        ) : (
          <Svg className={styles.featureSvg} role="img" />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}