import React from 'react'
import { 
    List,
    Datagrid,
    DateField,
    TextField,
    NumberField,
    EditButton,
} from 'react-admin'

export default function SoundsList(props) {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <NumberField source="order" />
                <DateField source="createdAt" showTime />
                <TextField source="name" />
                <TextField source="path" />
                <EditButton />
            </Datagrid>
        </List>
    )
}