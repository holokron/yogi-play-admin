import React, { Component } from 'react'
import { Admin, Resource } from 'react-admin'
import { AuthProvider } from 'ra-data-firebase-client'
import dataProvider from './admin/data-provider'
import SoundsList from './admin/sounds/SoundsList'
import SoundsCreate from './admin/sounds/SoundsCreate'
import SoundsEdit from './admin/sounds/SoundsEdit'
import TagsList from './admin/tags/TagsList'
import TagsCreate from './admin/tags/TagsCreate'
import TagsEdit from './admin/tags/TagsEdit'

const authProvider = AuthProvider()

export default class App extends Component {
  render() {
    return (
      <Admin authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="sounds" list={SoundsList} create={SoundsCreate} edit={SoundsEdit} />
        <Resource name="tags" list={TagsList} create={TagsCreate} edit={TagsEdit}/>
      </Admin>
    );
  }
}
