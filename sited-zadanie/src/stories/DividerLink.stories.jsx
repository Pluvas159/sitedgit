import React from 'react';
import DividerLink from '../components/dividerLink';

export default {
  title: 'sited/DividerLink',
  component: DividerLink,
};

const Template = (args) => <DividerLink {...args} >
  <img src = "https://sited.sk/images/beer.svg"/>
</DividerLink >;

export const Primary = Template.bind({});
Primary.args = {
  width: "5rem",
  height: "5rem",

};


