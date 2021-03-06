export function PostData(type, userData) {
  //console.log(userData); ID DO USUARIO
  //const proxyurl = "https://cors-anywhere.herokuapp.com/";
  let BaseURL = "https://angelidev.com/instaphp/" + type + ".php";
  return new Promise((resolve, reject) => {
    fetch(/* proxyurl +  */ BaseURL + "?tp=" + type, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) =>
        response.text().then((res) => {
          var jsonBonita = JSON.parse(res);
          console.log(jsonBonita);
          resolve(jsonBonita);
        })
      )
      .catch((error) => {
        reject(error);
      });
  });
}
