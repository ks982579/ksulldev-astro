---
layout: '@layouts/BlogLayout.astro'
title: 'Navigating the World of Self-Hosted GitLab, SSL Certificates, and Trust: Windows vs. Linux'
pubDate: 2023-08-20
description: 'I was looking into self-signed SSL certificates when I stumbled into a blog worthy thought. Well, bigger than a thought so I turned it into a blog.'
author: 'Kevin Sullivan'
tags: ["astro", "blogging", "netlify", "language", "programming", "ssl", "certificates"]
draft: true
image:
    url: https://img.freepik.com/free-photo/trust-word-made-with-wooden-blocks_23-2148101503.jpg?w=1380&t=st=1693852112~exp=1693852712~hmac=6c4554031d1b317cb19d728cc10ed19e48ada8b6ad9d2030bbfc64e517395726
    alt: 'Word "TRUST" written with wooden blocks.'
---

## Introduction

Picture this: You and your colleague are on a mission to self-host GitLab on a server, excited to dive into the world of version control, code collaboration, and continuous integration. Your journey begins with the thrill of setting up a private GitLab instance, but as you dig deeper, you encounter a digital puzzle—self-signed SSL certificates and the need to add them as trusted entities. As you unravel this puzzle, you also stumble upon the fascinating world of how operating systems manage trust. 

## Self-Hosted GitLab and SSL Certificates

Your self-hosted GitLab instance is your fortress of code, a secure hub for your team's collaborative efforts. To ensure this security, you decide to implement SSL (Secure Sockets Layer) certificates. But here's the catch: you opt for self-signed certificates. Why? Because it's a private environment, and you want to encrypt and secure data without involving external certificate authorities.

## SSL Certificates and Trust

You may be wondering why SSL certificates, and why trust? SSL certificates are the unsung heroes of the web, ensuring the confidentiality and integrity of data transmitted between your browser and the server. Trust, in this context, means having confidence that the server you're communicating with is genuine and not an imposter.

## The Windows Journey: Adding Trust

As you explore the world of SSL certificates, you encounter a new term: "Trusted Root Certification Authorities." On your Windows machine, you need to add your self-signed certificate to this store to avoid browser warnings. This action triggers an intriguing thought: who decides which certificates are trusted? It's here that you begin to realize the power dynamics of operating systems.

## The Trust Store in Windows

The "Certificate Manager" tool (certmgr.msc) is your gateway to the trust store on Windows. With this tool, you can view the trusted root certificates on your system. These certificates form the bedrock of trust, ensuring that your online transactions and interactions are secure. It's a crucial part of the security puzzle.

## Linux's Take on Trust

Linux, known for its open-source ethos and community-driven development, approaches trust in a slightly different way. In the Linux world, decisions about which certificate authorities (CAs) to trust are often made by distribution maintainers and developers. The process is community-inclusive, transparent, and aligned with industry standards and best practices.

## The Concerns: Power Over Trust

As you near the end of your journey, you reflect on the potential downsides of the trust model. The trust placed in operating system vendors, such as Apple and Microsoft, to decide which CAs are trustworthy might be a point of concern. It's a centralized process with potential for bias, impacting competition, and having broader implications.

## Conclusion

In this journey from self-hosted GitLab to the intricacies of SSL certificates and trust, you've uncovered the layers of web security and trust management. While you may not be an expert, you now have a deeper understanding of why SSL certificates are essential, how to manage them in Windows, and Linux's community-driven approach.

The final takeaway? The power of trust is a pivotal issue in the world of technology, one that's worth pondering as you navigate the digital landscape. As technology users and enthusiasts, it's essential to stay curious and informed about the dynamics that shape our online experiences, including the control of trust in operating systems.

Thanks for reading. I don't know much about self-signed SSLs but thought it was interesting that huge corporations determine through their OS who we trust. I am sure there is more to the story, but food for thought.

```yaml
image: 
    platform: Freepik
    url: https://www.freepik.com/free-photo/trust-word-made-with-wooden-blocks_4351825.htm#query=trust&position=0&from_view=search&track=sph
    name: Free photo trust word made with wooden blocks
```