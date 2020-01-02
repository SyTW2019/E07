import { WebsocketService } from '../../service/websocket/websocket.service';
import { ChatService } from '../../service/chat/chat.service';
import { Component, ViewChild, ElementRef, Input, Output, ViewEncapsulation} from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { tokenName } from '@angular/compiler';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [WebsocketService, ChatService],
  encapsulation: ViewEncapsulation.None
})
export class ChatComponent {

  @Output() htmlStr: string = "";
  @Input() message: string = "";

  constructor(private chatService: ChatService, private sanitizer: DomSanitizer) {
    chatService.messages.subscribe(msg => {
      console.log("Response from websocket: " + msg.message);
      console.log(localStorage.getItem("token"));
      if(localStorage.getItem("token") === msg.token)
        this.htmlStr +=  '<li class="sent"><img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="" /><p>' + msg.message + '</p></li>';
      else
        this.htmlStr +=  '<li class="replies"><img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="" /><p>' + msg.message + '</p></li>';
      this.message = '';
    });
  }

  sendMessage(user, text) {
    var message = {
      author: user,
      message: text,
      token: localStorage.getItem("token")
    }
    
    console.log("new message from client to websocket: ", message.message);
    this.chatService.messages.next(message);
  }
}
