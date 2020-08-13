import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import Socket = SocketIOClient.Socket;
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;

  constructor () {
    this.socket = io('http://localhost:4000');
  }

  play() {
    this.socket.emit('play');
  }

  pause() {
    this.socket.emit('pause');
  }

  changeCurrentTime(time: any) {
    this.socket.emit('time', time);
  }

  playAll() {
    return new Observable(observer => {
      this.socket.on('play all', (data) => {
        observer.next(data);
      });
    });
  }

  pauseAll() {
    return new Observable(observer => {
      this.socket.on('pause all', (data) => {
        observer.next(data);
      });
    });
  }

  sendMessage(message: string) {
    this.socket.emit('send message', message);
  }

  getMessage() {
    return new Observable(observer => {
      this.socket.on('send message', (data) => {
        observer.next(data);
      });
    });
  }

  joinChannel(userId: number) {
    this.socket.emit('join', userId);
  }

  joinChannelNotify() {
    return new Observable(observer => {
      this.socket.on('new watcher', (data) => {
        observer.next(data);
      });
    });
  }
}
