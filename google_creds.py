import pathlib

with open("google3ae811da32f286e0.html", "r") as f:
  google_creds_content = f.read()

path = pathlib.Path("./web-build/google3ae811da32f286e0.html")
with open(path, "w") as f:
  f.write(google_creds_content)