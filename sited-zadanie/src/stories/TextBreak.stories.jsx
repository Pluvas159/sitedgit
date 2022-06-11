import React from 'react';

import { Break }  from '../components/textDiv/Break';

export default {
  title: 'sited/Break',
  component: Break,
};

const Template = (args) => <Break {...args}/>;
export const Primary = Template.bind({});
Primary.args = {
  align: "right",
  width: "7%",
  height: "5px",
  color: "white",
};
