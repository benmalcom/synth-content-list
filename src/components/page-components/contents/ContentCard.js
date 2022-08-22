import {
  AspectRatio,
  Box,
  Flex,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { BiDownload } from 'react-icons/bi';

export const ContentCard = ({ content }) => (
  <Box
    data-testid="content-card"
    role="group"
    position="relative"
    mb="24px"
    _hover={{
      boxShadow:
        '0px 0px 1px rgba(32, 37, 43, 0.1), 0px 4px 8px rgba(51, 91, 130, 0.12)',
      cursor: 'pointer',
    }}
  >
    <AspectRatio ratio={content.width / content.height}>
      <Image
        loading="lazy"
        ratio
        src={content.download_url}
        alt={content.author}
        maxW={{ base: '100%', md: '460px' }}
        _hover={{
          filter: 'brightness(70%)',
        }}
      />
    </AspectRatio>
    <Flex
      justify="space-between"
      align="center"
      position="absolute"
      bottom={0}
      w="full"
      py="10px"
      px="15px"
      display="none"
      _groupHover={{ display: 'flex' }}
    >
      <Text color="#fff" fontWeight={700}>
        {content.author}
      </Text>
      <IconButton aria-label="Download button" icon={<BiDownload />} />
    </Flex>
  </Box>
);

ContentCard.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    download_url: PropTypes.string.isRequired,
  }).isRequired,
};
export default ContentCard;
