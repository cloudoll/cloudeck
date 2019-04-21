const arkApps = {
    "": ctx => {
        ctx.body = [];
    },
    "post :appName": ctx => {
        const form = ctx.request.body;
        console.log(ctx.params.appName, form);
        ctx.body = "OK";
    },

};

module.exports = arkApps;