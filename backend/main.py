import socketio

sio = socketio.AsyncServer(
    async_mode="asgi",
    cors_allowed_origins=["http://localhost:5173"],
)

app = socketio.ASGIApp(sio)


@sio.event
async def connect(sid, environ):
    print(f"クライアント接続: {sid}")


@sio.event
async def disconnect(sid):
    print(f"クライアント切断: {sid}")
