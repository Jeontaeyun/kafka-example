const kafka = require("kafka-node");
const KafkaConsumer = kafka.Consumer;
const Offset = kafka.Offset;
const KafkaClient = kafka.KafkaClient;

const kafkaClient = new KafkaClient({ kafkaHost: "localhost:9092" });
const topics = [{ topic: "topic1", partition: 0 }];
const options = {
  autoCommit: false,
  fetchMasWaitMs: 1000,
  fetchMaxBytes: 1024 * 1024,
};

const kafkaConsumer = new KafkaConsumer(kafkaClient, topics, options);
const offset = new Offset(kafkaClient);

kafkaConsumer.on("message", (message) => {
  console.log(message);
});

kafkaConsumer.on("error", (err) => {
  console.log(err);
});
