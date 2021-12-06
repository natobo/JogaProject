import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import { Footer } from '../footer/Footer';
import { Sidenavbar } from '../sidenavbar/Sidenavbar';
import './Chats.css';

const projectID = 'b4eb53a3-2fcd-45a3-ae7f-de2455d86f5a';

export const AppChat = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <>
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        // eslint-disable-next-line react/jsx-props-no-spreading
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
      <Footer />
      <Sidenavbar />
    </>
  );
};
