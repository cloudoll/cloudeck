# cloudeck
Cloudeck is a registry for cloudark serivces.

## API

### Register new application instance

POST /ark/apps/:appName

### Send application instance heartbeat

PUT /ark/apps/:appName/:instanceID

### Query for all instances

GET /ark/apps

通常我们不会把所有的服务给你，如果不指定参数，最多给 100 个服务列表。

我们相信，你的一个服务消费者最多依赖 100 个服务，如果你知道你的服务，请加上查询参数。