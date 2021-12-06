import { ChatEngine } from 'react-chat-engine';
import React, { Component } from 'react';
import ChatFeed from './components/ChatFeed';
import './Chats.css';
import './TitleChats.scss';
import { Footer } from '../footer/Footer';
import { Sidenavbar } from '../sidenavbar/Sidenavbar';

const Chats = () => (
  <>
    <ChatEngine
      height="100"
      projectID="b4eb53a3-2fcd-45a3-ae7f-de2455d86f5a"
      userName="PruebaChat"
      userSecret="123123"
      // eslint-disable-next-line react/jsx-props-no-spreading
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
    <Footer />
    <Sidenavbar />
  </>
);

export default Chats;
