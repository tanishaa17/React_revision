import axios from 'axios'
import React, { useEffect, useState } from 'react'

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'

// FETCHED THE USERS
const fetchUser = async () => {
    try {
        let res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        // console.log(res.data)
        return res.data;
    } catch (error) {
        console.log("Error : ", error)
    }
}

export const Users = () => {
    let userData = JSON.parse(localStorage.getItem("userData")) || [];

    const [data, setData] = useState(userData);

    // GOT THE USER DATA
    const getData = async () => {
        try {
            const data = await fetchUser()
            // console.log(data)
            setData(data)
        } catch (error) {
            console.log("Error : ", error)
        }
    }

    useEffect(() => {
        getData()
    }, [])


    // MAPPING THE USER DATA IN TABULAR FORM
    return (
        <div>
            <TableContainer>
                <Table variant='striped' colorScheme='teal' maxWidth="75%" margin="auto" border="1px solid grey">

                    < Thead >
                        <Tr>
                            <Th >ID</Th>
                            <Th >name</Th>
                            <Th>Email</Th>
                            <Th >Phone No</Th>
                        </Tr>
                    </Thead>

                    {data.length !== 0 ?

                        data.map((elem) => {
                            return (

                                <Tbody >

                                    <Tr key={elem.id}>
                                        <Td>{elem.id}</Td>
                                        <Td>{elem.name}</Td>
                                        <Td>{elem.email}</Td>
                                        <Td>{elem.phone}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>{elem.id}</Td>
                                        <Td>{elem.name}</Td>
                                        <Td>{elem.email}</Td>
                                        <Td>{elem.phone}</Td>
                                    </Tr>


                                </Tbody>

                            )
                        }) : "No data Available, please add a user...."
                    }
                </Table>
            </TableContainer >
        </div>
    )
}


