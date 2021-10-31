/*
 * time.js
 */
function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = seconds / 31536000;
  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

const ts = process.argv[2]
const d = new Date(Date.parse(ts));
const since = timeSince(d);
const exact = d.toDateString() + ',  ' + d.toTimeString()
const jsonRes = {
  "items": [
    {
      "type": "default",
      "title": `time since: ${since}`,
    },
    {
      "type": "default",
      "title": exact,
    }
  ]}

console.log(JSON.stringify(jsonRes));
