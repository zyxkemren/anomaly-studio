"use client";

import CustomCursor from "@/components/CustomCursor";
import Image from "next/image";
import "../home.css";

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
    <div className="overflow-x-hidden whole-page">
      <div className="navbar">
        <ul>
          <li>About Us</li>
          <li>Project</li>
          <li>Discord</li>
        </ul>
      </div>
      <div className="main-page relative h-screen w-full">
        <Image src="/v2/background-anomaly-1.png" alt="Background" fill className="bg-main" quality={100} />
        <Image src="/v2/text-anomaly-studio.png" alt="Anomaly Studio" width={400} height={100} className="title" quality={100} />
      </div>
      <div className="content-page">
        <div className="boutus-page w-full">
          <div className="boutus-container flex flex-col justify-center items-center">
            <Image src="/v2/boutus.png" alt="About Us" width={250} height={100} quality={100} className="boutus-img"/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
              pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
              Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per
              conubia nostra inceptos himenaeos.
            </p>
          </div>
        </div>
        <div className="project-page w-full">
          <div className="project-container flex flex-col justify-center items-start">
            {project.map((data, index) => (
              <div className={`project ${(index + 1) % 2 ? "" : "reverse"}`} key={index}>
                <div>
                  <Image src={data.image} alt="Image" fill quality={100} />
                </div>
                <div>
                  <h3>{data.title}</h3>
                  <p>{data.desc}</p>
                  <button onClick={() => (window.location.href = data.button.link)} className="btn-v2">
                    {data.button.text}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <footer className="text-center mt-[120px] pb-[20px]">
          <a href="https://dsc.gg/anomalystudio" className="text-[0.8rem]">
            ©2025 Anomaly Studio. All rights reserved.
          </a>
        </footer>
      </div>
    </div>
  );
}
