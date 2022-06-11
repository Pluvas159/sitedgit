import React from 'react';
import {ReactComponent as WebApps} from "../assets/web_apps.svg";

import  SVG  from '../components/svgs';

export default {
  title: 'sited/SVG',
  component: SVG,
};

const Template = (args) => <SVG {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  width: "20%",
  height: "20%",
  strokeColor: "white",
  svg: <WebApps />,
};
