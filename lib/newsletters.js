Meteor.Schema = Meteor.Schema || {};

Meteor.Schema.Newsletters = new SimpleSchema({
  from: {
    type: String,
    label: 'From:'
  },
  to: {
    type: String,
    label: 'To:',
    optional: true
  },
  subject: {
    type: String,
    label: 'Subject:'
  },
  text: {
    type: String,
    label: 'Text body:'
  }
});

if (Meteor.isServer) {
  Meteor.methods({
    sendNewsletter: function (document) {
      var caller = Meteor.users.findOne(this.userId);
      if (caller && caller.isAdmin) {
        if (document.to) {
          Email.send(document);
        } else {
          var verifiedUsers = Meteor.users.find({ 'emails.0.verified': true}).
            fetch();
          var emails = _(verifiedUsers).map(function (user) {
            return user.emails[0].address;
          });

          _(emails).each(function (email) {
            var options = _({}).extend(document, { to: email });
            Email.send(options);
          });
        }
      }
    }
  });
}
