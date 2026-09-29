# Enquiry storage setup (Google Sheet)

Enquiries are POSTed by `/api/enquiry` to `ENQUIRY_WEBHOOK_URL`. Until it is set,
the form falls back to WhatsApp (nothing is silently lost or faked).

## 1. Create the Sheet
Google Sheet -> row 1 headers:
`createdAt | name | mobile | email | company | product | category | quantity | message | contactMethod | pageUrl | status`

Select column L (status) from L2 down -> Data > Data validation > Dropdown:
New, Contacted, Quoted, Completed, Cancelled.

## 2. Apps Script
Extensions > Apps Script, paste, Save:

```js
function doPost(e) {
  var d = JSON.parse(e.postData.contents);
  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  sh.appendRow([
    d.createdAt, d.name, "'" + d.mobile, d.email, d.company, d.product,
    d.category, d.quantity, d.message, d.contactMethod, d.pageUrl, d.status || "New"
  ]);
  return ContentService.createTextOutput("ok");
}
```

Deploy > New deployment > Web app > Execute as: Me, Access: Anyone > Deploy.
Copy the Web app URL.

## 3. Vercel
Project > Settings > Environment Variables:
`ENQUIRY_WEBHOOK_URL` = the Web app URL -> Redeploy.
(Local: put it in `.env.local`.)

## Tweak badges / features
Edit `lib/catalog-meta.ts`.
