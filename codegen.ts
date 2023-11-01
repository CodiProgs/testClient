import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: 'https://testserver-production-2d01.up.railway.app/graphql',
    documents: ['src/graphql/**/*.ts'],
    generates: {
        './src/gql/graphql.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ]
        },
    }
}

export default config
