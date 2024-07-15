import React from 'react';
import '../styles/AboutMePage.css';

const AboutMe = () => {
  return (
    <div className="about-me-page">
      <div className="content-wrapper">
        <aside className="sidebar">
          <div className="personal-info">
            <h3>personal-info</h3>
            <ul>
              <li>bio</li>
              <li>interests</li>
              <li className="expanded">education
                <ul>
                  <li>high-school</li>
                  <li>university</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="contacts">
            <h3>contacts</h3>
            <ul>
              <li>Kaushikva44@gmail.com</li>
              <li>+91 6360586390</li>
            </ul>
          </div>
        </aside>
        <main className="main-content">
          <div className="bio-section">
            <pre>
              <codea1>{`
/**
 * About League of Legends Player Life
 * Oh, the life of a League of Legends player! Five years of 
 * pure, unadulterated, edge-of-your-seat action, and, of course,
 * the occasional existential crisis. 
 * 
 * Imagine dedicating your life to mastering the fine art of 
 * clicking on tiny little characters and missing skillshots 
 * by a hair’s breadth. Sounds thrilling, right? Welcome to my world.
 * 
 * My journey has been an epic saga of dodging blame for lost games, 
 * enduring the elo hell of Bronze, and experiencing the rare,
 * fleeting moments of triumph. It's not just a game; it's a full-time job
 * with no pay, no benefits, and a high probability of rage-induced 
 * keyboard smashing.
 * 
 * You think you've lived? Try surviving a 60-minute ARAM match
 * with teammates who can't differentiate between their Q and their ult.
 * Tournament glory? Pfft, I've got more participation trophies
 * than actual victories. Ranked grind? Oh, the sweet joy of losing LP 
 * because someone decided to go AFK.
 * 
 * League of Legends is less about the thrill of victory and more 
 * about the agony of defeat, coupled with the occasional moment
 * where everything clicks and you feel like a god among men. 
 * So, let's raise a glass (or a can of Mountain Dew) to the 
 * true heroes – the ones who keep queuing up, game after game, 
 * in search of that elusive Pentakill and the dream of Challenger.
 */
`}
              </codea1>
            </pre>
          </div>
        </main>
        <aside className="code-showcase">
          <h3>// Code snippet showcase:</h3>
          <div className="code-snippet1">
            <div className="snippet-header">
              <img src="path-to-avatar" alt="user avatar" />
              <span>@username</span>
              <span>Created 5 months ago</span>
              <span>details</span>
              <span>★ 3 starts</span>
            </div>
            <pre>
              <code1>{`
def is_prime(num):
    if num < 2: return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0: return False
    return True

print(is_prime(29)) # Output: True

}`}
              </code1>
            </pre>
          </div>
          <div className="code-snippet1">
            <div className="snippet-header">
              <img src="path-to-avatar" alt="user avatar" />
              <span>@username</span>
              <span>Created 9 months ago</span>
              <span>details</span>
              <span>★ 0 starts</span>
            </div>
            <pre>
              <code1>{`
function startCountdown(seconds) {
  let counter = seconds;

  const interval = setInterval(() => {
    console.log(counter);
    counter--;

    if (counter < 0) {
      clearInterval(interval);
      console.log('Time\'s up!');
    }
  }, 1000);
}
  
startCountdown(10);

}`}
              </code1>
            </pre>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AboutMe;