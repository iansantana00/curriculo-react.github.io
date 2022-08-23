// Barra Lateral fora do conteúdo principal
import Avatar from '../img/react_eu.jpeg'
import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import  '../styles/components/sidebar.sass'


const Sidebar = () => {
  // aside melhor tag para barra lateral
  return( 
    <aside id="sidebar"> 
      <img src={Avatar} alt="Ian Santana" />
      <p>imagem</p>
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer/>
    
      <a href="" className="btn">
          Download currículo
      </a>
  </aside>
  ); 
};

// tag de link para baixar o currículo

export default Sidebar;

