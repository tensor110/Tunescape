import azapi

API = azapi.AZlyrics('google', accuracy=0.5)

API.artist = 'Eminem'
API.title = 'Venom'

API.getLyrics(save=True, ext='lrc')

print(API.lyrics)

# Correct Artist and Title are updated from webpage
print(API.title, API.artist)