import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { WebsocketService } from '../websocket/websocket.service';
import { map } from 'rxjs/operators';

const CHAT_URL = "ws://localhost:8080";

export interface Message {
    author: string;
    message: string;
}

@Injectable()
export class ChatService {
    public messages: Subject<Message>;

    constructor(wsService: WebsocketService) {
        this.messages = <Subject<Message>>wsService.connect(CHAT_URL).pipe(map((response: MessageEvent): Message => {
            let data = JSON.parse(response.data);
            return {
                author: data.author,
                message: data.message
            };
        }));
    }
}