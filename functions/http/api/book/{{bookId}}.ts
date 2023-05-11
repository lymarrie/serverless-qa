export default function Book(request) {
    const { pathParams, queryParams, site } = request

    console.log('Site: ', site)
    console.log("Path Params: ", pathParams)
    console.log("Query Params: ", queryParams)

    let response = {
        pathParams: pathParams,
        queryParams: queryParams,
        site: site,
        message: "this was returned by the http function"
    };

    
    return {
        "body": `${JSON.stringify(response)}`,
        "statusCode": 200,
        "headers": {
            "Cache-control": "no-store",
            "X-Yext-Test": "Example header",
        },
      };
}