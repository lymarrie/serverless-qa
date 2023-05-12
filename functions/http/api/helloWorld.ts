export default function main(request) {
    const { pathParams, queryParams, site } = request

    console.log('Site: ', site)
    console.log("Path Params: ", pathParams)
    console.log("Query Params: ", queryParams)

    return { 
        body: "Hello World (from names folder)",
        headers: null,
        statusCode: 200
    }
}