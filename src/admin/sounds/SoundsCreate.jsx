import React from 'react'
import {
    TextInput,
    NumberInput,
    BooleanInput,
    SimpleForm,
    Create,
    ReferenceArrayInput,
    SelectArrayInput,
} from 'react-admin'

const sound = {
    'isNew': true,
    'path': '/sounds/',
}

export default function SoundsCreate(props) {
    return (
        <Create {...props}>
            <SimpleForm redirect="list" defaultValue={sound}>
                <TextInput source="name" />
                <TextInput source="path" />
                <BooleanInput source="isNew" />
                <NumberInput source="order" />
                <ReferenceArrayInput source="tags" reference="tags">
                    <SelectArrayInput optionText="name" />
                </ReferenceArrayInput>
            </SimpleForm>
        </Create>
    )
}