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
    /* Reduzi o padding vertical aqui com inline style para ser rápido, 
       mas o ideal é ajustar no index.module.css */
    <header className={clsx('hero hero--primary', styles.heroBanner, 'text--center')} style={{padding: '2rem 1rem'}}>
      <div className="container">
        <Heading as="h1" className="hero__title" style={{fontSize: '2.5rem'}}>
          {siteConfig.title}
        </Heading>
        {siteConfig.tagline && <p className="hero__subtitle">{siteConfig.tagline}</p>}
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
        <div className="container margin-vert--lg">
          
          {/* SEÇÃO LADO A LADO: TEXTO E VÍDEO */}
          <div className="row" style={{ alignItems: 'center', marginBottom: '2rem' }}>
            <div className="col col--6">
              <Heading as="h2">Ouvidoria de Saúde</Heading>
              <p>
                A Ouvidoria de Saúde é a ponte entre a sociedade e o Governo nas questões relacionadas aos serviços prestados pelo Sistema Único de Saúde (SUS).
              </p>
              <p>
                É responsável por receber reclamações, denúncias e sugestões, acompanhando o tratamento da manifestação até a decisão final. Aproxima os usuários dos serviços através de atendimento presencial e móvel.
              </p>
            </div>
            
            <div className="col col--6">
              <div style={{ width: '100%',height: "340px", borderRadius: '8px', overflow: 'hidden'}}>
                <VideoPlayer
                  url="https://www.youtube.com/watch?v=7PBGVKmX2NQ"
                />
              </div>
            </div>
          </div>

          {/* SEÇÃO: SUBMENUS (CARDS) - Agora aparecem logo após o impacto inicial */}
          <section>
            <Heading as="h3" style={{ textAlign: 'center', marginBottom: '1.5rem' }}></Heading>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', /* Responsivo: quebra linha se a tela for pequena */
              gap: '15px',
              alignItems: 'stretch',
            }}>
              <InfoCard
                iconName="mdi:pill"
                title="SEOS"
                description="Base legal, contexto, documentos, paineis e relatórios"
                link="/seos/docs/SEOS"
                linkText="Acessar"
              />
              <InfoCard
                iconName="material-symbols:computer-outline-rounded"
                title="OuvidorSUS"
                description="Adesão e inclusão; operação e tutoriais"
                link="/seos/docs/Sistema"
                linkText="Acessar"
              />
              <InfoCard
                iconName="mdi:map-add"
                title="Criar Ouvidoria"
                description="Cartilhas, Guias e Manuais"
                link="/seos/docs/Criar"
                linkText="Acessar"
              />
              <InfoCard
                iconName="mdi:book-open-variant"
                title="Agenda e capacitações"
                description="Apresentações, Capacitações e Eventos"
                link="/seos/docs/Agenda"
                linkText="Acessar"
              />
              <InfoCard
                iconName="arcticons:microsoft-power-bi"
                title="Painéis B.I"
                description="Status de manifestações de ouvidorias de saúde"
                link="/seos/docs/SEOS/Paineis#secao-bi"
                linkText="Acessar"
              />
            </div>
          </section>

          {/* SEÇÃO: FEEDBACK E COMENTÁRIOS */}
          <div className="row">
            <div className="col col--12">
               <Feedback />
               <div className="margin-top--lg">
                  <GiscusComments />
               </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}