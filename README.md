# safari-issue-29
Attempt to build a repro for jldec's [iOS Safari issue]([url](https://github.com/fmctraining/fmc-website/issues/29))

Github: https://github.com/jldec/safari-issue-29

Deployed at https://safari-issue-29.jldec.workers.dev

### To reproduce:
- Navigate to https://safari-issue-29.jldec.workers.dev in iOS Safari
- Close Safari using the app switcher
- Wait 10 minutes
- Restart Safari - page should re-open on the same URL. Observe flash + blank page.

  
If you connect dev tools you'll see that only 2 of the 5 client scripts have loaded
  <img width="1221" height="414" alt="Screenshot 2025-07-28 at 11 33 24" src="https://github.com/user-attachments/assets/3e42e8f1-169a-4b65-a520-6d005dcd62ec" />

If you then reload the page on the phone, you'll see all 5 client scripts
  <img width="1222" height="412" alt="Screenshot 2025-07-28 at 11 33 47" src="https://github.com/user-attachments/assets/14ed7cb8-2835-4fa7-a93e-ae6cc449e312" />
