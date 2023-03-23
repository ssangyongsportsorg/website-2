import { Community } from "./Community";
import { Customers } from "./Customers";
import { Hero } from "./Hero";
import { RpgSystem } from "./RpgSystem";
import { Features } from "./features";
import Sponsor from "./Sponsor";
import { fetchGuild } from "@utils/api";
import { GetStaticProps } from "next";
import { useSSG } from "nextra/data";

export type HomeProps = {
  serverMembers: number;
  guildCount: number;
};

export const getStaticProps: GetStaticProps<{ ssg: HomeProps }> = async () => {
  const { guildCount, serverMembers } = await fetchGuild().catch(() => ({
    guildCount: 0,
    serverMembers: 0,
  }));

  return {
    props: {
      ssg: {
        serverMembers,
        guildCount,
      },
    },
    revalidate: 60,
  };
};

export default function HomePage() {
  const { guildCount, serverMembers } = useSSG() as HomeProps;

  return (
    <div className="bg-white dark:bg-black">
      <style global jsx>
        {`
          html,
          body {
            max-width: 100% !important;
            height: 100% !important;
            width: 100% !important;
            overflow-x: hidden !important;
            overflow-y: auto !important;
          }

          .nx-overflow-x-hidden {
            overflow-x: unset !important;
          }
        `}
      </style>
     <div className="header">
    <div className="container">
      <div className="hero-content">
        <div className="hero-block">
          <div className="content-block-hero">
            <h1 className="heading-2">
              <strong className="bold-text-9">我們的</strong>
              <span>
                <strong className="bold-text">使命</strong>
              </span>
              <strong className="bold-text-9">是將</strong>
              <span>
                <strong className="bold-text-3">雙</strong>
              </span>
              <strong className="bold-text-3">龍</strong>
              <span>
                <strong className="bold-text-3">體</strong>
                <strong className="bold-text-3">育</strong>
              </span>
              <strong className="bold-text-10">組成</strong>
              <span>
                <strong className="bold-text-6">最棒</strong>
             </span>
              <strong className="bold-text-10">體育組織</strong>
              <span>
              </span>
              <span className="cursor">
                <strong className="cursor" data-owner="main"></strong>
              </span>
            </h1>
            <div className="button-wrap-hero">
            </div>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img
            alt=""
            className="hero-image"
            src="https://74-rho.vercel.app/images/undraw_fitness_stats_sht6.svg"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="section-content">
    <div className="container space-below" id={123}>
      <div className="title-wrap-left">
        <p className="title">OUR&nbsp;sport</p>
        <h3 className="heading-primary">
          雙龍體育
          <span className="text-span">的運動</span>
        </h3>
      </div>
      <div className="service-card-wrap">
        <div className="column">
          <div className="service-card">
            <img
              alt=""
              className="service-icon"
              src="https://74-rho.vercel.app/images/baseball-16.png"
              width={75}
            />
            <div className="card-content-wrap">
              <h3 className="heading-3">雙龍職棒</h3>
              <p className="paragraph-2">
                <strong>
                  棒球，（英語：Baseball、日韓稱為野球），為一種團體球類運動，由人數最少為9人的两支队伍在一個扇形的球場进行攻擊與守備。棒球球員分為攻...
                </strong>
              </p>
            </div>
          
           
          </div>
        </div>
        <div className="column">
          <div className="service-card">
            <img
              alt=""
              className="service-icon"
              src="https://74-rho.vercel.app/images/889455.png"
              width={75}
            />
            <div className="card-content-wrap">
              <h3 className="heading-3">​雙龍職籃</h3>
              <p className="paragraph-2">
                <strong>
                  籃球，為一種由兩隊參與，在一個長方形籃球場進行的球類運動。每隊出場5名隊員，可將球向任何方向傳、投、拍、滾或運，目的是將籃球投入對方球籃得分，並阻止對方獲得控球權或得...
                </strong>
              </p>
            </div>
           
          </div>
        </div>
        <div className="column">
          <div className="service-card">
            <img
              alt=""
              className="service-icon"
              src="https://74-rho.vercel.app/images/53283.png"
              width={75}
            />
            <div className="card-content-wrap">
              <h3 className="heading-3">雙龍足球</h3>
              <p className="paragraph-2">
                <strong>
                  足球（football）主要專指英式足球，官方名為協會足球（association
                  football，簡稱soccer），是一種世界流行的團體球類運動，也是所有體育運動中最受歡迎、接受度最高、普及面最廣的一種，被譽為「世界遊戲」
                </strong>
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="column-wrap-reversed">
        <div className="image-block">
          <img
            alt=""
            data-w-id="cd4d931f-771b-3662-2f2f-9a8f90ae76b5"
            src="https://74-rho.vercel.app/images/62d564600ff95899fb6eda9d_75df1528-2822-4edf-9c6a-8cd50c0c2c28-p-500.png"
          />
        </div>
        <div className="content-block-left">
          <div className="content-wrap">
            <p className="title">
              slb
              <br />
            </p>
            <h2 className="heading-primary">​雙龍職棒</h2>
            <p className="paragraph">
              <strong>
                棒球，（英語：Baseball、日韓稱為野球），為一種團體球類運動，由人數最少為9人的两支队伍在一個扇形的球場进行攻擊與守備。棒球球員分為攻...
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div className="column-wrap">
        <div className="image-block">
          <img
            alt=""
            src="https://74-rho.vercel.app/images/62d56332e87b47c78b67ac6c_taxi-basketball.png"
            width={398}
          />
              <p>&nbsp;</p>
  <p>
    <br />
  </p>
        </div>
  
        <div className="content-block-right">
          <div className="content-wrap">
            <p className="title">sba</p>
            <h2 className="heading-primary">​雙龍職籃</h2>
            <p className="paragraph">
              <strong>
                籃球，為一種由兩隊參與，在一個長方形籃球場進行的球類運動。每隊出場5名隊員，可將球向任何方向傳、投、拍、滾或運，目的是將籃球投入對方球籃得分，並阻止對方獲得控球權或得分。籃球是世界上最多人觀看
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section-statistics">
    <div className="container">
      <div className="title-wrap">
        <p className="title">about ssport</p>
        <h3 className="heading-primary h3-centre">
          關於我們
          <br />
        </h3>
      </div>
      <div className="feature-number-wrap">
        <div className="statistic-circle-wrap">
          <div className="circle-div">
            <h4 className="counterup">2017</h4>
            <div className="title-capped">創建雙龍體育</div>
          </div>
        </div>
        <div className="arrow-wrap">
          <img alt="" className="arrow-image" src="https://site123-git-main-ssangyongsports.vercel.app/images/arrow-right.svg" />
          <img
            alt=""
            className="arrow-image-mobile"
            src="https://site123-git-main-ssangyongsports.vercel.app/images/arrow-down.svg"
          />
        </div>
        <div className="statistic-circle-wrap">
          <div className="circle-div">
            <h1 className="counterup">2019</h1>
            <div className="title-capped">創建sba,slb</div>
          </div>
        </div>
        <div className="arrow-wrap">
          <img alt="" className="arrow-image" src="https://site123-git-main-ssangyongsports.vercel.app/images/arrow-right.svg" />
          <img
            alt=""
            className="arrow-image-mobile-02"
            src="https://site123-git-main-ssangyongsports.vercel.app/images/arrow-down-02.svg"
          />
        </div>
        <div className="statistic-circle-wrap">
          <div className="circle-div">
            <h1 className="counterup">2022</h1>
            <div className="title-capped">收購js</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
