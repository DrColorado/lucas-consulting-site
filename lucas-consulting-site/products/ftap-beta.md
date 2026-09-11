---
layout: default
title: FTAP Private Beta
permalink: /products/ftap-beta/
noindex: true
---

# FTAP Private Beta

Thank you for helping us complete our testing of FTAP, the Financial Transaction Analysis Partner. This page is available only to invited members, so please don't share this link publicly.

FTAP is in the final stages of development, but not yet a complete package. As you install, set up, and begin to use the package, please share your comments, insights, and suggestions.

To request your download link, enter your name and email address below. We'll use this only to manage the beta test group and to follow up about your feedback.

<form name="ftap-beta-signup" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="{{ '/products/ftap-beta-confirmed/' | relative_url }}" class="beta-form">
  <input type="hidden" name="form-name" value="ftap-beta-signup">
  <p style="display:none;">
    <label>Don't fill this out if you're human: <input name="bot-field"></label>
  </p>
  <div class="form-field">
    <label for="ftap-name">Full Name</label>
    <input type="text" id="ftap-name" name="name" required>
  </div>
  <div class="form-field">
    <label for="ftap-email">Email Address</label>
    <input type="email" id="ftap-email" name="email" required>
  </div>
  <button type="submit" class="btn">Request Beta Access</button>
</form>
