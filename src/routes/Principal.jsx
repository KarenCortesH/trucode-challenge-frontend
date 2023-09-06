
import { Link } from 'react-router-dom';
import { VStack, Text } from '@chakra-ui/react';

const Principal = () => {
    return (
        <VStack
            as="nav"
            spacing={4} // Espacio vertical entre los enlaces
            align="center"
            bg="teal.500"
            color="white"
            p={50}
        >
            <Link to="/">
                <Text fontSize="lg" fontWeight="bold" margin={50}>
                    Home
                </Text>
            </Link>
            <Link to="/Subir">
                <Text fontSize="lg" fontWeight="bold" margin={50}>
                    Subir
                </Text>
            </Link>
            <Link to="/Listar">
                <Text fontSize="lg" fontWeight="bold"margin={50}>
                    Listar
                </Text>
            </Link>
        </VStack>
    );
};

export default Principal;
