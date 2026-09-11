---
layout: default
title: Contact Us
permalink: /about/contact/
---

# Contact Us

<div class="contact-layout">
<div class="contact-info">

<u>Email:</u> contact@lucasconsultantservices.com <br>
<br>
<u>Mailing Address:</u><br>
Lucas Consultant Services LLC<br>
6545 Market Ave. North, Suite 100<br>
Canton, OH 44721 USA

</div>
<div class="contact-illustration">
<img src="{{ '/assets/images/contact-envelope.png' | relative_url }}" alt="Illustration of an envelope with a message bubble, tilted, with a dark blue outline and dark green accent dots">

<button type="button" class="btn btn-secondary toggle-reveal" data-target="contact-message-form" data-label-closed="Message Us Directly" data-label-open="Hide Message Form" aria-expanded="false" aria-controls="contact-message-form">Message Us Directly</button>
</div>
</div>

<div id="contact-message-form" class="collapsible-details">

<form name="contact-message" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="{{ '/about/message-sent/' | relative_url }}" class="beta-form">
  <input type="hidden" name="form-name" value="contact-message">
  <p style="display:none;">
    <label>Don't fill this out if you're human: <input name="bot-field"></label>
  </p>
  <div class="form-field">
    <label for="contact-email">Email Address</label>
    <input type="email" id="contact-email" name="email" required>
  </div>
  <div class="form-field">
    <label for="contact-message-body">Message</label>
    <textarea id="contact-message-body" name="message" rows="5" required></textarea>
  </div>
  <button type="submit" class="btn">Send Message</button>
</form>

</div>
