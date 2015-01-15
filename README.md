# meteor-postal

To install:

    meteor add obvio171:postal

To use:

Have your `MAIL_URL` properly set up.

Only admins can send newsletters. Set the `isAdmin` property as true for the users you want to have this power by running this on `meteor mongo`:

    db.users.update({_id: 'adminUserId'}, { $set: { isAdmin: true } });

Then browse to `/postal` on your website and fire away.

## Roadmap

This is the simplest working thing I could come up with, but I'd like to turn this into a complete and robust email automation tool in the future.

Customer.io's feature set would be a great inspiration, they have an awesome product. (No affiliation.)

## Warning

This is the first, "works for me", version. Use it at your own risk, but please do try it and give feedback.

If you find anything broken/confusing, please create an issue for it and I'll try to help you out. (I tend to be high-latency, so please hang tight.)

## Helping out

If you would like to lend a hand answering questions on issues, writing tests, and/or improving the feature set, please say hello!

## License

MIT (LICENSE.txt).
