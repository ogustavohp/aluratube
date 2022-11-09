import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");
  return (
    <>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Header />
        <TimeLine searchValue={valorDoFiltro} playlists={config.playlists} />
        <Influenciadores favoritos={config.favoritos} />
      </div>
    </>
  );
}

export default HomePage;

const StyledHeader = styled.div`
  .banner {
    margin-top: 50px;
    width: 100vw;
    height: 230px;
    background-image: url(${config.bg});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .foto-perfil {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <div className="banner"></div>
      <section className="user-info">
        <img
          src={`https://github.com/${config.github}.png`}
          alt="Foto de perfil"
          className="foto-perfil"
        />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function TimeLine({ searchValue, ...props }) {
  const playListNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      <div>
        {playListNames.map((playListName) => {
          const videos = props.playlists[playListName];
          return (
            <section key={playListName}>
              <h2>{playListName}</h2>
              <div>
                {videos
                  .filter((video) => {
                    const titleNormalized = video.title.toLowerCase();
                    const searchValueNormalized = searchValue.toLowerCase();
                    return titleNormalized.includes(searchValueNormalized);
                  })
                  .map((video) => {
                    return (
                      <a key={video.url} href={video.url}>
                        <img src={video.thumb} />
                        <span>{video.title}</span>
                      </a>
                    );
                  })}
              </div>
            </section>
          );
        })}
      </div>
    </StyledTimeline>
  );
}

const StyledInfluenciadores = styled.section`
  section {
    width: 100%;
    overflow: hidden;
    padding: 16px;
  }

  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
  div {
    display: flex;
    gap: 16px;
    font-weight: bold;
    justify-content: space-around;
    overflow-x: scroll;
  }
  h2 {
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

function Influenciadores(props) {
  return (
    <StyledInfluenciadores>
      <section className="favoritos">
        <h2>Youtubers Favoritos</h2>
        <div className="icones">
          {props.favoritos.map((favorito) => {
            return (
              <a key={favorito.link} src={favorito.link}>
                <img src={favorito.imagem} />
                <p>{favorito.nome}</p>
              </a>
            );
          })}
        </div>
      </section>
    </StyledInfluenciadores>
  );
}
