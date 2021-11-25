import { ChatEngine } from 'react-chat-engine';
import React, { Component } from 'react';
import './Chats.scss';
import './TitleChats.scss';
import perfil1 from './assets_Chats/Perf1.svg';
import perfil2 from './assets_Chats/Perf2.svg';
import perfil3 from './assets_Chats/Perf3.svg';
import perfil4 from './assets_Chats/Perf4.svg';
import perfil5 from './assets_Chats/Perf5.svg';
import perfil6 from './assets_Chats/Perf6.svg';
import perfil7 from './assets_Chats/Perf7.svg';
import perfil8 from './assets_Chats/Perf8.svg';
import perfil9 from './assets_Chats/Perf9.svg';
import archivados from './assets_Chats/Archivados.svg';
import { Footer } from '../footer/Footer';
import { Sidenavbar } from '../sidenavbar/Sidenavbar';

const App = () => {
    return (
        <ChatEngine
            height="100"
            projectID="b4eb53a3-2fcd-45a3-ae7f-de2455d86f5a"
            userName="PruebaChat"
            userSecret="123123"
        />
    );
}
