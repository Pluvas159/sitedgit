import React from 'react';

import Dialog from '../components/dialog';
import Button  from '../components/contactButton';

export default {
  title: 'sited/Dialog',
  component: Dialog,
};

const Template = (args) => <Dialog {...args} >
  <div class="modal-body"><p>Sited, s.r.o.<br/>Hviezdoslavova 193/2<br/>060 01 Kežmarok<br/></p><p>IČO: 50543709<br/>DIČ: 2120400755<br/>IČ DPH: SK2120400755</p><p>Bankové spojenie: Slovenská sporiteľňa, a.s.<br/>IBAN: SK20 0900 0000 0051 2700 7878<br/>SWIFT: GIGASKBX</p><p>Spoločnosť je zapísaná v obchodnom registri Okresného súdu Prešov, oddiel Sro, vložka č. 37977/P</p></div>
</Dialog>;

export const Primary = Template.bind({});
Primary.args = {
visible: true,
  title: "Fakturačné údaje"
};


