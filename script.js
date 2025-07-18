function copyGroupLink() {
  const url = 'https://jq.qq.com/?123456789'; // 把这里换成你的真实加群链接
  navigator.clipboard.writeText(url).then(() => {
    alert('群聊链接已复制！');
  }).catch(() => {
    prompt('请手动复制链接：', url);
  });
}