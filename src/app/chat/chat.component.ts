import { Component, OnInit,Input, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import {Message} from '../models/message.model';
import {ChatService} from '../services/chat/chat.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages:Message[]=[];
  constructor(private chatService : ChatService) { }
  @ViewChild('chatlist', { read: ElementRef }) chatList: ElementRef;
  @ViewChildren(ChatComponent, { read: ElementRef }) chatItems: QueryList<ChatComponent>;

  ngOnInit() {
    let message=new Message("Welcome to My JenBot","assets/images/jenbot.png",new Date())
    this.messages.push(message)
  }
  ngAfterViewInit() {
    this.chatItems.changes.subscribe(elements => {
      this.scrollToBottom();
    });
  }
  sendMessage(message_content){
    let message=new Message(message_content.value,"assets/images/user.png",new Date())
    this.messages.push(message)
    this.chatService.sendMessage(message_content.value).subscribe(res => {
      let message=new Message(res.result.speech,"assets/images/jenbot.png",res.timestamp);
      this.messages.push(message);
    },err =>{
      let message=new Message(err,"assets/images/jenbot.png",new Date());
    })
  }
  private scrollToBottom(): void {
    try {
      this.chatList.nativeElement.scrollTop = this.chatList.nativeElement.scrollHeight;
    }
    catch (err) {
      console.log('Could not find the "chatList" element.');
    }
  }
}
