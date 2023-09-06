import { useEffect, useState } from "react"
import { TableContainer, Heading, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
const API_URL = "https://8j5baasof2.execute-api.us-west-2.amazonaws.com/production/tests/trucode/items";

const Listar = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setData(data.items))
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <Heading margin={4}>Lista</Heading>
            <TableContainer>
                <Table variant='striped'>
                    <Thead bg="teal.400">
                        <Tr>
                            <Th fontSize="sm" fontWeight="bold" color="white" textColor="white">Name</Th>
                            <Th fontSize="sm" fontWeight="bold" color="white" textColor="white">Phone</Th>
                            <Th fontSize="sm" fontWeight="bold" color="white" textColor="white">Email</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map((item) => (
                            <Tr key={item.id}>
                                <Td>{item.name}</Td>
                                <Td>{item.phone}</Td>
                                <Td>{item.email}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>

        </>
    );
};

export default Listar;
