import token from 'slack-token'

export default class MessageHistoryView {
  constructor(el) {
    this.el = el;
    this.historyGetter();
    this.renderHistory();
  }

  historyGetter() {
    const url = `https://slack.com/api/channels.history?
  token=${token}&
  channel=C0W8YH2QP&`;
    return fetch(url, { method: `POST` })
    .then(res => res.json())
    .then(info => {
      debugger;
      console.log(info.messages.text);
    });
  }

  renderHistory() {
    this.el.innerHTML =
    `<h1 class="history-title">History</h1>
    <input calss = "room-history" type='text placeholder='Message'>
    <input class="room-channel" type='text' placeholder='Channel Name'>
    <button class="post-history">Post</button>`;
  }
}
