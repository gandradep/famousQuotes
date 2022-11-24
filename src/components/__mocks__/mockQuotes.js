const mockResponse = {   
  results:[
      {
          content: 'quote 1',
          _id:"Q0ST4Mo5byuo"
      },
      {
        content: 'quote 2',
          _id:"ZyuVXKFVTZu8"
      }
  ]    
};
export default async function mockFetch(url) {
if(url.startsWith('https://quotable.io/quotes?author') ) {
return {
  ok: true,
  status: 200,
  json: async () => mockResponse,
};
}

throw new Error(`Unhandled request: ${url}`);        
}