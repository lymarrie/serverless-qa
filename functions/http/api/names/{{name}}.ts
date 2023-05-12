export default function Name(request) {
    const { pathParams, queryParams, site } = request

    let response = {
        message: (`Hello ${pathParams.name}`),
        pathParams: pathParams,
        queryParams: queryParams,
        site: site
    };

    return {
        body: `${JSON.stringify(response)}`,
        statusCode: 200,
        headers: {
            "Cache-control": "no-store",
            "X-Yext-Test": "Example header",
        },
      };
}