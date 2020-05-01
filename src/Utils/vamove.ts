const instaTouch = require("instatouch");
import * as fs from "fs";
const request = require("request");
const fetch = require("node-fetch");

let dadosGerais: any = {};
let instaUser = process.argv[2];
let resultado: any = {};
const proxyurl = "https://cors-anywhere.herokuapp.com/";
let BaseURL = "https://angelidev.com/instaphp/addPosts.php";

(async () => {
  let options = {
    count: 20,
    timeout: 32,
  };

  request(
    {
      url: "https://www.instagram.com/" + instaUser + "/?__a=1",
      json: true,
    },
    (err: any, response: any, body: any) => {
      dadosGerais["alias"] = body.graphql.user.username;
      dadosGerais["name"] = body.graphql.user.full_name;
      dadosGerais["profilePicture"] = body.graphql.user.profile_pic_url_hd;
      dadosGerais["description"] = body.graphql.user.biography;
      dadosGerais["numberPosts"] =
        body.graphql.user.edge_owner_to_timeline_media.count;
      dadosGerais["numberFollowers"] = body.graphql.user.edge_followed_by.count;
      dadosGerais["numberFollowing"] = body.graphql.user.edge_follow.count;
    }
  );
  try {
    let user = await instaTouch.user(instaUser, options);
    resultado = Object.assign(dadosGerais, user);
    dadosGerais["data_recolhida"] = new Date()
      .toISOString()
      .replace(/T/, " ")
      .replace(/\..+/, "");
    for (var i = 0; i < dadosGerais.collector.length; i++) {
      dadosGerais.collector[i].takenAtGMT = new Date(
        dadosGerais.collector[i].takenAtGMT
      )
        .toISOString()
        .replace(/T/, " ")
        .replace(/\..+/, "");
      dadosGerais.collector[i]["engagement"] =
        ((dadosGerais.collector[i].likes + dadosGerais.collector[i].comments) /
          dadosGerais.numberFollowers) *
        100;
      dadosGerais.collector[i]["engagement"] = parseFloat(
        dadosGerais.collector[i]["engagement"].toFixed(2)
      );
      if (dadosGerais.collector[i]["isVideo"]) {
        dadosGerais.collector[i]["tipoPost"] = "vid";
      } else {
        dadosGerais.collector[i]["tipoPost"] = "img";
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    await fetch(BaseURL + "?tp=addPosts", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dadosGerais),
    })
      .then((response: { text: () => Promise<any> }) =>
        response.text().then((res) => {
          console.log(res);
        })
      )
      .catch((error: any) => {
        console.log(error);
      });
  }
})();
