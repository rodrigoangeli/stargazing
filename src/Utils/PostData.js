export function PostData(type, userData) {
  //console.log(userData); ID DO USUARIO
  let BaseURL = "https://angelidev.com/instaphp/index.php";
  return new Promise((resolve, reject) => {
    fetch(BaseURL + "?tp=" + type, {
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
          resolve(jsonBonita);
        })
      )
      .catch((error) => {
        reject(error);
      });
  });
}
