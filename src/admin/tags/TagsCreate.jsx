import React from 'react'
import {
    TextInput,
    NumberInput,
    SimpleForm,
    Create,
} from 'react-admin'

export default function TagsCreate(props) {
    return (
        <Create {...props}>
            <SimpleForm redirect="list">
                <TextInput source="name" />
                <TextInput source="slug" />
                <NumberInput source="order" />
            </SimpleForm>
        </Create>
    )
}