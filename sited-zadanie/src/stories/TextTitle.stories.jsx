import React from 'react';

import { Title }  from '../components/textDiv/Title';

export default {
  title: 'sited/Title',
  component: Title,
};

const Template = (args) => <Title {...args}>Pekne </Title>;
export const Primary = Template.bind({});
Primary.args = {
  color: "black"
};
