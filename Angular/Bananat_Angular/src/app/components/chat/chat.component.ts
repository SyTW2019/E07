import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message: string;

  constructor(private chatService: ChatService){}

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  
  ngOnInit() {
  }

}
