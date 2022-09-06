docker run --rm -v ${PWD}:/local \
    openapitools/openapi-generator-cli:v4.2.2 generate \
    -i ./docs/sample-schema.yml \
    -g typescript-axios \
    -o /local/client/src/api/generated