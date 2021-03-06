import React from 'react';

import  Button  from '../components/socialButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'sited/SocialButton',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary = Template.bind({});
Primary.args = {
  color: 'grey',
  hoverColor: 'white',
  type: 'facebook',
  href: "https://www.facebook.com/sitedsk"
};

