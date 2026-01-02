import React from "react";
import "../App.css";

type Reason = {
  id: number;
  text: string;
};

const reasons: Reason[] = [
  { id: 1, text: "You inspire me to become a better person." },
  { id: 2, text: "You always ALWAYS make me laugh." },
  { id: 3, text: "You yap a lot (which i love btw)" },
  { id: 4, text: "You are my favorite person." },
  { id: 5, text: "You make me feel so appreciated." },
  { id: 6, text: "You make me feel important." },
  { id: 7, text: "I love your attitude." },
  { id: 8, text: "You don't tolerate bullshit and I respect that so much." },
  { id: 9, text: "Although you aren't the most expressive, you always reassure me; no questions asked." },
  { id: 10, text: "You notice the little things." },
  { id: 11, text: "Your personality >>>" },
  { id: 12, text: "You're kind to the right people." },
  { id: 13, text: "Somehow you always understand me :')" },
  { id: 14, text: "We're into different things but we still find time to enjoy each other's hobbies/interests." },
  { id: 15, text: "You match my freak !!" },
  { id: 16, text: "You care about other people huhu its so endearing" },
  { id: 17, text: "I love how you enjoy your me time." },
  { id: 18, text: "You value your personal space and personal time, i love that so much about you." },
  { id: 19, text: "Your eyes. (need I say more?)" },
  { id: 20, text: "You make me actually want to take care of myself." },
  { id: 21, text: "Your smile. (so captivating)" },
  { id: 22, text: "Lagi kang nagrereklamo sa cheeks mo but I love them so much!! (one of my favorite things about you tbh)" },
  { id: 23, text: "pa sungit sungit kalang pero batak ka magpalambing (hehe cute mo)" },
  { id: 24, text: "can i respectfully say that everytime u send me a pic of yours, lagi akong napapatingin sa labi mo?" },
  { id: 25, text: "You bring out a version of me that no one else has ever seen" },
  { id: 26, text: "I love it when you just bluntly say na you want me all to yourself (YES PLS)" },
  { id: 27, text: "You inspire me to be a better person." },
  { id: 28, text: "Cute mo magselos hihi" },
  { id: 29, text: "I love your hilik moments, baka if magkasama tlg tayo, I'd kiss you pa." },
  { id: 30, text: "Respectfully? You're hot." },
  { id: 31, text: "You make me feel safe and understood." },
  { id: 32, text: "I've always wanted someone who will follow up their words with actions. I'm so happy i found you." },
  { id: 33, text: "You always try. You try and talk to me about what you feel and kahit na you find it hard, you still do it. I appreciate you so much for that." },
  { id: 34, text: "Nanghihina ako lagi sa \"ingat sa pag drive ha\" or \"ingat baby\" or anything na ganon !\"" },
  { id: 35, text: "You listen and you remember." },
  { id: 36, text: "You never made me feel like I was too much kahit oa ako most of the time hehe" },
  { id: 37, text: "Alam mo, i love your vms talaga." },
  { id: 38, text: "At the end of a day na busy ka or marami kang ginawa, you always tell me about it. Honestly, it's always the highlight of my day whenever u do that." },
  { id: 39, text: "When you send me things and you say na \"us\" or something ganon, it genuinely warms my heart that you send me things that remind you of me huhu" },
  { id: 40, text: "In times where I don't like myself, you're there to remind me na di naman ako mahirap gustuhin." },
  { id: 41, text: "You're self-aware. You know when you're right or wrong." },
  { id: 42, text: "It's not hard for you to say sorry. I love that so much about you." },
  { id: 43, text: "Di mo masabi na mahaba pasensya mo sakin, but I know you are patient enough with me hehehe thank you baby." },
  { id: 44, text: "Di mo ako hinahayaan. I'll never forget that one time na sinabi mo na di mo naman ako hinahayaan but you're just doing something lang ganon and you still sent me messages. i felt so seen nung time na yun." },
  { id: 45, text: "Minsan ko lang nagegets RRL mo pero ang funny mo pa rin kahit di ko nagegets. grabe lakas mo sakin ah." },
  { id: 46, text: "You've dealt with so much but you're still here. I'm so proud of you." },
  { id: 47, text: "Minsan ang random mo pero sobrang cute mo nyan." },
  { id: 48, text: "You don't rush the important things." },
  { id: 49, text: "You remind me to stop and savor every single living moment." },
  { id: 50, text: "Never mong napafeel sakin na kulang ako." },
  { id: 51, text: "I love how you still include me like kahit naglalaro ka, mag aya ka na mag call tayo ganto ganyan. I love our moments na ganyan." },
  { id: 52, text: "You always believe in me, even when I don’t." },
  { id: 53, text: "I love your compliments. Honestly, it made me more confident than before." },
  { id: 54, text: "You appreciate and acknowledge the little things I do for you. (makes me feel seen honestly)" },
  { id: 55, text: "You might think na you're not the easiest to love, but you are." },
  { id: 56, text: "Did I say how much I love your softness with me? it makes me feel so special." },
  { id: 57, text: "You always make time." },
  { id: 58, text: "You make love feel so safe." },
  { id: 59, text: "Your voice. I feel so much comfort whenever I hear your voice." },
  { id: 60, text: "The little things you do for me. I see all of them and I appreciate you. I love you." },
];

const Reasons: React.FC = () => {
  return (
    <div className="container">
      <h1>The Quiet Reasons </h1>
      <p className="subtitle">
        The moments you don't notice, but I do.
      </p>

      <div className="reasons">
        {reasons.map((reason) => (
          <div key={reason.id} className="reason-card">
            {reason.text}
          </div>
        ))}
      </div>

      <footer>to you, my sammi.</footer>
    </div>
  );
};

export default Reasons;
