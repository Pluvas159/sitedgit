import React from 'react';

import  LinksList  from '../components/linksList';

export default {
  title: 'sited/LinksList',
  component: LinksList,
};

const Template = (args) => <LinksList {...args} >
  <li><a href="https://www.facebook.com/sitedsk">Facebook</a></li>
   </LinksList>;
export const Primary = Template.bind({});
Primary.args = {
  textColor: "black",
  hoverTextColor: "red",
  discWidth: "13px",
};
