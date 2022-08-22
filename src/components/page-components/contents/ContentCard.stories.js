import React from 'react';
import ContentCard from 'components/page-components/contents/ContentCard';
import { content } from 'components/page-components/contents/fixture';

export default {
  title: 'ContentCard',
  component: ContentCard,
};

const Template = args => <ContentCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  content,
};
