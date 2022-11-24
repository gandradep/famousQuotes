const mockResponse = {
  results: [
    {
      name: 'Cicero',
      slug: 'cicero',
      quoteCount: 9,
      description: 'Roman',
      _id: 'Q0ST4Mo5byuo',
    },
    {
      name: 'Voltaire',
      slug: 'voltaire',
      quoteCount: 8,
      description: 'French',
      _id: 'ZyuVXKFVTZu8',
    },
  ],
};
export default async function mockFetch(url) {
  if (url.startsWith('https://quotable.io/authors')) {
    return {
      ok: true,
      status: 200,
      json: async () => mockResponse,
    };
  }
  throw new Error(`Unhandled request: ${url}`);
}
