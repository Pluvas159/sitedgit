import React from 'react';

import  TextDiv   from '../components/textDiv';
import { Break }  from '../components/textDiv/Break';
import { Title }  from '../components/textDiv/Title';


export default {
  title: 'sited/TextDiv',
  component: TextDiv
};

const Template = (args) => <TextDiv {...args}> 
<Title {...args}>Webové aplikácie </Title>
<Break {...args}/>
<p><strong>Vyvíjame softvér</strong> postavený na <strong>webových technológiách</strong>. Najjednoduchším príkladom je bežná <strong>webstránka</strong>. Okrem nich, sú to aj informačné systémy, hry a mnohé iné aplikácie, ktoré Vaša firma potrebuje.</p>
<p>Naše stránky sú založené na redakčnom systéme <strong>WordPress</strong>, ktorý momentálne poháňa <strong>28% všetkých webových stránok na svete</strong> <a href="https://wp.sk/spravy/23-presvedcivych-dovodov-preco-pouzivat-wordpress/" target="_blank">(čítať Prečo práve WordPress).</a> Pri backendových riešeniach zvyčajne používame PHP, ale NodeJS nám tiež nie je neznámy. Naši programátori sa môžu pripojiť k Vášmu tímu, alebo pre Vás vytvoríme kompletné riešenie na mieru.</p>
</TextDiv >;
export const Primary = Template.bind({});
Primary.args = {
  color: "black",
  breakAlign: "left",
  breakWidth: "7%",
  breakHeight: "5px",
  width: "50%",

};
