import { useEffect, useState } from 'react';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Td,
} from '@chakra-ui/react'

interface Props {
  river: { water_body: string; subject: string };
}
export function WaterBodyData(props: Props) {
  const[data,setData]=useState<{period: string, indicator: string,unit:string,value_min:number, value_max: number, hazard_class: string}[]>()
  useEffect(() => {
    fetch(
      `http://localhost:5000/api/pollution/riverPollution?water_body=${props.river.water_body}&subject=${props.river.subject}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return <TableContainer>
  <Table variant='simple' size='sm'>
    <Thead>
      <Tr>
        <Th>Дата</Th>
        <Th>Индикатор</Th>
        <Th>Класс заражения</Th>
        <Th>Измерение</Th>
        <Th isNumeric>Мин. значение</Th>
        <Th isNumeric>Макс. значение</Th>
      </Tr>
    </Thead>
    <Tbody>
      {data?.map((val,idx) => {
return <Tr key={idx}>
        <Td >{val.period}</Td>
        <Td isTruncated>{val.indicator}</Td>
        <Td >{val.hazard_class}</Td>
        <Td isTruncated>{val.unit}</Td>
        <Td isNumeric>{val.value_min}</Td>
        <Td isNumeric>{val.value_max}</Td>
      </Tr>
      })}
    </Tbody>
  </Table>
</TableContainer>
}
