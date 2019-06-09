export default function (params, successCallback, failCallback) {
  fetch(`../mock/${params.api}.json`).then((res) => {
    return res.json();
  }).then((res) => {
    successCallback(res);
  });
}