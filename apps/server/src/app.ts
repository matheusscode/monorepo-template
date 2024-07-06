import Fastify from "fastify";

const port = 8080;

const fastify = Fastify({
  logger: true,
});

fastify.get("/", (_, reply) => {
  reply.send({
    hello: "world",
  });
});

fastify.listen({ port }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});

const start = async () => {
  try {
    await fastify.listen({ port });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
