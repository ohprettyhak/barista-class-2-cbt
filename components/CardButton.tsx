import { Text } from '@chakra-ui/react';

import Link from '@/components/Link';

export default function CardButton({
  href,
  title,
  description,
  textColor,
  backgroundColor,
  hoverBackgroundColor,
}: CardButtonProps) {
  return (
    <Link
      href={href}
      w="100%"
      h="100%"
      p="4"
      userSelect="none"
      boxShadow="sm"
      borderRadius="8px"
      backgroundColor={backgroundColor}
      transition="all 0.2s ease-in-out"
      _hover={{
        backgroundColor: `${hoverBackgroundColor}`,
      }}
    >
      <Text fontSize="xl" fontWeight="extrabold" color={textColor}>
        {`${title} →`}
      </Text>
      <Text my={1.5} color={textColor}>
        {description}
      </Text>
    </Link>
  );
}

const defaultProps: CardButtonProps = {
  href: '',
  title: '',
  description: '',
  textColor: 'gray.800',
  backgroundColor: 'gray.50',
  hoverBackgroundColor: 'gray.200',
};

type CardButtonProps = {
  href: string;
  title: string;
  description: string;
  textColor?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
};

CardButton.defaultProps = defaultProps;
