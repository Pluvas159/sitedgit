import React from 'react';

import  Footer  from '../components/footer';

export default {
  title: 'sited/Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: '#1a1a1a',
  color: "white",
  secondColor: "lightgrey",
  inlinePadding: "10%",
};
