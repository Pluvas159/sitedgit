import React from 'react';
import Multimedia from '../components/multimedia';

export default {
  title: 'sited/Multimedia',
  component: Multimedia,
};

const Template = (args) => <Multimedia {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: 'white',
  color: "black",
  padding: "2.5%",
  arrival: "left",
  textAlign: "right",
  hoverTextColor: "white",
  strokeColor: "grey",
  contactAlign: "right"
};


