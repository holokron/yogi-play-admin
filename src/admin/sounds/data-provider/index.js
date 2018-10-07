function convertArrayToObject(array) {
    const object = {}

    if (array && Array.isArray(array)) {
        array.forEach((item) => {
            object[item] = true
        })
    }

    return object
}

export default function soundsDataProvider(requestHandler) {
    return async (type, resource, params) => {

        if ('sounds' === resource && 'GET_ONE' === type) {
            const result = await requestHandler(type, resource, params)

            return {
                ...result,
                data: {
                    ...result.data,
                    tags: result.data.tags
                        ? Object.keys(result.data.tags)
                        : []
                },
            }
        }

        if ('sounds' === resource && 'GET_LIST' === type) {
            const result = await requestHandler(type, resource, params)

            return {
                ...result,
                data: result.data.map((sound) => {
                    const tags = sound.tags
                        ? Object.keys(sound.tags)
                        : []

                    return {
                        ...sound,
                        tags,
                    }
                })
            }
        }

        if ('sounds' === resource && ['CREATE', 'UPDATE'].includes(type)) {
            const result = await requestHandler(type, resource, {
                ...params,
                data: {
                    ...params.data,
                    tags: convertArrayToObject(params.data.tags)
                },
            })

            return {
                ...result,
                data: {
                    ...result.data,
                    tags: result.data.tags
                        ? Object.keys(result.data.tags)
                        : []
                },
            }
        }

        return requestHandler(type, resource, params)
    }
}