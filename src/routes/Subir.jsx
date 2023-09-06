import { Button, FormControl, Input, Center, Stack, Heading, Box, Alert, AlertIcon} from "@chakra-ui/react"
import { useState } from "react";

const Subir = () => {
    const [file, setFile] = useState(undefined);

    const handleFileChange = (event) => {
        console.log('hi there');
        setFile(event.target.files[0]);
    };
    // Función para formatear el número de teléfono
    const formatPhoneNumber = (phone) => {
        let phoneadd = phone;
        if (phone.length < 10) {
            phoneadd = phone + '0';
        }
        const format = /^(\d{3})(\d{3})(\d{4})$/;
        const formattedPhone = phoneadd.replace(format, '$1-$2-$3');
        return formattedPhone;
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        const fileContent = await file.text();

        const rows = fileContent.split('\n');
        const cleanedRows = rows.filter(row => !!row);
        const parsedRows = cleanedRows.map(row => {
            const [name, phone, email] = row.split(',');

            return {
                name,
                phone: formatPhoneNumber(phone),
                email,
            };
        });
        console.log('parsed rows', JSON.stringify(parsedRows, null, 2));

        // consumir el endoint para subir los datos 
        //iterar array
        for (let i = 0; i < parsedRows.length; i++) {
            const element = parsedRows[i];

            const response = await fetch('https://8j5baasof2.execute-api.us-west-2.amazonaws.com/production/tests/trucode/items', {
                method: 'POST',
                body: JSON.stringify(element),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const jsonResponse = await response.json();

            console.log('json response', jsonResponse);
        }
        setIsSuccessAlertVisible(true);
        //console.log('Datos subidos');

    };
    const [isSuccessAlertVisible, setIsSuccessAlertVisible] = useState(false);

    return (
        <Stack as={""} boxShadow="md" bg="whiteAlpha.900" p="20" rounded="md">
            <form onSubmit={handleSubmit}>
                <FormControl width={500} justifyContent="center" isRequired>
                    <Heading margin={4}>Subir Archivos</Heading>
                    <Input  type='file' name="file" width={250} accept=".csv" onChange={handleFileChange} />
                    <Center>
                        <Button margin={4} type="submit" bg="teal.400" color="white" align="center" fontSize="lg" fontWeight="bold">Upload</Button>
                    </Center>
                </FormControl>
                {isSuccessAlertVisible && (
                    <Box mt={4}>
                        <Alert status="success">
                            <AlertIcon />
                            Datos subidos con éxito.
                        </Alert>
                    </Box>)}
            </form>
        </Stack>
    )
}
export default Subir;
