"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Typewriter from "@/components/Typewriter"; // use your existing Typewriter component
import confetti from "canvas-confetti";
import Link from "next/link";

export default function PrivatePage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 500);

    // 🎉 launch confetti
    setTimeout(() => {
      confetti({
        particleCount: 250,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#ff66cc", "#ff99cc", "#ff66ff", "#fff"],
      });
    }, 800);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-white to-fuchsia-100 text-center p-8"
    >
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-500 mb-8"
      >
        💖 Private Birthday Message My Cutie💖
      </motion.h1>

      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-5xl bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl border-4 border-pink-200 p-8 md:p-10"
        >
          <Typewriter
            speed={40}
            text={`Hey cutie pie 😍
Bs bs jada n hso😂 areee..... Aree... Av bs kro 😂😂 leo av blush krne lge 🤣🤭😂.... Chalo krlo 😂 Khusi ko khush krne k liye hi sv kiya hai..

Again happiest birthday khushi 😍🤗... I wish ye bday ek best memory bn jaye apki life ki...😍🤗 Toxic log khud ba khud dur ho jaye.... And upr Wala bs apko khushiyon hi khushiyan de....
 
Ki tere hisse ki takleef bhi n lelu....
Mere hisse k bhi tu muskuraya kar... 😍😍🤗


About my feelings

YOU KNOW VERY WELL KI M TUMSE KITNA PYAR KRTA HU....😍😍🤗 Or m jb se mila hu tumse m apne aap ko itna khush or complete mehsoos krta hu... Jaise meri zindagi m ek missing piece mil gya ho...😍🥰.... Tumhari har ek baat, har ek ada, har ek muskan, har ek nazar m m apna pyaar or apni duniya dekhta hu...😍🥰.... Tum meri zindagi ki sabse khoobsurat kahani ho, jise m har roz naye rangon se sajaana chahta hu...😍🥰.... Tumhare sath bitaye har pal m m apne aap ko sabse lucky insan mehsoos krta hu...😍🥰.... Tum meri zindagi ki sabse khoobsurat gift ho, jise m hamesha sambhal ke rakhna chahta hu...😍🥰.... Tum meri zindagi ki sabse khoobsurat kahani ho, jise m hamesha padhna chahta hu...😍🥰.... tumhari khushi m hi apni khushi dhoondta rahunga...😍🥰

Ishq hai ya dosti ye to pta nhi...
Ki ishq hai ya dosti ye to pta nhi....
Par jo tumse hai wo kisi or se nhi..
 
Chlo ek or
 
Gum k samandar m kabhi dub na jana....
Agar Manjil na mile to ruth mat jana..
Zindagi k Safar m mahsus ho kisi ki kami....
Abhi m zinda hu ye bhul mat jana...😍😍


Gussa.....
 
U know jb hm first time mile the hauz khas m nikhil tum bhavya or udr jakar in dono n kuch bol diya tha ki abhi to bacche h ye esa kuch ... Or bhai tum Ruth gye🤭😂😂... Itna cute tareeke se kon gussa hota hai... Bs aage aage chle j rhe ....
Main pgl ho rha ki kya ho gya meri cutie pie ko😂 m un dono ko galiya de rha bc kya kr diya..... Kya bol diya... Ap aage aage m piche piche ki kya hua cutie pie kya hua.... kisne kya bola... btao to..... Or cutie.. nhi nhi thik hu m thik hu ...... Bhut hi cute moment tha😂🤭
metro k wait krte time jb apne bola ki apni age k sath walo sath aaya krugi av tb smj aaya ye lo pgl is bat ko leke gussa h.... ,😂


Janmashtami

Is din k to alag hi moments the.... Sahi se chal bhi nhi pa rha tha pair purra garam Patti and medicine se bandha hua😂😂 pr madam ji n bola h itne pye se to mna kese krdu....😍😍.... Pair k kya h lagda lafda k chal lege 🤭😂😂jb mili.... Kya lg rhi thi is din 🫠🫠😍.. m to sb kuch bhul gya 🤭 😂 or
Kya cute moments the yrr
Line m mera wait krna..... family ko aage bhej kr fir hath pkd k bheed m se l jana 🫠🫠 that was first time jb apne Mera hath thama and mene laddu gopal ko bola bhi dekh lo ise chorne mat dena 😍🥰...... Fir bs mn kr rha tha ye lamha yahi tahar jaye bass... 🥰 Fir kya tha chli gyi chor k apne ghr🥺


3rd time jb hm mile or apne mera hath pkda 🤭😂 hath kapna lga..... Heartbeat itni tez😂 or apne tightly hold kiya and than sv normal 🥰😍....
And jb jate time hug kiya...... 🥺🥺 3,4 din tk presan rha ki kya bat ho gyi ignore kyu kr rhi... Kuch glt bol diya mene.... Ki kya m iski har khushi k dhyan rakh pauga.... Khi meri bjh se kabhi ise hurt n ho ... Pta nhi kya kya sochta rha n proper sona n khana n kaam nikhil bolta tha pgl mat hoja😂😂 future k liye itni tension n l... Phle dono stable to ho jao...than mil kar kr lena dono ... Or aap mil kr gye or fir ese baat krne lge jese sahi se jnte bhi n ho...4th day tora bhut hosh aaya tha mujhe 😂


Nikhil's birthday

Iske birthday p jb n apka ofc work krwa rha tha and pass hi bethe the apne apne kande p mera sir rakha bola aaram se rakh lo😍 sukun santi or inke sate bhai bhn mil gye the 😍😍😂😂 ..
And fir jb apki god m sir rakh k leta 2min🫠🫠🫠 Jannat... Or jb aap upr se bend hokr let gye🫠🫠🫠 bhai aatma nikl k bhr aagyi thi.... Spna to nhi dekh rha m.... 😍😍😍. AP n itne soft ho😍😍 itne gulgule 🐼😍🤭 bo ahsas m kabhi nhi bhul skta 😍😍🤗 bs mn krta sb ese hi ruk jaye....


Chhat pooja

Socho koi ldki apke liye wait kre apko lene aaye 😍🫠 banda adha to idr hi flat ho jata h🥰. Kajal jhumki lipstick suit 😍 bhai ghayal kr diya apne bs ek bindi ki kami thi ye or hoti to ambulance m hi bps aana pdta 😍😍. And jo bhai dhool p dance kiya hlka😂😍 bs nazar 🧿 n lge kisi ki and i pray ese hi mst rhe hmesa toxicity se dur😍.


Park

bhai m vol rha bta do kidr aana hai... Nhi tum metro hi ruko m aati hu hilna mat tum udr se🫠🫠🫠.... chota don ho ap meri...😂😍🤗 Park m walk krna bate krna and bs apko dekhna😍😍🫠... And park m Hlki thndi hwa...smne hariyali street light k niche seat p bethe...  Or phn m video dekh k has rhe.... Sath m beth k hasi mjk😍🫠... I wish ye pal roz aaye 😍😍

Happy birthday my cutie pie 😍🥰

Mera man tha ki bday apke sath hi spend kru....... but.... leave... enjoy your day...
`}
            className="text-lg md:text-2xl text-gray-800 leading-relaxed font-serif whitespace-pre-wrap"
          />
        </motion.div>
      )}
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-12"
        >
          {/* Use Link component for client-side navigation */}
          <Link href="/last-gift" passHref>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(255, 99, 172, 0.5), 0 4px 6px -2px rgba(255, 99, 172, 0.25)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 text-2xl font-bold rounded-full text-white bg-gradient-to-r from-pink-500 to-fuchsia-600 shadow-xl transition duration-300 ease-in-out"
            >
              🎁 A Last Gift For You 🎁
            </motion.button>
          </Link>
        </motion.div>
      )}
      <div className="max-w-3xl text-center mt-12 mx-auto bg-red-500 p-2 !rounded-lg overflow-hidden">
        <Typewriter
          text="This website will delete itself in 24 hours to keep your surprise safe! 🎉"
          speed={35}
          // ENHANCEMENT: Improved color and prominence of the instruction text
          className="text-xl font-bold  text-white"
        />
      </div>
    </motion.div>
  );
}
