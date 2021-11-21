const a = [
    {
        key: 'id',
        type: 'uuid',
    },
    {
        key: 'title',
        type: 'string',
    },
    {
        key: 'room',
        type: 'number',
    },
    {
        key: 'igen-e?',
        type: 'boolean',
    },
    {
        key: 'time',
        type: 'object',
        children: [
            { key: 'hour', type: 'number' },
            { key: 'min', type: 'number' },
        ],
    },
    {
        key: 'pics',
        type: 'array',
        children: [
            {
                key: 0,
                type: 'string',
            },
        ],
    },
    {
        key: 'arrayInArray',
        type: 'array',
        children: [
            {
                key: 0,
                type: 'array',
                children: [
                    {
                        key: 0,
                        type: 'number',
                    },
                ],
            },
        ],
    },
    {
        key: 'objInArray',
        type: 'array',
        children: [
            {
                key: 0,
                type: 'object',
                children: [
                    { key: 'qwe', type: 'number' },
                    { key: 'asd', type: 'string' },
                ],
            },
        ],
    },
]

export default a
