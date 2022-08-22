import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import ContentCard from 'components/page-components/contents/ContentCard';

export const ContentList = ({ contents }) => {
  return (
    <Box
      mt="25px"
      style={{
        columnCount: 3,
        columnWidth: '460px',
        columnGap: '24px',
      }}
    >
      {contents?.map(content => (
        <ContentCard content={content} key={content.id} />
      ))}
    </Box>
  );
};

ContentList.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.object.isRequired),
};
export default ContentList;
