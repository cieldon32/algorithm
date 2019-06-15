export default function (name, successCallback, failCallback) {
  fetch(`./data/${name}.js`).then((res) => {
    return res.text();
  }).then((res) => {
    successCallback(res);
  });
}