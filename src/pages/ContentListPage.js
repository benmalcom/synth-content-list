import { Flex, Spinner, Text, usePrevious, VStack } from '@chakra-ui/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import ContentList from 'components/page-components/contents/ContentList/ContentList';
import { useIntersectionObserver } from 'hooks';
import { getContents } from 'services/content';

const ITEMS_PER_PAGE = 20;

export const ContentListPage = () => {
  const loaderRef = useRef(null);
  const isLoadMore = useIntersectionObserver(loaderRef);
  const [contents, setContents] = useState([]);
  const [error, setError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const fetchContents = useCallback(async page => {
    setIsFetching(true);
    try {
      const { data } = await getContents({ limit: ITEMS_PER_PAGE, page });
      setContents(current => current.concat(data));
    } catch (e) {
      setContents([]);
      setError(true);
    } finally {
      setIsFetching(false);
    }
  }, []);

  const prevIsLoadMore = usePrevious(isLoadMore);

  useEffect(() => {
    if (!prevIsLoadMore && isLoadMore && !isFetching) {
      const page = Math.ceil(contents.length / ITEMS_PER_PAGE) + 1;
      fetchContents(page);
    }
  }, [fetchContents, isLoadMore, isFetching, prevIsLoadMore]);

  return (
    <VStack w="full" h="100vh" overflowY="auto" pb="60px">
      <ContentList contents={contents} />
      <Flex ref={loaderRef} w="full" justify="center" align="center" h="60px">
        {isFetching && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="gray.700"
            size="lg"
          />
        )}
      </Flex>
      {error && (
        <Flex flexDirection="column" align="center" justify="center" w="full">
          <Text>
            An Error occurred while fetching contents. Please reload page.
          </Text>
        </Flex>
      )}
      );
    </VStack>
  );
};

export default ContentListPage;
