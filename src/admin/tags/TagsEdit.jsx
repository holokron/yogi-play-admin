import React from 'react'
import {
    TextInput,
    NumberInput,
    SimpleForm,
    Edit,
} from 'react-admin'

export default function TagsEdit(props) {
    return (
        <Edit {...props}>            
            <SimpleForm redirect="list">
                <TextInput source="name" />
                <TextInput source="slug" />
                <NumberInput source="order" />
            </SimpleForm>
        </Edit>
    )
}