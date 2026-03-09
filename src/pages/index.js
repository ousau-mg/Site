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
    // Adicionamos 'text--center' para centralizar texto e botões
    <header className={clsx('hero hero--primary', styles.heroBanner, 'text--center')}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons} style={{ display: 'flex', justifyContent: 'center' }}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/SEOS">
            SEOS 📢
          </Link>
        </div>
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

            {/* CONTAINER DOS CARDS CORRIGIDO */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '20px', 
              alignItems: 'stretch',
              marginTop: '2rem' 
            }}>
              <InfoCard 
                iconName="mdi:account-school"
                title="Tutoriais"
                description="Como acessar e utilizar o sistema OuvidorSUS."
                link="/docs/Sistema OuvidorSUS/Operações e tutoriais"
                linkText="Acesse os materiais"
              />

              <InfoCard 
                iconName="mdi:file-document-outline"
                title="Documentos"
                description="Cartilhas, Notas Técnicas e outros documentos de referência para ouvidorias de saúde."
                link="/docs/SEOS/Documentos"
                linkText="Veja aqui"
              />

              <InfoCard 
                iconName="mdi:chart-bar"
                title="Relatórios"
                description="Acompanhe o quantitativo de manifestações, por status e instâncias do SEOS, a cada quadrimestre."
                link="/docs/SEOS/Relatórios"
                linkText="Relatórios"
              />
            </div>
          </section>

          <hr className="margin-vert--xl" />

          {/* SEÇÃO: REGISTRE SUA MANIFESTAÇÃO */}
          <section className="text--center">
            <Heading as="h1">Registre sua manifestação</Heading>
            <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center' }}>
              <a href="https://ouvidor.saude.gov.br/public/form-web/registrar" target="_blank" rel="noopener noreferrer">
                <img src="/img/Registre_Aqui.png" alt="Registre aqui" width="400" />
              </a>
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
                allowFullScreen={true}>
            </iframe>
            </div>

            <Heading as="h1" className="margin-top--lg">BI INTERNO OUSAU - REGIONAIS E MUNICÍPIOS</Heading>
            <div className={styles.iframeContainer}>
              <iframe 
                src="https://app.powerbi.com/groups/8b04718b-896a-484d-9808-8ee50f2c0c43/reports/4ae3c542-60ba-4d30-8210-4a7ad3b5fa51/ReportSection33e20d4e9dbd867142ca?experience=power-bi" 
                width="100%" height="900" title="BI Interno" style={{ border: 0, borderRadius: '8px' }} allowFullScreen={true}>
              </iframe>
            </div>
          </section>

          {/* SEÇÃO: VÍDEO E FEEDBACK */}
          <div className="margin-vert--xl">
            <VideoPlayer url="https://www.youtube.com/watch?v=7PBGVKmX2NQ" 
            width="1000px" 
            height="560px"
            />
            <div style={{ margin: '4rem 0', width: '100%'}}>
               <Feedback />
            </div>
            <GiscusComments />
          </div>
        </div>
      </main>
    </Layout>
  );
}