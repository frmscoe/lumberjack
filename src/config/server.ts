export const subject = process.env.NATS_SUBJECT ?? 'Lumberjack';
export const server = process.env.NATS_SERVER;
export const elasticHost = process.env.ELASTIC_HOST ?? 'http://localhost:9200';
export const elasticVersion = Number(process.env.ELASTIC_SEARCH_VERSION ?? "8.11");
export default server;