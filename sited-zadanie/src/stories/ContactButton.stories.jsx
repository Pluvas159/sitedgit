import React from 'react';

import  Button  from '../components/contactButton';

export default {
  title: 'sited/ContactButton',
  component: Button,
};

const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  href: "https://www.facebook.com/sitedsk",
  margin: "5px",
  padding: "5px",
  arrival: "right",
};
