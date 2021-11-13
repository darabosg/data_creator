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
        key: 'igene',
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
                type: 'string',
            },
        ],
    },
    {
        key: 'arrayInArray',
        type: 'array',
        children: [
            {
                type: 'array',
                children: [
                    {
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