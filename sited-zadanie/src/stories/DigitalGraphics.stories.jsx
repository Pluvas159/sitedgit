import React from 'react';
import DigitalGraphics from '../components/digitalGraphics';

export default {
  title: 'sited/DigitalGraphics',
  component: DigitalGraphics,
};

const Template = (args) => <DigitalGraphics {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: '#1a1a1a',
  color: "white",
  padding: "2.5%",
  arrival: "right",
  textAlign: "left",
  hoverTextColor: "white",
  strokeColor: "grey",
  breakAlign: "left",
  breakColor: "white",
  contactAlign: "left",
};


