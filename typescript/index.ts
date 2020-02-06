class Message {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  display() {
    console.log(this.message);
  }
}

const message = new Message("Hello, world!");

message.display();
