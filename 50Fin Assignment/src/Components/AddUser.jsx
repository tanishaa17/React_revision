import React, { useEffect, useRef } from 'react'
import { Field, Form, Formik } from 'formik'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button, Input
} from '@chakra-ui/react'
import axios from 'axios';

const validateName = (value) => {
    let error;
    if (!value) {
        error = 'Name is required'
    } else if (!/^[A-Z]{4,20}$/i.test(value)) {
        error = `Please enter a valid name`
    }
    return error
}

const validateEmail = (value) => {
    let error;
    if (!value) {
        error = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

const validateMobile = (value) => {
    let error;
    if (!value) {
        error = 'Mobile no. is required';
    } else if (value >= 9999999999 || value <= 1000000000) {
        error = 'Invalid mobile number';
    }
    return error;
}


export const AddUser = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const mobileRef = useRef(null);


    let data = [];
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            mobile: mobileRef.current.value
        }
        try {
            const res = await axios.post(`https://jsonplaceholder.typicode.com/users`, userData)
            // console.log(res.data);
            data.push(res.data)
            let dataaa = localStorage.setItem("userData", JSON.stringify(data))
            console.log(dataaa)

            nameRef.current.value = null
            emailRef.current.value = null
            mobileRef.current.value = null

        } catch (error) {
            console.log(`Error ${error}`)
        }


    }

    useEffect(() => {
        nameRef.current.focus()
        emailRef.current.focus()
        mobileRef.current.focus()
    }, [])
    return (

        <Formik
            initialValues={{
                name: '',
                email: '',
                mobile: ''
            }}

            onSubmit={(value, actions) => {
                setTimeout(() => {
                    alert(`User successfully added`)
                    actions.setSubmitting(false)
                }, 500)
            }}
        >
            {(props) => (
                <div>
                    <h1>Add new user</h1>
                    <Form onSubmit={handleSubmit} style={{ width: "40%", margin: "auto", marginTop: "25vh" }}>
                        <Field name='name' validate={validateName}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel>Name</FormLabel>
                                    <Input {...field} placeholder='Enter Name' type='text' ref={nameRef} />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>

                        <Field name='email' validate={validateEmail}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.email && form.touched.email}>
                                    <FormLabel>Email</FormLabel>
                                    <Input {...field} placeholder='Enter Email id' type='email' ref={emailRef} />
                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>

                        <Field name='mobile' validate={validateMobile}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.mobile && form.touched.mobile}>
                                    <FormLabel>Mobile No.</FormLabel>
                                    <Input {...field} placeholder='Enter Mobile no.' type='number' ref={mobileRef} />
                                    <FormErrorMessage>{form.errors.mobile}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>

                        <Button
                            mt={4}
                            colorScheme='teal'
                            isLoading={props.isSubmitting}
                            type='submit'
                        >
                            Add
                        </Button>

                    </Form>
                </div>
            )}
        </Formik>
    )
}




