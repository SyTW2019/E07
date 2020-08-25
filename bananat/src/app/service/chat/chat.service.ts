import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { WebsocketService } from '../websocket/websocket.service';
import { map } from 'rxjs/operators';

const CHAT_URL = "ws://<ip-local>:8080";

export interface Message {
    type: string;
    author: string;
    message: string;
    token: string;
}

@Injectable()
export class ChatService {
    public messages: Subject<Message>;

    constructor(wsService: WebsocketService) {
        this.messages = <Subject<Message>>wsService.connect(CHAT_URL).pipe(map((response: MessageEvent): Message => {
            let data = JSON.parse(response.data);
            return {
                type: data.type,
                author: data.author,
                message: data.message,
                token: data.token
            };
        }));
    }
}
