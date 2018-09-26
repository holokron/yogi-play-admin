import React from 'react'
import {
    TextInput,
    NumberInput,
    BooleanInput,
    SimpleForm,
    Edit,
} from 'react-admin'

export default function SoundsEdit(props) {
    return (
        <Edit {...props}>
            <SimpleForm redirect="list">
                <TextInput source="name" />
                <TextInput source="path" />
                <BooleanInput source="isNew" />
                <NumberInput source="order" />
            </SimpleForm>
        </Edit>
    )
}