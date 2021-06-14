# Ski or Die

Welcome to the Ski or Die!

This is my extended version of CEROS base edition which is a version of the classic Windows game SkiFree. If
you've never heard of SkiFree, Google has plenty of examples. You can play my version here:
<https://ski-or-die.herokuapp.com/>

Or deploy it locally by running:

```node
npm install
npm run dev
```

## Requirements

Throughout your completion of these requirements, be mindful of the design/architecture of your solutions and the
quality of your code. We've provided the base code as a sample of what we expect. That being said, there are ways the
design and architecture could be better. If you find a better way to do something, by all means, make it better! Your
solution can only gain from having a better foundation.

Requirement Implementations:

- [x] ~~**Fix a bug:**~~
  - [x] ~~Fix left arrow key after crash~~
    - Skier.js: Cleaned up and simplified some of the _move_ and _turn_ functions, as there was conditional checks and logic that could already be leveraged in the switch statement. We can now press the left arrow 1 (or many times as needed to get around obstacle/s) to reset the skier and continue moving left down the mountain.
      > **note:** I would of liked to actually be able to just press the left arrow and have the skier standup and face left. But, I wasn't able to do that quickly, so I moved on.
  - [x] ~~Fix right arrow key after crash~~
    - Found that right arrow key no longer worked after a crash, once fix for left arrow was implemented. Fixed by adjusting turnRight function.
- [ ] **Write unit tests:**

  > **Note** In a perfect world I would've built the unit tests before fixing the bugs, instead of fixing them and committing without the tests included.

  - [ ] Test bug fix for left arrow key after crash: Skier.js

  - [x] ~~Game.js Tests~~

    - [x] Testing that all game.js methods are defined and able to be invoked

- [ ] **Extend existing functionality:**

  We want to see your ability to extend upon a part of the game that already exists. Add in the ability for the skier to
  jump. The asset file for jumps is already included. All you gotta do is make the guy jump. We even included some jump
  trick assets if you wanted to get really fancy!

  - [x] ~~Have the skier jump by pressing a key~~
    > **note: Press arrow UP key to jump**
  - [ ] Use the ramp asset to have the skier jump whenever he hits a ramp.
  - [ ] The skier should be able to jump over some obstacles while in the air.
    > **note:** Tried to work this, but it was a little wonky and never rounded back to work it. Suppose its still part of my troubles with fully handling the collision detection.
    - [ ] Rocks can be jumped over
    - [ ] Trees can NOT be jumped over
  - [x] Anything else you'd like to add to the skier's jumping ability, go for it!
    - [x] ~~Added full jumping animation~~
      > **note:** Not fully satisfied with how it stops movement, while animating the jump

- [ ] **Build something new:**

  Now it's time to add something completely new. In the original Ski Free game, if you skied for too long,
  a yeti would chase you down and eat you. In Ceros Ski, we've provided assets for a Rhino to run after the skier,
  catch him and eat him.

  - [x] ~~The Rhino should appear after a set amount of time~~ or distance skied and chase the skier, using the running assets
        we've provided to animate the rhino.
  - [ ] If the rhino catches the skier, it's game over and the rhino should eat the skier.
    > **note:** I haven't been able to successfully make collision detection work with Rhino

- [ ] **Documentation:**

  - [x] Update this README file with your comments about your work; what was done, what wasn't, features added & known bugs.
  - [ ] Provide a way for us to view the completed code and run it, either locally or through a cloud provider

- **Be original:**

  - This should go without saying but don’t copy someone else’s game implementation!

- **Grading**

Your challenge will be graded based upon the following criteria. **Before spending time on any bonus items, make sure
you have fulfilled this criteria to the best of your ability, especially the quality of your code and the
design/architecture of your solutions. We cannot stress this enough!**

- How well you've followed the instructions. Did you do everything we said you should do?
- The quality of your code. We have a high standard for code quality and we expect all code to be up to production
  quality before it gets to code review. Is it clean, maintainable, unit-testable, and scalable?
- The design of your solution and your ability to solve complex problems through simple and easy to read solutions.
- The effectiveness of your unit tests. Your tests should properly cover the code and methods being tested.
- How well you document your solution. We want to know what you did and why you did it.

- [ ] **Bonus**

_Note: You won’t be marked down for excluding any of this, it’s purely bonus. If you’re really up against the clock,
make sure you complete all of the listed requirements and to focus on writing clean, well organized, well documented
code before taking on any of the bonus._

If you're having fun with this, feel free to add more to it. Here's some ideas or come up with your own. We love seeing
how creative candidates get with this.

- [ ] Provide a way to reset the game once it's over
- [ ] Provide a way to pause and resume the game
- [ ] Add a score that increments as the skier skis further
- [ ] Increase the difficulty the longer the skier skis (increase speed, increase obstacle frequency, etc.)
- [x] ~~Deploy the game to a server so that we can play it without having to install it locally <https://ski-or-die.herokuapp.com/>~~
- [x] ~~Write more unit tests for your code~~
