import * as sst from "@serverless-stack/resources";
import { ApolloApi } from "@serverless-stack/resources";

export default class ApolloStack extends sst.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);

        // const api = new sst.Api(this, "Api", {
        //     routes: {
        //         "GET /": "src/lambda.handler",
        //     },
        // });

        // Create the Apollo API
        const api = new ApolloApi(this, "Api", {
            server: "src/graphql.handler",
        });

        // Show API endpoint in output
        // this.addOutputs({
        //     "ApiEndpoint": api.httpApi.apiEndpoint,
        // });
    }
}
