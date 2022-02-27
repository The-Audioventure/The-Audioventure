insert = ('<meta property="og:title" content="The Audioventure"/>'
'<meta property="og:description" content="An interactive album where YOU get to choose what to listen to and where the story will take you"/>'
'<meta property="og:image" content="https://yahiyahussain.github.io/CYOA-Assets/assets/031_cover_kstr2.png"/>'
'<meta property="og:url" content="https://the-audioventure.github.io/The-Audioventure"/>'
'<meta charset="utf-8"/>')

sep = '<html lang="en">'
path = "web-build/index.html"

with open(path, "r") as f:
  contents = "".join(f.readlines())
  if insert in contents:
    print("insert already in index.html file")
    exit()
  print("insert not in index file yet, adding")
  partitions = contents.partition(sep)
  result = partitions[0] + insert + "".join(partitions[1:])

with open(path, "w") as f:
    f.write(result )
print("added insert successfully")