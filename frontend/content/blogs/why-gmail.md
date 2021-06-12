---
title: Why Gmail?
description: "You’re not going to believe what Gmail knows about you. I didn’t." 
img: /blog-images/why-gmail.jpg
alt: "Getting hold of your emails can be pure gold for Gmail’s profiling"
author: Anna Stoilova
updatedAt: '2021-05-24'
category: product
---

<h1>Why Gmail?</h1>
<h3>You’re not going to believe what Gmail knows about you. I didn’t.</h3>
<p>At first, I wasn’t convinced that <a href = "https://medium.com/mytiki/product-roadmap-update-may-21-8ff81e509d26"> linking your Gmail account should be the first feature that we build in the app. </a> We had an internal chat about how a Gmail account is likely to have the most data on a person, more than any other (maybe even more than Facebook?). We agreed, we were going to do the “add your Gmail account” feature for the 1.0 release. I rolled up my sleeves, and got to work on this feature. </p>
<p>What happened next, made me 10000% convinced that this integration is vital to the app. </p>

<p>Mike and I sat down to talk about this, and he showed me all the data that Google (including Gmail) has on him (<a href="https://takeout.google.com/">check your Google data out</a>). After a little bit of digging around, and navigating through the technical barriers that would make any non-technical person cringe, what we saw was rather revealing.</p>
<p> In the various <em>json</em> files (I know, technical, right?), we found a crazy amount of data that Gmail was storing. We discovered that… </p>

<h2>What Gmail has on you</h2>
<p>Gmail has the content of the emails you’ve received, and sent throughout the years. It knows when you read your emails, and where you are when you open them, and how many times you’ve opened each email. It knows how you’ve categorised your emails, which emails you’ve ignored, which emails you’ve moved to SPAM, which emails you tend to reply the most. Your Gmail app knows the exact words you’ve searched for in your Gmail app, your personal data like your phone number, your name and profile picture… </p>
<p>The list goes on, and it includes lots of other information on who’s sent you emails, where from, and how often.</p>

<p>It can get worse though. <strong>Gmail can use this data to create a profile about who you are, what your interests are, and how you’re likely to behave, to a level of precision that’s difficult to imagine.</strong> </p>
<p>For example, do you know that little handy reminder that is telling you to follow up with a person that hasn’t responded to your email yet? Seems innocent (and very handy), but the reality of it is that Gmail’s algorithms are constantly working on analyzing your email activity in real-time.</p>

![Sent 6 days ago. Follow up?](/blog-images/screenshot-2021-05-24-at-01.59.20.png)

> Gmail has the content of the emails you’ve received, and sent throughout the years. It knows when you read your emails, where you are when you open them, and how many times you’ve opened each email.</p>

<p>Seeing and realising the depth of it all put me in a bit of a shock.</p>

![Download data](/blog-images/screenshot-2021-05-24-at-13.49.31.png)

<p>At first, I wanted to cry. And then… then I came back to my senses. I knew that we were starting something big here. We had to release the ability to add Gmail as soon as possible. We had to let you all know what Gmail are doing behind the scenes, and how you can do something about it.</p>


> We had to build the Gmail integration feature as soon as possible.

<h2>So, why Gmail?</h2>
<p>Because we need to make it visible to you all. So you can make an informed decision on how, when and if to share your data.</p>
<p>Gmail are collecting a lot of information about our behaviour and habits, and none of this is clearly communicated when you use their Gmail services.</p>
<p>Whatever data they are collecting, this information needs to be shown to you in a way that is <strong>easy to see, clear and understandable.</strong></p>
<p>This is exactly what we’re building in <a href="https://www.notion.so/mytiki/206e9e86c520468ea604e057c0f0dea7?v=20062bf2771d4952840f862334a6cfc5"> TIKI’s release 0.1.0. </a> </p>
<p>We are designing a user friendly, simple way for you to understand exactly what data Gmail holds on you, and what you can do about it. We are presenting the information in a very visual way, using simple language that anyone can understand. From someone with English as a foreign language, to someone who knows all the data terms — we want to make sure everyone understands exactly what Gmail knows about them so they can make an informed decision about their data.</p>
<p>No more secrets. Starting with Gmail, TIKI’s launching an app that is revealing the truth about most tech products that you use daily.</p>
<p><strong>Because data transparency is what makes us get out of bed.</strong></p>
<p>We want you to know exactly what’s happening behind the scenes, so you can make a decision. Because it’s YOUR data, and only YOU can make a decision.</p>
<p>All yours,<strong>
<br>
Anna, Mike and the TIKI team </strong>

<br>
<br>
_________________

  
<p><em>If you have any questions, you can always chat to us directly in our community channels <a href="https://discord.com/invite/evjYQq48Be"> Discord </a>, <a href="https://t.me/mytikiapp"> Telegram </a> or <a href="https://signal.group/#CjQKIA66Eq2VHecpcCd-cu-dziozMRSH3EuQdcZJNyMOYNi5EhC0coWtjWzKQ1dDKEjMqhkP"> Signal </a>.
  We are building an app <strong>FOR USERS, BY USERS</strong>. We want to be in communication with you in order to build the best app possible!</em></p>









