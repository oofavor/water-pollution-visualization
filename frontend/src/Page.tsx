import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Flex,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react';
import { RussiaMap } from './components/Map';
import { ChartBySubjects } from './components/ChartBySubjects';
import { ChartByYears } from './components/ChartByYears';

export function Main() {
  return (
    <Box mx={[2, 4, 20]} my={[4]}>
      <Flex justify="space-between" gap="1rem">
        <Center>
          <Heading fontSize="lg">Загрязнение вод в России</Heading>
        </Center>
        <Center gap="1rem">
          <Button>
            <Link href="https://data.rcsi.science/data-catalog/datasets/176/#dataset-overview">
              Датасет
            </Link>
          </Button>
        </Center>
      </Flex>
      <Card>
        <CardHeader>
          <Heading>Карта Загрязнение вод России</Heading>
        </CardHeader>
        <CardBody>
          <RussiaMap />
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <Heading>Статистика загрязнения по годам</Heading>
        </CardHeader>
        <CardBody>
          <Text>
            1-й класс — чрезвычайно опасные; 2-й класс — высоко опасные; 3-й
            класс — опасные; 4-й класс — умеренно опасные; 4-й Э —
            «экологический» подкласс 4 класса
          </Text>
        </CardBody>
        <CardFooter>
          <ChartByYears />
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Heading>Статистика загрязнения по областям</Heading>
        </CardHeader>
        <CardBody>
          <ChartBySubjects />
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
        <Flex alignItems='center' justifyContent='center' flexDir='column' gap={5}>
            <Box>
              <Heading size="md">Made in Russia</Heading>
            </Box>
            <Box>
              <Text>
                <Link>ofavor.ru</Link>
              </Text>
            </Box>
        </Flex>
    </Box>
  );
}
