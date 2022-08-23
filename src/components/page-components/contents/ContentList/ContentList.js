import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ContentCard from 'components/page-components/contents/ContentList/ContentCard';
import { ContentPreviewModal } from 'components/page-components/contents/ContentPreview';

export const ContentList = ({ contents }) => {
  const [selectedContent, setSelectedContent] = useState(null);
  const [isPreviewModalOpen, setPreviewModalOpen] = useState(false);

  const onClickContent = content => {
    setSelectedContent(content);
    setPreviewModalOpen(true);
  };
  return (
    <>
      <ContentPreviewModal
        previewUrl={selectedContent?.download_url}
        isOpen={isPreviewModalOpen}
        onClose={() => setPreviewModalOpen(false)}
        aspectRatio={selectedContent?.width / selectedContent?.height}
      />
      <Box
        css={css`
          column-count: 3;
          column-width: 460px;
          column-gap: 24px;
          margin-top: 25px;
        `}
      >
        {contents?.map(content => (
          <ContentCard
            content={content}
            key={content.id}
            onClickContent={onClickContent}
          />
        ))}
      </Box>{' '}
    </>
  );
};

ContentList.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.object.isRequired),
};
export default ContentList;
