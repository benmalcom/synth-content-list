import { Flex, Spinner } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import ContentList from 'components/page-components/contents/ContentList';
import { getContents } from 'services/content';

export const ContentListPage = () => {
  const [contents, setContents] = useState(undefined);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchContents = useCallback(() => {
    setIsLoading(true);
    getContents()
      .then(response => {
        setContents(response.data);
      })
      .catch(err => {
        setContents([]);
        setError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    fetchContents();
    return () => {
      setContents(undefined);
      setError(false);
    };
  }, [fetchContents]);

  if (isLoading || !contents)
    return (
      <Flex align="center" justify="center" w="full" h="full" mt={20}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="primary.500"
          size="xl"
        />
      </Flex>
    );

  return (
    <Flex w="full" h="full" direction="column" align="center">
      <ContentList contents={contents} />
    </Flex>
  );
};

export default ContentListPage;
