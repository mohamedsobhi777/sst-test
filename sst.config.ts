import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
    config(_input) {
        return {
            name: "my-sst-app",
            region: "us-east-1",
        };
    },
    stacks(app) {
        app.stack(function Site({ stack }) {
            const site = new NextjsSite(stack, "site", {
                environment: {},
            });

            stack.addOutputs({
                SiteUrl: site.url,
            });
        });
    },
} satisfies SSTConfig;
