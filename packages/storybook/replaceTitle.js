const fs = require("fs");

fs.readFile("./storybook-static/index.html", (err, data) => {
  if(err) {
    throw new Error(err);
  };

  const newData = data.toString().replace(/\<title\>Webpack App<\/title\>/g, "<title>@lmarcel / core</title>");

  fs.writeFile("./storybook-static/index.html", newData, (err) => {
    if(err) {
      throw new Error(err);
    };
  })
});