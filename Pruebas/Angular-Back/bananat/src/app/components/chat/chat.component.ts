import { WebsocketService } from '../../service/websocket/websocket.service';
import { ChatService } from '../../service/chat/chat.service';
import { Component, Input, Output, ViewEncapsulation} from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [WebsocketService, ChatService],
  encapsulation: ViewEncapsulation.None
})
export class ChatComponent {

  @Output() htmlStr: string = "";
  @Output() username: string = "User";
  @Input() message: string = "";

  constructor(private chatService: ChatService, private sanitizer: DomSanitizer, private router:Router) {
    let bananat;
    try {
      bananat = localStorage.getItem('bananat');
      bananat = JSON.parse(bananat);
      this.username = `${bananat['username']}`;
    } catch {
      this.router.navigate(['login']);
    }

    chatService.messages.subscribe(msg => {
      if(bananat['token'] === msg.token)
        this.htmlStr +=  '<li class="sent"><img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="" /><p>' + msg.message + '</p></li>';
      else
        this.htmlStr +=  '<li class="replies"><img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="" /><p>' + msg.message + '</p></li>';
        this.message = '';
        this.autoScroll();
    });
  }

  sendMessage(user, text) {
    if(text !== '\n' && text !== '') {
      let bananat = localStorage.getItem('bananat');
      bananat = JSON.parse(bananat);
      let message = {
        type: "message",
        author: user,
        message: text,
        token: bananat['token']
      }
      this.chatService.messages.next(message);
    }
    else {
      this.message = "";
    }
  }

  logout() {
    localStorage.removeItem('bananat');
    this.router.navigate(['login']);
  }
  
  autoScroll() {
    const chat = document.querySelector('#chat_history');
    chat.scrollTop = chat.scrollHeight;
  }
}
