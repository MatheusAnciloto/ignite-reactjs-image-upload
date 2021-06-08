import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onClose, onToggle } = useDisclosure();

  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  function handleViewImage(url: string) {
    setSelectedImageUrl(url);
    onToggle();
  }

  return (
    <>
      <SimpleGrid columns={3} spacing={'40px'}>
        {cards?.map((data) => (
          <Card 
            key={data.id}
            data={data}
            viewImage={handleViewImage}
          />
        ))}
      </SimpleGrid>

      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={selectedImageUrl}/>
    </>
  );
}
