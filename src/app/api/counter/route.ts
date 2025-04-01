export async function GET(request: Request) {
    // console.log( { method: request.method});
    
    return Response.json({ 
        method: request.method,
         count: 100,
     })
 
 }
export async function POST(request: Request) {
    // console.log( { method: request.method}); 
    
    return Response.json({ 
        method: request.method,
        count: 100,
     })
 
 }