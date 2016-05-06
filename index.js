var Notifications = require('notificationsjs');

var notifications = new Notifications({
  closeAfter: 0
});

notifications.push('Hello World');
