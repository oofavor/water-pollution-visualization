import { Clusterer, Map, Placemark } from '@pbe/react-yandex-maps';
import { useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { WaterBodyData } from './WaterBodyData';

export function RussiaMap() {
  const [data, setData] =
    useState<
      { water_body: string; subject: string; lat: number; lon: number }[]
    >();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [river, setRiver] =useState<{water_body: string, subject: string}>();

  useEffect(() => {
    fetch('http://localhost:5000/api/pollution/coords')
      .then((val) => val.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size='xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{river?.water_body}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <WaterBodyData river={river!} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Map
        defaultState={{ center: [55.75, 37.57], zoom: 4 }}
        style={{
          width: '100%',
          height: '100%',
          aspectRatio: '16 / 9',
          borderRadius: '1rem',
        }}
      >
        <Clusterer
          options={{
            preset: 'islands#invertedVioletClusterIcons',
            groupByCoordinates: false,
          }}
        >
          {data?.map((val,idx) => {
            return (
              <Placemark
              key={`${val.lat}-${val.lon}-${idx}`}
                geometry={[val.lat, val.lon]}
                onClick={() => {
                  setRiver({subject: val.subject, water_body: val.water_body})
                  onOpen()
                }}
              />
            );
          })}
        </Clusterer>
      </Map>
    </>
  );
}
