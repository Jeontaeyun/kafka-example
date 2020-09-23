const kafka = require("kafka-node");
const KeyedMessage = kafka.KeyedMessage;
const KafkaProducer = kafka.Producer;
const kafkaClient = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });
const kafkaProducer = new KafkaProducer(kafkaClient);
const km = new KeyedMessage("key", "message");

const payload = [
  {
    topic: "topic1",
    messages: "hi,there, Hello world",
    partition: 0,
  },
  {
    topic: "topic2",
    messages: ["hello2", "world2", km],
  },
];

kafkaProducer.on("ready", () => {
  kafkaProducer.send(payload, (err, data) => {
    console.log(data);
  });
});
