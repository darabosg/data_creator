const a = [
    {
        key: 'id',
        type: 'uuid',
        value: '',
    },
    {
        key: 'title',
        type: 'string',
        value: '',
    },
    {
        key: 'room',
        type: 'number',
        value: Number,
    },
    {
        key: 'igene',
        type: 'boolean',
        value: false,
    },
    {
        key: 'time',
        type: 'object',
        children: [
            { key: 'hour', type: 'number', value: Number },
            { key: 'min', type: 'number', value: Number },
        ],
    },
    {
        key: 'pics',
        type: 'array',
        children: [
            {
                type: 'string',
                value: '',
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
                        value: Number,
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
                    { key: 'qwe', type: 'number', value: Number },
                    { key: 'asd', type: 'string', value: '' },
                ],
            },
        ],
    },
]

export default a