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
      description="Ouvidoria de Saúde - OGE">
      <HomepageHeader />

      <main>
        <div className="container margin-vert--lg">
          {/* SEÇÃO: OUVIDORIA DE SAÚDE */}
          <section>
            <p>
              A Ouvidoria de Saúde é a ponte entre a sociedade e o Governo nas questões relacionadas aos serviços prestados pelo Sistema Único de Saúde (SUS).
            </p>
            <p>
              É responsável por receber, registrar e enviar resposta às reclamações, denúncias, solicitações, sugestões e elogios dos cidadãos sobre consultas, exames, medicamentos, cirurgias, vacinação, vigilância sanitária e epidemiológica, dentre outros assuntos.
            </p>
            <p>
              Acompanha o tratamento da manifestação até a decisão administrativa final das demandas dos usuários.
            </p>
            <p>
              Percorre os municípios mineiros, por meio do programa Ouvidoria Móvel da OGE, levando atendimento presencial à população, aproximando os usuários dos serviços das áreas de atuação desta Ouvidoria.
            </p>

            {/* CONTAINER DOS CARDS */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              alignItems: 'stretch',
              marginTop: '2rem'
            }}>
              <InfoCard
                iconName="mdi:pill"
                title="SEOS"
                description="alterar."
                link="/docs/SEOS"
                linkText="Acessar"
              />
              <InfoCard
                iconName="material-symbols:computer-outline-rounded"
                title="Sistema OuvidorSUS"
                description="alterar"
                link="/docs/Sistema OuvidorSUS"
                linkText="Acessar"
              />
              <InfoCard
                iconName="mdi:map-add"
                title="Criação de Ouvidoria"
                description="alterar"
                link="/docs/Nova Ouvidoria"
                linkText="Acessar"
              />
              <InfoCard
                iconName="mdi:book-open-variant"
                title="Agenda"
                description="alterar"
                link="/docs/Agenda e capacitações"
                linkText="Acessar"
              />
            </div>
          </section>

          <hr className="margin-vert--xl" />

          {/* SEÇÃO: DASHBOARDS (BI) */}
          <section>
            <Heading as="h1">Observatório OGE/MG</Heading>
            <div className={styles.iframeContainer}>
              <iframe
                src="https://app.powerbi.com/view?r=eyJrIjoiYWU1MTU5NWEtZTY0MS00MzQyLWI3Y2YtNGY4YzhmNTAzMTMyIiwidCI6IjUzMzU2OTg2LTY4OGMtNGNiOS1hZTNhLWU4ZGJmNjkxMWE0MyJ9&pageName=a1b82749ce7d052c043e&pageView=fitToWidth"
                width="100%"
                height="900"
                title="OGE - Observatório"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen={true}
              />
            </div>

            <Heading as="h1" className="margin-top--lg">BI INTERNO OUSAU - REGIONAIS E MUNICÍPIOS</Heading>
            <div className={styles.iframeContainer}>
              <iframe
                src="https://app.powerbi.com/groups/8b04718b-896a-484d-9808-8ee50f2c0c43/reports/4ae3c542-60ba-4d30-8210-4a7ad3b5fa51/ReportSection33e20d4e9dbd867142ca?experience=power-bi"
                width="100%"
                height="900"
                title="BI Interno"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen={true}
              />
            </div>
          </section>

          <hr className="margin-vert--xl" />

          {/* VÍDEO MOVIDO PARA CIMA */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
            <VideoPlayer
              url="https://www.youtube.com/watch?v=7PBGVKmX2NQ"
              width="1000px"
              height="560px"
            />
          </div>

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