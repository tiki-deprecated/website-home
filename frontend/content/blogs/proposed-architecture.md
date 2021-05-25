---
title: Proposed Architecture
description: Mar. ’21 — TIKI believes in user-centricity, transparency, and trust. Here’s what we’re building (and why).
author: Mike Audi
updatedAt: '2021-03-02'
category: tech
---
*Note: This is an outline of the proposed software architecture. It does not include any actual logic or data
structures. It is almost certainly missing components and will change.*

*Note: Heads up, I will try my best to keep this readable and not too technical, but if you do get lost, don’t hesitate
to reach out.*

---

TIKI requires three basic parts to function. 1) A killer app that makes it easy for users to make choices about their
data. 2) A safe, secure data pipeline that moves data based on your choices. And 3) a store for businesses to buy that
data.

Simple enough in concept. Your data is on your phone, and it needs to get to the businesses that purchased it safe.

Before we launch into flowcharts and tech specs, we need to cover a few design objectives.

---

Let’s start with that word from above, safe. It’s a tricky one in that people [businesses] often view it in a relative
sense. They use fancy terms like the industry standard, encryption at rest, or ISO whatever. It all just means they do
what everyone else does. That’s a problem when every day, more of your data leaks thanks to some new hack. At TIKI, we
need to do better than that.

If that wasn’t hard enough already, we’re open-sourcing 100% of our code. Talk about difficult; the attackers can read
every line of code.

Seems impossible to build, right? Our approach, don’t. Don’t store user data. If we don’t have your data, it can’t leak.
Or, as I tend to say, “can’t fuck it up if you don’t have it.” And yes, I know that sounds insane. How can a data
company that helps users control their data not have user data? We’ll get there. The objective here is to assume we’ll
get hacked, so don’t store anything we don’t want to leak.

---

The next objective, to favor decentralization and simplicity. Why? Instead of the typical path of launching in the
United States, expanding to Europe, then to Asia, and so on. We went global day 1. It’s hard to deploy software
globally, then add in changing privacy laws. There’s definitely no legal precedence for users selling their data. It’s
not hard to think of a few countries that may not be big fans of the idea. AWS kicked Parlor off their infrastructure.
Telegram won’t even disclose where it operates. User data is serious, and some people play dirty.

To us, this means a) decentralize as much as possible. It’ll work globally and becomes near impossible to ban, block, or
kick-off. b) Keep it simple. Take a less is more approach. We may need portability one day. At the very least, we need
scalable tech that works the same everywhere in the world. Avoid cloud-native systems, serverless functions, closed
source databases, etc. As great as those systems are, TIKI must run the same in Massachusetts as India, Nigeria,
Germany, and the Philippines. TIKI’s [traffic](https://plausible.io/mytiki.com) spans 185 countries.

![Countries](/blog-images/1*78D3HklRZm4_HKYs_7MhUA.png)
*TIKI’s [traffic](https://plausible.io/mytiki.com) spans 185 countries*

As there are three parts to TIKI, we’re going to use three types of components. UI, microservices, and distributed
ledgers.

![Component Icons](/blog-images/1*QSpFRrpEAXbC456ZOW-JGw.png)

First, users have to be able to create accounts. Typically, you’d think username & hashed password. Well, not when our
security principal is don’t store sensitive things. Weak or stolen credentials cause 81% of hacking incidents.

![Login Flow](/blog-images/1*WDTVxRYf_lkDGhvoteXqHA.png)

Instead, we send the user an email with a “magic link” to either log them in or create a new account. Email, not SMS
because of SIM swapping attacks. Given a users’ verified identity, if they’re logging back in, we load their locally
stored blockchain id and decrypt their settings. If they’re a first-time user, we generate for them a new id and
encryption keys. If a user logs back in on a new phone, they can load their existing keys and id, think QR code.

Sensitive information is encrypted and stored locally on your phone. We store non-sensitive settings with end-to-end
encryption on our blockchain (even we can’t read it). That way, when you get a new phone, you don’t have to set
everything back up. Then we use a very simple identity microservice to issue the “magic links.” This system checks our
three design boxes, 1) don’t store user data, 2) decentralization, and 3) simplicity.

Keeping sensitive information on your phone protects against our cloud getting hacked, but what if their email is
hacked? Or if they lose their phone? That is where MFA comes in. As with all security, it comes at a balance of
usability. For example, if the app were to log you out after 60 seconds of inactivity, like a banking app, all those
email links would sure be annoying.

![Sensitive Flow](/blog-images/1*-7HK-bgOAOylT2VV1wRWug.png)

There are three types of authentication. Something you know, knowledge. Something you have, possession. Something you
are, inherence. The most secure systems use a combination of all 3. TIKI requires 2 to log in. Knowledge of your email
password and possession of your encryption keys. That’s a lot for everyday usage. For infrequent but more sensitive
actions, like changing payment settings, we use a third factor. Where supported, biometrics (Face ID or fingerprint) is
preferred. They add an inherence factor. Suppose a phone doesn’t support these functions. We send a push notification (
not a text message) to the phone, with a single-use code verifying possession of the phone. In the event of a lost
phone, we use a combination of short-lived JWTs and a deny-list to lock the account temporarily.

