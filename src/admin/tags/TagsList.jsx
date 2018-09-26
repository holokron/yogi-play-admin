import React from 'react'
import { List, Datagrid, TextField, NumberField } from 'react-admin'

export default function TagsList(props) {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <NumberField source="order" />
                <TextField source="name" />
                <TextField source="slug" />
            </Datagrid>
        </List>
    )
}