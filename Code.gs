const RECIPIENT = 'a25776711@gmail.com';

function doPost(e) {
  const subject = String(e.parameter.subject || '沁沁回覆了遊戲');
  const body = String(e.parameter.body || '（沒有回覆內容）');

  MailApp.sendEmail({
    to: RECIPIENT,
    subject: subject,
    body: body,
    name: '給沁沁的四年回憶'
  });

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
