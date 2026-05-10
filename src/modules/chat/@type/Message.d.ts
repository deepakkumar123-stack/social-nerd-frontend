declare global {
  type Message = {
    _id: string;
    senderId?: string; // ID of the user who sent the message
    chatroomId?: string; // Optional: ID of the chatroom the message belongs to (for group chats)
    type: "text" | "image" | string; // Type of message: text or image
    content: string; // Message content (text or image URL)
    time: string; // Timestamp when the message was sent
  };
}

export {};
