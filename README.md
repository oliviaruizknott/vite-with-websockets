# vite-with-websockets

I’m learning Vite and refreshing my knowledge of WebSockets.

Built with [Vite](https://vitejs.dev/) (configured with [React](https://reactjs.org/)).
Using WebSockets (via the [ws npm package](https://www.npmjs.com/package/ws)).
Deployed with [Vercel](https://vercel.com/).

## Setup

1. Clone the project; navigate to it.
2. `npm install`

To start the websocket server:

1. Navigate to the `/server` directory: `cd server`
2. `node index.js`

To start the webserver:

1. Back in the root directory: `npm run dev`

See the project on http://localhost:5173/

Note: To see this locally on my phone, I added `--host` to the `dev` script. ([This post](https://github.com/vitejs/vite/discussions/3396) helped me figure it out, though I think I’m missing something from [the documentation here](https://vitejs.dev/config/server-options.html).) To see it on your own phone, make sure your computer and phone are on the same WiFi, then [find your computer’s local IP address](https://www.avast.com/c-how-to-find-ip-address#topic-3). On your phone, navigate to \<your local ip\>:5173

I have deployed this with Vercel.

- Link for myself: https://vercel.com/oliviaruizknott/vite-with-websockets
- Public link: https://vercel.com/oliviaruizknott/vite-with-websockets/2Yz3SNozVtxYjvWZMnwafNpo3pSZ

# Other notes

- This is where I started: https://vitejs.dev/guide/
- This project is configured to use React.
- I followed [this YouTube tutorial to set up WebSockets](https://www.youtube.com/watch?v=FduLSXEHLng), but I’m a bit skeptical since it’s 2 years old. Are there better, more recent practices I should be using?
