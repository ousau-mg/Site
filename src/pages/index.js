import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import VideoPlayer from '@site/src/components/VideoPlayer';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import GiscusComments from '../components/GiscusComments';
import Feedback from '@site/src/components/Feedback';
import InfoCard from '@site/src/components/InfoCard';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, 'text--center')}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Início | ${siteConfig.title}`}
      description="Sistema Estadual de Ouvidorias de Saúde - SEOS/MG">
      <HomepageHeader />

      <main>

        {/* VÍDEO MOVIDO PARA CIMA */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
            <VideoPlayer
              url="https://www.youtube.com/watch?v=7PBGVKmX2NQ"
              width="1000px"
              height="560px"
            />
          </div>

        <div className="container margin-vert--lg">
          {/* SEÇÃO: OUVIDORIA DE SAÚDE */}
          <section>
            <p>
              A Ouvidoria de Saúde é a ponte entre a sociedade e o Governo nas questões relacionadas aos serviços prestados pelo Sistema Único de Saúde (SUS).
            </p>
            <p>
              É responsável por receber, registrar e enviar resposta às reclamações, denúncias, solicitações, sugestões e elogios dos cidadãos sobre consultas, exames, medicamentos, cirurgias, vacinação, vigilância sanitária e epidemiológica, dentre outros assuntos. Acompanha o tratamento da manifestação até a decisão administrativa final das demandas dos usuários.
            </p>
            <p>
              Percorre os municípios mineiros, por meio do programa Ouvidoria Móvel da OGE, levando atendimento presencial à população, aproximando os usuários dos serviços das áreas de atuação desta Ouvidoria.
            </p>
            

            {/* CONTAINER DOS CARDS */}
            <div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '15px',
  alignItems: 'stretch', // Isso já ajuda a manter a altura do card igual
  marginTop: '2rem'
}}>
              <InfoCard
                iconName="mdi:pill"
                title="SEOS"
                description="Base legal, contexto, documentos, paineis e relatórios"
                link="/docs/SEOS"
                linkText="Acessar"
              />
              <InfoCard
                iconName="material-symbols:computer-outline-rounded"
                title="OuvidorSUS"
                description="Adesão e inclusão; operação e tutoriais"
                link="/docs/Sistema OuvidorSUS"
                linkText="Acessar"
              />
              <InfoCard
                iconName="mdi:map-add"
                title="Criar Ouvidoria"
                description="Cartilhas, Guias e Manuais"
                link="/docs/Criar Ouvidoria"
                linkText="Acessar"
              />
              <InfoCard
                iconName="mdi:book-open-variant"
                title="Agenda e capacitações"
                description="Apresentações, Capacitações e Eventos"
                link="/docs/Agenda e capacitações"
                linkText="Acessar"
              />
              <InfoCard
                iconName="arcticons:microsoft-power-bi"
                title="Painéis B.I"
                description="Status de manifestações de ouvidorias de saúde"
                link="/docs/SEOS/Painéis e Relatórios#secao-bi"
                linkText="Acessar"
              />

              
            </div>
          </section>

          {/* SEÇÃO: FEEDBACK E COMENTÁRIOS */}
          <div style={{ margin: '2rem 0', width: '100%' }}>
            <Feedback />
          </div>

          <div style={{ width: '100%', minWidth: '100%' }}>
            <GiscusComments />
          </div>
        </div>
      </main>
    </Layout>
  );
}
