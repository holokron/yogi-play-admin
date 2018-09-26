import React, { Component } from 'react'
import { Admin, Resource } from 'react-admin'
import { AuthProvider, RestProvider } from 'ra-data-firebase-client'
import SoundsList from './admin/sounds/SoundsList'
import SoundsCreate from './admin/sounds/SoundsCreate'
import SoundsEdit from './admin/sounds/SoundsEdit'
import TagsList from './admin/tags/TagsList'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
}

const trackedResources = [
  {
    name: 'sounds',
    isPublic: false,
  },
  {
    name: 'tags',
    isPublic: false,
  },
]

const dataProvider = RestProvider(config, {
  trackedResources,
})

const authProvider = AuthProvider()

export default class App extends Component {
  render() {
    return (
      <Admin authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="sounds" list={SoundsList} create={SoundsCreate} edit={SoundsEdit} />
        <Resource name="tags" list={TagsList} />
      </Admin>
    );
  }
}
