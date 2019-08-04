export default function(name) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = decodeURIComponent(location.search.substr(1)).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}