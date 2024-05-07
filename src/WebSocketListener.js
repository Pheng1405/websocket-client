import React, { useEffect } from 'react';
import io from 'socket.io-client';

const WebSocketListener = () => {
const userId = "5873"
  useEffect(() => {
    // Replace 'https://api-dev.gym-core.asurraa.xyz/' with your WebSocket server URL
    //http://127.0.0.1:3720
    // const socket = io('https://api-dev.gym-core.asurraa.xyz/', {
    //   transports: ['websocket'],
    // });
    const socket = io('http://127.0.0.1:3720', {
      transports: ['websocket'],
    });

    // Connect to WebSocket server
    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
      
      // Emit 'auth' event with userId
      socket.emit('auth', { sid: userId });
    });

    // Listen for 'invoice' event
    socket.on('invoice', (data) => {
      console.log('Received invoice event:', data);
      // Handle the 'invoice' event data here
    });

    // Clean up the WebSocket connection when component unmounts
    return () => {
      console.log('Disconnecting from WebSocket server');
      socket.disconnect();
    };
  }, [userId]); // Re-run effect when userId changes

  return <div>WebSocket Listener</div>;
};

export default WebSocketListener;