---

All right, on to the fun stuff! We often talk about the TIKI app having three main features, see, control, and monetize
your data. User data is in apps like Twitter, TikTok, and Google. The first step after creating a TIKI account is to
link a supported app integration.

![Integration Flow](/blog-images/1*PXAf8kVbo3UzEvOYSnqizA.png)

There are two parts to app integration. The first step is user authentication. Where using TIKI, a user logs into their
desired app account, resulting in an access token. The token is encrypted and only ever stored locally on the phone. The
second step is to periodically, using the access token, load the user data into a temporary and encrypted local cache.
Now, the TIKI app can show the user can see the data collected on them.

We’ll be building the first several integrations directly into the app for launch. A later step will be to allow
developers and companies to submit their own integrations (maybe even get paid for it 🤭). The app will dynamically load
these integrations as needed.

---

Central to the TIKI is the ability to control your data. Control is not a one size fits all approach; with TIKI, you
decide. Here’s an example, did you know that you can disable facial recognition tracking in Facebook? Or stop
third-party advertisers from giving IG more data on you? It’s all buried down deep and confusing. We sort it all out and
make it easy to understand. This way, you can decide if Facebook’s auto-tagging feature is worth allowing them to track
your face.

![Content Flow](/blog-images/1*sMsM2BPASgMY6m7mfHDnYA.png)

Things change quickly, and TIKI users shouldn’t have to wait for app updates to control their privacy. Using a headless
CMS with Jamstack, our team can publish to a global CDN up-to-date content. The mobile app resolves these changes
against the local database, displaying what makes sense given their preferences. With this approach, users can even
apply a single setting across multiple apps. I don’t know about you, but I have 80 apps on my phone. One setting for
them all would be nice. As TIKI scales, a hybrid crowdsourcing model becomes highly likely. It would enable support for
a wider range of apps, faster. It is important to note when talking about content; our goal is to take up the least
amount of users’ time necessary.

---

Now, the money. Remember, the objectives are safety, decentralization, and simplicity. All right, so how do we sell user
data without storing any user data? Step 1 is to anonymize the user’s data by calculating the desired insight locally.
Here’s an example: a t-shirt business wants to know if people prefer red or blue shirts. TIKI would run an algorithm, we
call them privacy models, on each user’s phone. It could use their credit card data, tweets, and whatever else to
calculate their preference. Sensitive data might get used, but the resulting insight is not. Keep in mind, this is all
still on the user’s phone, in their pocket, nice and safe.

![Model Flow](/blog-images/1*kxlS8zRpCForrH32VIco7g.png)

As these models run, the phone builds a data graph of connected insights. Next, the app checks if there are enough other
similar users for each insight type and the user’s sharing preference. Why? For user’s to get paid for their data, it
requires a list of who contributed to which insight. Not their specific answer, just which insight type. Also, not their
email addresses, just their blockchain id (often called a wallet id).

So, take the shirt example from earlier. If you have a table of shirt color preferences, but only one id, then you know
whom the answers belong to. Now take a table of shirt color preferences and 100 ids; there’s no way to know who’s who.

Once we’ve locally resolved a safe version of the data graph, we’re ready to sync. At this point, it’s also safe to
delete the temporary cache of user data. The app pushes the data graph to TIKI’s data service, where it is combined with
other user data, dereferencing it from the original source. It’s added to the larger data graph, and the transaction
logged on the blockchain.

At this point, you can see how a massive, powerful data graph is coming together for businesses to search, query, and
trigger off. Like the app integrations, we’ll be building the first set of privacy models into the app for launch.
Ultimately, we intend to allow businesses to submit their own models to run.

---

This brings us to the last piece, the web portal for businesses to purchase data. It looks far more complicated than it
is. It’s a simple website that combines a couple of different functions. The intent is to make it easy for businesses to
buy exactly the data needed in the format desired.

![Portal Flow](/blog-images/1*PtSuelEwY5FawVvL6K994Q.png)

The format is generally one of two types. Companies either want to buy pre-made reports ready to go with the information
critical to them or are well-versed in data and want the raw information to slice and dice. In either pattern, as data
is queried, transactions are added to the blockchain and tokens issued to users.

Outside of purchasing data, it’s worth covering the buyer registration process. With TIKI, users choose who can or can’t
buy their data. To this end, businesses must apply and document their intended use case for the data. Approved
businesses will be required to follow usage guidelines. Similar to the App Store, enforced by TIKI, and designed to
protect users first.

---

So, that’s the plan! People say we’re crazy for putting it all out there. At TIKI, transparency, trust, and
user-centricity come first.

If you have any questions, ideas, or want to talk tech, join us on [Discord](https://discord.com/invite/evjYQq48Be)
, [Signal](https://signal.group/#CjQKIA66Eq2VHecpcCd-cu-dziozMRSH3EuQdcZJNyMOYNi5EhC0coWtjWzKQ1dDKEjMqhkP)
, [Telegram](https://t.me/mytikiapp), or [Reddit](https://www.reddit.com/r/mytiki)!

Together, we will take back control of our data  
Mike Audi  
Founder @ TIKI  
[mike@mytiki.com](mailto:mike@mytiki.com)
