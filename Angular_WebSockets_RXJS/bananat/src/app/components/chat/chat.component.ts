import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../service/websocket/websocket.service';
import { ChatService } from '../../service/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [WebsocketService, ChatService]
})
export class ChatComponent {

  constructor(private chatService: ChatService) {
    chatService.messages.subscribe(msg => {
      console.log("Response from websocket: " + msg);
    });
  }

 

  sendMessage(user, text) {
    var message = {
      author: user,
      message: text
    }

    console.log("new message from client to websocket: ", message);
    var message_screen = document.getElementById("chat");
    message_screen.innerHTML += '<li class="sent"><img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="" /><p>' + message.message + '</p></li>';
    this.chatService.messages.next(message);
  }


}
