---
title: Configuring JS script
---

### Script initialization
If you are confident enough with Javascript, you can initialize the Push flow API yourself. Otherwise, use the script constructor on the Feeds page.

#### Pushflow.init() options:
```
var pushflowSettings = {
  failedUrl: "https://failedurl.com",
  allowUrl: "https://allowUrl.com",
  endpoint: "https://edpointUrl.com",
  denyUrls: ["denyUrls.com", "1.denyUrls.com", "2.denyUrls.com"],
  vapidPublic: "vapidpublic",
  p256dh: "string",
  auth: "string",
  feedId: "1",
  subscribeOnPageLoad: false,
  subscribeOnPageLoadDelay: 2000,
  isDebug: false,
  onSuccessCallback: function() {},
  onSubscribedCallback: function() {},
  onFailedCallback: function() {},
  onDeniedCallback: function() {},
  workerPath: "/sw-pushflownet.js",
  clickid: "123456",
  lang: "en",
  reffer: "string",
  t1: "123456",
  t2: "123456",
  t3: "123456",
  t4: "123456",
  t5: "123456",
  a1: "test 12345",
  a2: "test 12345",
  a3: "test 12345",
  a4: "test 12345",
  a5: "test 12345",
  a6: "test 12345",
  a7: "test 12345",
  a8: "test 12345",
  a9: "test 12345",
  a10: "test 12345",
  resolution: "1024x768",
  timezone: "GMT+0800 (Central Indonesia Time)",
  useragent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
  url: "https://example.com/page",
  widgets: {
    isShowRobot: false,
    isShowDialog: false,
    dialogOptions: {
      position: 'top-center',
      isLockBackground: false,
      delay: 300,
      title: "We'd like to show you notifications for the latest updates",
      text: "",
      subscribeButton: "Allow",
      cancelButton: "Cancel",
      icon: "https://yourdomain.com/icon.png",
    },
    isLockBackground: false,
    lockBackgroundOptions: {
      isShowText: true,
      text: ""
    },
    isShowNotification: false,
    showNotificationOptions: {
      title: "Success"
    },
    isShowBubble: false,
    bubbleOptions: {
      text: "New Message Request",
      icon: "https://yourdomain.com/icon.png",
      delay: 500
    }
  }
};
```
