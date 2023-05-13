export default function main(request) {
    const { pathParams, queryParams, site } = request

    let response = {
        message: (`Hello World`),
        pathParams: pathParams,
        queryParams: queryParams,
        site: site
    };

    return {
        body: `${JSON.stringify(response)}`,
        headers: null,
        statusCode: 200
    }
}
