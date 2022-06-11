import React from 'react';
import WebApps from '../components/webApps';

export default {
  title: 'sited/WebApps',
  component: WebApps,
};

const Template = (args) => <WebApps {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: 'white',
  color: "black",
  padding: "2.5%",
  arrival: "left",
  textAlign: "right",
  hoverTextColor: "white",
  strokeColor: "black",
  contactAlign: "right"
};


