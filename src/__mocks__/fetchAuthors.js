const mockResponse = {
    data: {
        results:[
            {
                name: "Cicero",
                slug: "cicero",
                quoteCount: 9,
                description: "Roman",
                _id:"Q0ST4Mo5byuo"
            },
            {
                name: "Voltaire",
                slug: "voltaire",
                quoteCount: 8,
                description: "French",
                _id:"ZyuVXKFVTZu8"
            }
        ]
    }
};
export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}