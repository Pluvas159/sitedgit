import React from 'react';

import  ContactForm  from '../components/contactForm';

export default {
  title: 'sited/ContactForm',
  component: ContactForm,
};

const Template = (args) => <ContactForm {...args} />;
export const Primary = Template.bind({});
Primary.args = {
};
