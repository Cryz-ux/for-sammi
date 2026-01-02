import { GridCard } from "./grid-card";
import { useState } from "react";
// @ts-ignore - project may not have @types/react-dom installed
import ReactDOM from "react-dom";

interface Letter {
  id: number;
  title: string;
  date: string;
  preview: string;
  color: string;
  body?: React.ReactNode;
}

export function LetterArchive() {
  const [selected, setSelected] = useState<Letter | null>(null);

  const letters: Letter[] = [
    {
      id: 1,
      title: "First Letter",
      date: "August 17, 2025",
      preview: "The first gifft, I've made for you ever.",
      color: "from-purple-300 to-pink-300",
      body: (
        <>
          The first gifft, I've made for you ever. {' '}
          <a
            href="https://gifft.me/o/l/6i85wxpw7h0vnkjx8ssm87he"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 underline"
          >
           <u>here</u>.
          </a>
          .
        </>
      )
    },
    {
      id: 2,
      title: "Pambawi Letter",
      date: "August 30, 2025",
      preview: "The letter I sent you when...",
      color: "from-blue-300 to-purple-300",
      body: (
        <>
          The letter I sent you when I was busy during the last week of August. {' '}
          <a
            href="https://gifft.me/o/hm/2n9fcziyqgrmgsatgnoc7uvf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 underline hover:text-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-200"
            aria-label="Open special moment in new tab"
          >
            <u>here</u>
          </a>
          .
        </>
      )
    },

    {
      id: 21,
      title: "When you got sick and I missed you :(",
      date: "September 11, 2025",
      preview: "Hi baby ko!",
      color: "from-purple-300 to-pink-300",
      body: (
        <>
          Hi baby ko!

I miss you sobra. Antok na kasi ako tas miss kita so I'm writing! ewan ko  nga if magegets mo handwriting ko kasi ang gulo eh. Sorry di talaga ako writer !! I'm a typer remember ! eme dami alam

Anyway, I hope this could be proof that even if we're not talking much, ikaw pa rin talaga nasa isip ko. Na no matter where I am, what I'm doing, who I'm with, you're always on my mind; and ikaw lang talaga gusto ko. Wag mo 'ko ipamigay please !! I only want you !!


Hay, sobrang miss talaga kita. Boses mo, tawa mo, kadaldal natin, ANG OA KALA MO TLG BA. Okay, anyway, I hope you'll feel better na soon. it sucks na I can't do much from here.

Always thinking of you, Cryz mo. {' '}
          <a
            href="https://docs.google.com/document/d/1ZY32gDybIMvQik9z_RLrTOKDxFgv6ejUeVbCbt8v1uM/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 underline"
          >
           <u>here</u>
          </a>
          .
        </>
      )
    },

    {
      id: 22,
      title: "Always thinking of you",
      date: "September 11, 2025",
      preview: "This letter...",
      color: "from-purple-300 to-pink-300",
      body: (
        <>
          This letter; inamin ko na I was slowly falling for you. I noticed kasi I was always thinking of you. Hindi complete yung araw ko if di pa kita nakausap. Ngayon, here we are. {' '}
          <a
            href="https://docs.google.com/document/d/1miq4hPlKF4930Rd4xh4TUAvlMW0PUyAsCb9uFvETzlo/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 underline"
          >
           <u>here</u>.
          </a>
          .
        </>
      )
    },
    
    {
      id: 3,
      title: "If only you can see yourself through my eyes",
      date: "September 12, 2025",
      preview: "When I attached the song...",
      color: "from-pink-300 to-rose-300",
      body: (
        <>
          When I attached the song Papahiram by Moira feat. Johnoy Danao. If only you can see yourself
          through my eyes; then you'd see why I'm so smitten by you. {' '}
          <a
            href="https://gifft.me/o/e/dtokt3vv34lz71f2rrhm68v0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 underline hover:text-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-200"
            aria-label="Open just because link in new tab"
          >
            <u>here</u>
          </a>
          .
        </>
      )
    },

    {
      id: 23,
      title: "NOT Deja Vu",
      date: "September 17, 2025",
      preview: "Hi baby! I'm in class syempre...",
      color: "from-purple-300 to-pink-300",
      body: (
        <>
          Hi baby!

I'm in class syempre hehe. Alam mo nag lip balm na ako today, proud kaba sakin HAHAHA. Parang napanaginipan ko yung nangyari sakin kanina. Nagclear kasi ako ng storage tas dumaan mga picture mo dun sa photos. I remember talaga parang I dreamt of it na. like, nakatingin ako sa pictures mo tapos nandito ako sa classroom, partida bago 'tong classroom ah! Ngayon lang natapos yung renovation, ginamit na nami agad, so it's not Deja Vu. So wtf.
 {' '}
          <a
            href="https://docs.google.com/document/d/1cMbLpUcl7Dd6_kfEBykTni5a3CktNmolWd_Y1Ar7vo0/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 underline"
          >
           <u>here</u>.
          </a>
          .
        </>
      )
    },

    {
      id: 20,
      title: "1000 words are not enough",
      date: "September 22, 2025",
      preview: "When I made you this...",
      color: "from-purple-300 to-pink-300",
      body: (
        <>
          When I made you this, I didn't only take you on sa challenge na i'll make you a letter na 1000 words, pero all I had in mind was you; and how much I wanted to tell you all the things I did in this letter.
          1000 words are truly not enough to describe how much i feel for you. i love you baby. {' '}
          <a
            href="https://docs.google.com/document/d/1B6AzJIW_X4VrQfnZlIlrmxZgZD20Syy7x9OP-FbpsYI/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 underline"
          >
           <u>here</u>.
          </a>
          .
        </>
      )
    },

    {
      id: 4,
      title: "Just Because",
      date: "October 3, 2025",
      preview: "No special reason, just...",
      color: "from-blue-300 to-purple-300",
      body: (
        <>
          Sometimes I write to you just because. You know I love thinking of you. {' '}
          <a
            href="https://gifft.me/o/hm/bjeqx8v6k4csl3c6isk2iump"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 underline hover:text-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-200"
            aria-label="Open just because link in new tab"
          >
            <u>here</u>
          </a>
          .
        </>
      )
    },

    {
      id: 13,
      title: "I love you for who you are",
      date: "October 7, 2025",
      preview: "Tinype ko to when...",
      color: "from-pink-300 to-rose-300",
      body: (
        <>
          Tinype ko to when inisip ko lang how much i love you. {' '}
          <a
            href="https://docs.google.com/document/d/1noz3PpCpd1-tMCDMWQC0h1PlUm0KSfg5E2KlNoPenF0/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 underline hover:text-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-200"
            aria-label="Open just because link in new tab"
          >
            <u>here</u>
          </a>
          .
        </>
      )
    },

    {
      id: 14,
      title: "When I realized",
      date: "October 9, 2025",
      preview: "i realized na mahal na kita kasi...",
      color: "from-purple-300 to-blue-300",
      body: (
        <>
          i realized na mahal na kita kasi i'm contented na with you. i dont see myself with anyone else but you. i cant get enough of your presence. also, the more i get to know you, mas lalo pa akong nahuhulog eh. alam kong mahal kita kasi im more than willing to stay with you no matter what. god, ive been masking it pala as gusto lang pero the truth is mahal na pala kita. kahit anong side mo pa yang ipakita mo sakin, alam kong mamahalin pa rin kita. in denial siguro ako nung una kasi in my mind ang dali naman, pero that doesnt matter naman eh. when you love someone, u just do diba HWJSJAHAHA. kaya hayaan k nlng sarili ko ifeel whatever im feeling ganon and it led to this. ang sarap pala sa feeling na nasabi ko na sayo baka sabihin k n yn pa ulit ulit but pigilan k nlng sarili ko kasi baka overwhelming for you. pero alam mo, i dont want to do things that can possibly make you overthink, not only out of respect sa anong meron tayo, pero its bc i love you. hindi ka mahirap mahalin, sam mikylla. sana alam mo na you're worth loving din.
        </>
      )
    },

    {
      id: 15,
      title: "How lucky I am to love you",
      date: "October 9, 2025",
      preview: "i hope you know na i feel lucky...",
      color: "from-pink-300 to-rose-300",
      body: (
        <>
          i hope you know na i feel lucky to even be able to love you. ang swerte swerte ko sa'yo, sam mikylla. ure in my mind from the moment i wake up, hanggang sa nananaginip na ako; andyan ka lagi. u may not be physically here but what i feel for you is more than real. you made me realize na im still capable naman pala of loving someone and im lucky enough na that someone is you. kahit na wala pa tayong label, i'm very much committed to you. you're everything i've ever wanted and needed, baby.

alam mo kahit tahimik lang tayo sa call, nangiti ako out of nowhere minsan kasi marealize ko kacall ko pala crush ko WHJSJAJAHSHAHA and im sorry if ganon lang yung pag amin ko sayo, shuta i cant keep secrets kasi talaga lalo na pag surprise para sayo yung ganon HWJSJAHA I CANT KEEP ANYTHING FROM YOU SRSLY 😭 

and alam m i talk a lot naman i talk a lot to myself HWISAJAHA and i alays seem to blurt out na mahal kita and ang sarap sa feeling.

i love you, sam mikylla.
        </>
      )
    },

    {
      id: 5,
      title: "I love thinking of you",
      date: "October 10, 2025",
      preview: "The letter I wrote when...",
      color: "from-blue-300 to-purple-300",
      body: (
        <>
          The letter I wrote when I was feeling so much and all I can do was write to you. {' '}
          <a
            href="https://docs.google.com/document/d/153W2-Rmv-QSwbfouYtoPxj3hqEm9ypQuZ9Og53PPLfo/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 underline"
          >
           <u>here</u>.
          </a>
          .
        </>
      )
    },

    {
      id: 16,
      title: "You're the best thing that has happened to me",
      date: "October 16, 2025",
      preview: "hi baby i know its going to be...",
      color: "from-blue-300 to-purple-300",
      body: (
        <>
          hi baby i know its going to be a looong week for you pero i hope you know i'm here for you !! if gusto m ng stress reliever hehe HWJSJAJAHA or if gusto m kasama ganon dito lang ako hehe 

sana alam mo na proud din ako sayo. sa dami dami mong irreview lagi, ginagawa din dun sa school, proud ako sayo na nakaya mo yan lahat. i also just want to let you know na im rooting for you !! support kita lagi baby ko and im always so so proud of you mahal ko. i hope u know how thankful i am to have met you. u make me feel na di pala ako ganon ka hirap iappreciate. gets mo ba? hwjsjaja i feel so safe and myself s you tlg. i hope di ka magsawa sakin 🙁 but if ever man, i wont ever regret you. seryoso ako na youre the best thing that has happened to me this year (or maybe ever honestly).

alam mo i enjoy the song so high school din ni taylor and naenjoy ko na yun ever since i met you. kasi i gave up on the thought na talaga na capable ako magmahal like i did noon; before all the things that made me doubt myself. but then, nakilala kita 🥹 parang high school lang talaga na kinikilig ako sayo, iniisip kita lagi, clingy ako and i feel like i can be a kid around u HWJAJAJAH IS THAT BAD BA ?? baka mairita ka kasi pacute n ak HWJSJAJHAHA i honestly miss you all the time bebe, nararamdaman k n pagkaclingy ko kandjs and di tlg ak ganto 😭 but ewan, everything is different when it comes to you and i love it. i love you.
        </>
      )
    },

    {
      id: 6,
      title: "I love loving you",
      date: "October 25, 2025",
      preview: "Di nanaman ako makatulog...",
      color: "from-purple-300 to-pink-300",
      body: (
        <>
          Di nanaman ako makatulog kaya I wrote to you again. {' '}
          <a
            href="https://gifft.me/o/l/6i85wxpw7h0vnkjx8ssm87he"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 underline"
          >
           <u>here</u>.
          </a>
          .
        </>
      )
    },

    {
      id: 7,
      title: "Everyday I fall in love with you more.",
      date: "October 30, 2025",
      preview: "All I can think about is...",
      color: "from-purple-300 to-pink-300",
      body: (
        <>
          All I can think about is how much I love you. {' '}
          <a
            href="https://gifft.me/o/hm/px470f72ikcdboujvdxy1faa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 underline"
          >
           <u>here</u>.
          </a>
          .
        </>
      )
    },
    {
      id: 8,
      title: "Just in case Letter",
      date: "November 4, 2025",
      preview: "The letter I made for you when...",
      color: "from-blue-300 to-purple-300",
      body: (
        <>
          The letter I made for you when bumagyo dito sa amin, remember? Tapos I expected kasi na mawalan kami ng kuryente kaya I made you this.  {' '}
          <a
            href="https://gifft.me/o/hm/qnnaq7vrew20hcfkkj0rnes4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 underline hover:text-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-200"
            aria-label="Open special moment in new tab"
          >
            <u>here</u>
          </a>
          .
        </>
      )
    },
    {
      id: 9,
      title: "Yes, I think about having those moments with you.",
      date: "November 7, 2025",
      preview: "I attached this song...",
      color: "from-pink-300 to-rose-300",
      body: (
        <>
          I attached this song Tahan, kasi yun nga, naalala kita. I pictured us listening to this, while just having the time of our lives. i love you. {' '}
          <a
            href="https://gifft.me/o/e/dtokt3vv34lz71f2rrhm68v0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 underline hover:text-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-200"
            aria-label="Open just because link in new tab"
          >
            <u>here</u>
          </a>
          .
        </>
      )
    },

    {
      id: 17,
      title: "Crush na crush talaga kita.",
      date: "November 13, 2025",
      preview: "hi baby, tulog kana ngayon sa discord...",
      color: "from-pink-300 to-rose-300",
      body: (
        <>
          hi baby, tulog kana ngayon sa discord and i still think about you. IWKDKSJS i swear ngayon pa ako naka experience being this down bad for someone 😭 whenever kasama kita or whenever i think about you, naiisip ko na "crush na crush ko talaga to" or "mahal na mahal ko tlg siya" yung ganon na ewan talaga JWDJSJSH i love thinking about you, i love everything about you !! yung parang sasabog n tlg ako sa dami kong nafefeel para sayo. im so lucky to have you talaga you have no idea jasiksns dyan ka lang baby ha? gagawin k lahat para di k mawala sakin jaisoakzna ANG OA NI BADING pero baka sa antok ko lang din kasi to. ang cute mo eh, nagising ka bigla tas sabi mo miss mo ako whjsiaksja ANG CUTE MO PLS LANG pwede bang asawahin na kita right now HWISKAJAJAJ EME (pero alam mo namang hindi yan eme 😁)

          ewan ba, i just love you baby. ang sarap ulit ulitin eh. idk im so head over heels for you its not even funny fr 😭 im so into you, ewan ang sarap magyabang kasi ikaw baby ko HWKSKSJSNSH sayo lang ako baby mwa !! mahal na mahal kita !
          
        </>
      )
    },

    {
      id: 10,
      title: "I'm always so so proud of you.",
      date: "November 16, 2025",
      preview: "I hope you know...",
      color: "from-pink-300 to-rose-300",
      body: (
        <>
          I hope you know how proud I am of you. I made this letter thinking about you syempre. {' '}
          <a
            href="https://gifft.me/o/e/u5u0mnff8h1uhab32px646bj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 underline hover:text-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-200"
            aria-label="Open just because link in new tab"
          >
           <u>here</u>
          </a>
          .
        </>
      )
    },

    {
      id: 18,
      title: "There's one thing I'm sure of, and that's you.",
      date: "November 18, 2025",
      preview: "hi baby, tulog kana pero i just wanted to say...",
      color: "from-blue-300 to-purple-300",
      body: (
        <>
          hi baby, tulog kana pero i just wanted to say how thankful i am na i met you. i admit kahit ilang beses mo pa sabihin na ang swerte mo sakin, i know na i still have my lapses but there is one thing im sure of, and that's you. im so sure of you na alam ko na im willing to work on anything and everything if it means to keep you. i know you've said na di kapa ready ganyan, and although we aren't in the same place pa now, im so willing to wait for you. idc gano pa ka tagal, as long as i get to call you my girlfriend in the end, sapat na sakin yun. kinikilig nga ako isipin HWJSJAJSHAHA. anyway, minsan sa gantong oras bibigat pakiramdam ko, idk why pero somehow writing to you makes me feel better. you make me feel better. wao sino k dyan talo p gamot HWISJAJAHA pero yeah, im not even joking. pag sobrang maingay na ng boses sa utak ko, when i get so overwhelmed, all i do is think of you, write to you or talk to you if hindi ka tulog or busy. may nakita ako sa tiktok and i sent it to you naman ata, yung i'd rather heal with you by my side than heal without you at all. i hope it goes the same way for you. dito lang naman ako kahit anong side mo pa ipakita mo sakin. naiinis ka? ilabas m sakin, makikinig ako; nassad ka? let me stay with you and remind you that you're not alone; you're excited/happy? i'll be excited and happy with you. baby, im here to let you know that now i'm here, you don't have to go through anything alone ever again. you are so loved by me. i miss you, bebetime na soon pls hwdjksjs ☹️

          p.s. sana maganda ang gising ng baby ko na yan ! mwa !!
        </>
      )
    },

    {
      id: 11,
      title: "I will always choose you.",
      date: "December 1, 2025",
      preview: "The letter I made for you...",
      color: "from-blue-300 to-purple-300",
      body: (
        <>
          The letter I made for you kasi wala lang. I just wanted you to know na kahit anong mangyari sakin, sa'yo or sa atin, I will always choose you. Ikaw at ikaw lang ang gusto ko makasama, baby. {' '}
          <a
            href="https://gifft.me/o/hm/2n9fcziyqgrmgsatgnoc7uvf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 underline hover:text-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-200"
            aria-label="Open special moment in new tab"
          >
            <u>here</u>
          </a>
          .
        </>
      )
    },

    {
      id: 18,
      title: "You're the only one I want to be with.",
      date: "December 14, 2025",
      preview: "i figured...",
      color: "from-purple-300 to-pink-300",
      body: (
        <>
          i figured na i'll put this nalang in one message para di ka magising. baby, you're the only one i want to be with talaga. if its not you, wag nalang honestly HWJSJAJAHA. im so sorry i wasn't there nung na sad ikaw kanina huhu but im here now. hindi ako mauumay, hindi ako mapapagod, hindi ako mawawala. bebe i'll be here for as long as you'd want me to. kahit ilang beses m p ak aawayin, di kausapin or ano pa yan, di kita iiwan baby. mahal na mahal kita. i know limited yung ways to show you how much i love you kasi ldr tayo pero i hope in ever other way possible, i've made you feel loved. i literally met you at the most unexpected of times and i wouldn't have it any other way. HWJSJAJA ITS SOUNDS SO CLICHÈ pero ikaw tlg plot twist ko ngayong 2025. you're the best thing that has ever happened to me bebe and i dont ever want to let that go. di ko nga kinaya na di mo ako kinausap ilang oras tas na sad tlg ak nung sinabi mo na di mo lang talaga ako pinansin pala. gets ko naman though kasi it was my fault. pero baby, kahit ilang beses p tau di magkabati, magkaaway, magtampuhan or anything like that. leaving you is never an option. kung mapagod man edi magpahinga kasi i wouldn't want to be with anyone else but you. hindi ako mauumay sayo baby, mahal na mahal kita eh, kung alam mo lang.
        </>
      )
    },

    {
      id: 12,
      title: "Latest Letter",
      date: "December 22, 2025",
      preview: "The Script's song I attached...",
      color: "from-purple-300 to-pink-300",
      body: (
        <>
          The Script's song I attached which reminds me of us, and what kind of partner I want to be to you; puhon syempre. {' '}
          <a
            href="https://gifft.me/o/p/pxpjwmk6slg72t4755zvxewq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 underline"
          >
           <u>here</u>.
          </a>
          .
        </>
      )
    },

    

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-7xl font-serif font-bold text-gray-999 mb-2">Letter Archive</h1>
        <p className="text-gray-800 mb-12">All the letters I've written for you</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {letters.map((letter) => (
            <GridCard
              key={letter.id}
              title={letter.title}
              description={`${letter.date} - ${letter.preview}`}
              color={letter.color}
              onClick={() => setSelected(letter)}
            />
          ))}
        </div>

        {selected &&
          ReactDOM.createPortal(
            <>
              <div className="fixed inset-0 z-[9998] bg-black/40" onClick={() => setSelected(null)} />
              <div
                role="dialog"
                aria-modal="true"
                style={{ position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999 }}
                className="bg-white rounded-xl shadow-xl max-w-2xl w-full p-6 h-[80vh] flex flex-col"
              >
                <div className="flex-shrink-0">
                  <h2 className="text-2xl font-bold mb-2">{selected.title}</h2>
                  <p className="text-sm text-gray-500 mb-4">{selected.date}</p>
                </div>
                <div className="flex-1 overflow-auto">
                  <div className="text-gray-700 mb-6">{selected.body}</div>
                </div>
                <div className="flex-shrink-0 flex justify-end">
                  <button
                    onClick={() => setSelected(null)}
                    className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg"
                  >
                    Close
                  </button>
                </div>
              </div>
            </>,
            document.body
          )}
      </div>
    </div>
  );
}