export default function Book(request) {
    const { pathParams, queryParams, site } = request

    console.log('Site: ', site)
    console.log("Path Params: ", pathParams)
    console.log("Query Params: ", queryParams)
    
    return {
        "body": `      
        <!DOCTYPE html>
            <html lang="en">
            <head>
            </head>
            <body>
                <div style="margin: auto; width:50%; border: 3px solid green; padding: 10px">
                    <body>
                        <h1>API!</h1>
                        <div>Path Params: ${pathParams}</div>
                        <div>Query params: ${queryParams}</div>
                    </body>
                </div>
            </body>
            </html>
        `,
        "statusCode": 200,
        "headers": {
            "Cache-control": "no-store",
            "X-Yext-Test": "Example header",
        },
      };
}