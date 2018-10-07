import config from '../firebase-config'
import { RestProvider } from 'ra-data-firebase-client'
import soundsDataProvider from './sounds/data-provider'


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

let dataProvider = RestProvider(config, {
    trackedResources,
})

const dataProviderDecorators = [
    soundsDataProvider,
]

dataProviderDecorators.forEach((dataProviderDecorator) => {
    dataProvider = dataProviderDecorator(dataProvider)
})

export default dataProvider