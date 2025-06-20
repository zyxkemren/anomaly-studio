"use client";

import Image from "next/image";

const image = ["/image.png", "/dashboard.png", "/anomatot.webp", "/chatbot.png", "/bot.png"];

const project = [
  {
    image: "/project/pvp-anomaly-1.png",
    title: "Anomaly Network",
    desc: "A crossplay Indonesian minecraft server themed Survival MIX (semi-rpg). Over 5000 player ever joined this server. The server operated between 2022-2024.",
    button: { text: "Discord Server", link: "https://dsc.gg/anomaly-network/" },
  },
  {
    image: "/background.webp",
    title: "Quillbot",
    desc: "QuillBot is a comprehensive Discord bot, user-friendly, trusted by many servers to enhance moderation, provide fun mini-games, implement a dynamic leveling and economy system, and generate AI images. (discontinued)",
    button: { text: "Add to Discord", link: "https://discord.com/oauth2/authorize?client_id=1052510780018401371" },
  },
  {
    image: "/project/chatbot.png",
    title: "Anomaly Inteligence",
    desc: "Anomaly Intelligence is a web platform for smart chatbots that provide natural, real-time conversations. It uses advanced AI to understand users, learn from interactions, and deliver accurate responses for customer support and more.",
    button: { text: "Learn More", link: "https://chat.anomaly.my.id/" },
  },
  {
    image: "/dashboard.png",
    title: "Venex",
    desc: "Is a fully customized minecraft webstore with UI built-in editor and many payment integration with powerful features like analytics, transaction history, donator leaderboard, custom themes and Discord integration.",
    button: {
      text: "Learn More",
      link: "https://www.canva.com/design/DAGj7wYUlQw/WyCD-RvWOClfbOII7cvzVA/view?utm_content=DAGj7wYUlQw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc9beeb8878#1",
    },
  },
];

const links = [
  { icon: "/icons/discord.png", link: "https://dsc.gg/anomalystudio" },
  { icon: "/icons/instagram.png", link: "https://instagram.com/zyxkemren" },
  { icon: "/icons/tiktok.png", link: "https://tiktok.com/@zyxkemren" },
  { icon: "/icons/youtube.png", link: "https://youtube.com/@zyxkemren" },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="main-page relative h-screen w-full">
        <Image src="/background-noblur.webp" alt="Background" fill style={{ objectFit: "cover" }} quality={100} />
        <div className="main-page-title flex flex-col justify-center text-center absolute top-[300px] w-full">
          <h1 className="font-spartan text-[7rem] font-bold">Anomaly Studio</h1>
          <p className="text-[1.2rem]">Create a random project with dedication</p>
        </div>
      </div>

      <div className="about-page my-[10vw] mx-[20vw] text-center justify-center">
        <p className="text-[1.2rem] text-justify">
          Anomaly Studios is a small but passionate creative team dedicated to bringing diverse projects to life. From developing custom Minecraft
          servers and crafting powerful Discord bots to building engaging websites and exploring other innovative tech ideas, we tackle every project
          with enthusiasm and full commitment. Despite being a small team, we approach each task with professionalism, attention to detail, and a
          serious mindset to deliver high-quality results. At Anomaly Studios, creativity meets dedication as we turn ideas into reality, pushing
          boundaries and continuously learning along the way.
        </p>
        <div className="flex flex-col items-center my-[5vw]">
          <h2 className="font-poppins text-[3rem] font-[600]">Want to make an amazing website?</h2>
          <div className="w-full h-[20vw] my-[2vw] overflow-x-auto overflow-y-hidden">
            <div className="carousel flex gap-[20px] w-max px-[10vw]">
              {image.map((data, index) => (
                <div className="relative h-[19vw] w-[40vw] shrink-0 transition-transform duration-300 ease-in-out" key={index}>
                  <Image src={data} alt="Image" fill objectFit="cover" objectPosition="top" quality={100} className="rounded-2xl shadow-lg" />
                </div>
              ))}
            </div>
          </div>
          <button onClick={() => (window.location.href = "https://dsc.gg/anomalystudio/")} className="btn">
            Order our service
          </button>
        </div>
      </div>
      <div className="project-page bg-[#1e1e29] w-full py-[2vw]">
        <div className=" my-[10vw] mx-[20vw] flex flex-col gap-[10vw]">
          {project.map((data, index) => (
            <div className={`project ${(index + 1) % 2 ? "" : "reverse"}`} key={index}>
              <div>
                <Image src={data.image} alt="Image" fill quality={100} />
              </div>
              <div>
                <h3>{data.title}</h3>
                <p>{data.desc}</p>
                <button onClick={() => (window.location.href = data.button.link)} className="btn">
                  {data.button.text}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="links-page flex flex-col gap-[20px] text-center justify-center my-[10vw]">
        <p className="text-[1.5rem] font-[600] mb-[20px]">Follow us on social media</p>
        <div className="flex gap-[50px] justify-center">
          {links.map((data, index) => (
            <a key={index} href={data.link} className="relative w-[100px] h-[100px] hover:scale-110 transition-transform duration-300">
              <Image src={data.icon} alt="Logo" fill className="object-cover cursor-pointer" />
            </a>
          ))}
        </div>
      </div>
      <footer className="text-center mb-[20px]">
        <a href="https://dsc.gg/anomalystudio" className="text-[0.8rem]">
          ©2025 Anomaly Studio. All rights reserved.
        </a>
      </footer>
    </div>
  );
}
