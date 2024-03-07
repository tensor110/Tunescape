# Routes :

- welcome page : '/'
- authentication : 'tunescape.com/auth'
- login :/tunescape.com/login
- sign up :/tunescape.com/signup
- song addition : 'tunescape.com/creatorspace'
- stream songs : 'tunescape.com/stream'


# API :

- GET songs :` sends JSON file of 25 randomly shuffed songs from aws `
> http:localhost:6969/tunescape.com/buffer-stream-to-fetch-song

- POST song Media File : ` expects to receive media file of song media file, alongside artist and song name ` 
> http:localhost:6969/tunescape.com/addsong

- POST song Thumbnail : ` expects to receive media file of song's thumbnail ` 
> http:localhost:6969/tunescape.com/add/thumbnail
