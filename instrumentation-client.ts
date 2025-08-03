import { initBotId } from 'botid/client/core';

initBotId({
  protect: [
    {
      path: '/api/signup',
      method: 'POST',
    },
  ],
})
